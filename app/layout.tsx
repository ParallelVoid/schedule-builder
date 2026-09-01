import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termwise — Your next term, sorted',
  description:
    'An agent-assisted university course planner powered by WebMCP.',
  openGraph: {
    title: 'Termwise — Your next term, sorted',
    description: 'Agent-assisted university course planning with WebMCP.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termwise — Your next term, sorted',
    description: 'Agent-assisted university course planning with WebMCP.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
