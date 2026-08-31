#!/usr/bin/env python3
"""
UBC Vancouver Course Description Scraper
========================================
Scrapes course metadata from:
  https://vancouver.calendar.ubc.ca/course-descriptions/subject/<SUBJECT>

Outputs JSON with the structure requested by the user.
Section scheduling data (rooms, times, instructors) are NOT available
on the calendar description pages and are left empty.
"""

import re
import json
import html
import time
import argparse
from pathlib import Path
from typing import List, Dict, Any
from urllib.parse import urljoin

import requests


class UBCCourseDescriptionScraper:
    BASE_URL = "https://vancouver.calendar.ubc.ca"

    def __init__(self, delay: float = 0.5):
        self.session = requests.Session()
        self.session.headers.update({
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/115.0.0.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        })
        self.delay = delay

    def fetch(self, url: str) -> str:
        """Fetch raw HTML with basic retry logic."""
        for attempt in range(3):
            try:
                resp = self.session.get(url, timeout=30)
                resp.raise_for_status()
                return resp.text
            except requests.RequestException as exc:
                if attempt == 2:
                    raise exc
                time.sleep(1.0 * (attempt + 1))
        return ""

    def parse_subject_page(self, url: str) -> List[Dict[str, Any]]:
        """
        Parse a single subject description page.
        Returns a list of course dicts matching the requested schema.
        """
        raw_html = self.fetch(url)

        # Each course is an <article> with an <h3> header:
        #   <h3 class="text-lg">CPSC_V 100 (3)  <strong>Computational Thinking</strong></h3>
        h3_pattern = re.compile(
            r'<h3[^>]*>\s*([A-Z]+)_V\s+(\d+(?:-\d+)?)\s+\(([^)]+)\)\s+<strong>(.*?)</strong>\s*</h3>',
            re.IGNORECASE | re.DOTALL,
        )

        matches = list(h3_pattern.finditer(raw_html))
        courses: List[Dict[str, Any]] = []

        for i, m in enumerate(matches):
            dept, course_num_str, credits_str, title = m.groups()
            block_start = m.end()
            block_end = matches[i + 1].start() if (i + 1) < len(matches) else len(raw_html)
            block = raw_html[block_start:block_end]

            # Extract the first <p> tag inside the course block
            p_match = re.search(r'<p[^>]*>(.*?)</p>', block, re.DOTALL)
            if not p_match:
                continue

            # Clean paragraph text
            p_text = p_match.group(1)
            p_text = re.sub(r'<[^>]+>', ' ', p_text)          # strip inner tags
            p_text = html.unescape(p_text)                     # &amp; -> &
            p_text = re.sub(r'\s+', ' ', p_text).strip()

            # -----------------------------------------------------------------
            # 1. Extract [lecture-lab-tutorial] distribution (not the same as credits)
            # -----------------------------------------------------------------
            dist_match = re.search(
                r'\[(\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?(?:-\d+(?:\.\d+)?)?)\]',
                p_text,
            )
            if dist_match:
                # Remove it from the description text
                p_text = p_text[:dist_match.start()] + p_text[dist_match.end():]
                p_text = re.sub(r'\s+', ' ', p_text).strip()

            # -----------------------------------------------------------------
            # 2. Extract Prerequisites
            # -----------------------------------------------------------------
            prereq = ""
            prereq_match = re.search(r'Prerequisite[s]?\s*:\s*(.+)', p_text, re.IGNORECASE)
            if prereq_match:
                full_text = prereq_match.group(0)
                prereq = prereq_match.group(1).strip()

                # Stop if Corequisite appears later in the same sentence
                coreq_split = re.search(r'Corequisite[s]?\s*:', prereq, re.IGNORECASE)
                if coreq_split:
                    prereq = prereq[:coreq_split.start()].strip().rstrip('.')

                # Remove from description
                p_text = p_text.replace(full_text, '', 1)
                p_text = re.sub(r'\s+', ' ', p_text).strip()

            # -----------------------------------------------------------------
            # 3. Extract Corequisites
            # -----------------------------------------------------------------
            coreq = ""
            coreq_match = re.search(r'Corequisite[s]?\s*:\s*(.+)', p_text, re.IGNORECASE)
            if coreq_match:
                full_text = coreq_match.group(0)
                coreq = coreq_match.group(1).strip()

                # Stop if Prerequisite appears later in the same sentence
                prereq_split = re.search(r'Prerequisite[s]?\s*:', coreq, re.IGNORECASE)
                if prereq_split:
                    coreq = coreq[:prereq_split.start()].strip().rstrip('.')

                # Remove from description
                p_text = p_text.replace(full_text, '', 1)
                p_text = re.sub(r'\s+', ' ', p_text).strip()

            # -----------------------------------------------------------------
            # 4. Final description cleanup
            # -----------------------------------------------------------------
            desc = p_text
            desc = re.sub(r'This course is not eligible for Credit/D/Fail grading\.', '', desc)
            desc = re.sub(r'\s+', ' ', desc).strip()

            # -----------------------------------------------------------------
            # 5. course_id as int when possible, else keep string
            # -----------------------------------------------------------------
            try:
                course_id_val = int(course_num_str)
            except ValueError:
                course_id_val = course_num_str

            # -----------------------------------------------------------------
            # 6. Sections placeholder
            # -----------------------------------------------------------------
            # The course description page does NOT contain section scheduling
            # data. To populate this array you need to query UBC's SSC /
            # Course Schedule endpoint (or the Workday/Student API) for the
            # specific term. Example pseudo-code:
            #
            #   sections = fetch_ssc_sections(
            #       subject=dept,
            #       course=course_num_str,
            #       term="2026W"   # or whatever term code
            #   )
            #
            # Because UBC SSC requires authentication and anti-bot tokens,
            # that logic is left as a separate integration.
            # -----------------------------------------------------------------
            sections: List[Dict[str, Any]] = []

            course = {
                "title": title.strip(),
                "course_code": f"{dept}_V",
                "course_id": course_id_val,
                "credits": credits_str.strip(),
                "description": desc,
                "prerequisite": prereq,
                "corequisite": coreq,
                "sections": sections,
            }
            courses.append(course)

        return courses

    def scrape_urls(self, urls: List[str]) -> List[Dict[str, Any]]:
        all_courses: List[Dict[str, Any]] = []
        for url in urls:
            print(f"Scraping: {url}")
            try:
                courses = self.parse_subject_page(url)
                all_courses.extend(courses)
                print(f"  -> extracted {len(courses)} courses")
            except Exception as exc:
                print(f"  -> ERROR: {exc}")
            time.sleep(self.delay)
        return all_courses


def main():
    parser = argparse.ArgumentParser(description="Scrape UBC Vancouver course descriptions")
    parser.add_argument(
        "--urls",
        nargs="+",
        default=[
            "https://vancouver.calendar.ubc.ca/course-descriptions/subject/cpscv",
            # Add more subjects here, e.g.:
            # "https://vancouver.calendar.ubc.ca/course-descriptions/subject/mathv",
        ],
        help="One or more subject description URLs to scrape",
    )
    parser.add_argument(
        "-o",
        "--output",
        default="ubc_courses.json",
        help="Output JSON file path",
    )
    args = parser.parse_args()

    scraper = UBCCourseDescriptionScraper(delay=0.5)
    courses = scraper.scrape_urls(args.urls)

    out_path = Path(args.output)
    out_path.write_text(json.dumps(courses, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nWrote {len(courses)} courses to {out_path.resolve()}")


if __name__ == "__main__":
    main()
