/* Apply the saved colour theme before the page renders to avoid a flash. */
(function () {
  "use strict";

  const STORAGE_KEY = "termwise_theme_v1";
  const choices = new Set(["system", "light", "dark"]);
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function getPreference() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return choices.has(saved) ? saved : "system";
    } catch (error) {
      return "system";
    }
  }

  function resolveTheme(preference = getPreference()) {
    return preference === "system" ? (media.matches ? "dark" : "light") : preference;
  }

  function apply(preference = getPreference()) {
    const resolved = resolveTheme(preference);
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
    return resolved;
  }

  function setPreference(preference) {
    if (!choices.has(preference)) return getPreference();
    try {
      if (preference === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, preference);
    } catch (error) {
      // The selected theme still applies for this page when storage is blocked.
    }
    apply(preference);
    window.dispatchEvent(new CustomEvent("termwise-theme-changed", {
      detail: { preference, theme: resolveTheme(preference) }
    }));
    return preference;
  }

  media.addEventListener?.("change", () => {
    if (getPreference() === "system") apply("system");
  });

  window.TermwiseTheme = { getPreference, resolveTheme, apply, setPreference };
  apply();
})();
