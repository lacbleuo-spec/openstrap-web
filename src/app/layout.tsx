// layout.tsx

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: {
    google: 'PLaGPERj3I88KncqTyslUXakKW1HNQ8Cpp1RRiMIZHo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
