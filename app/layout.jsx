import { Space_Grotesk, DM_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'rik.ai — Understand your customers. Take care of them, too.',
  description: 'rik.ai builds AI products that help businesses understand what customers need and act on it when it matters — Market Research for customer intelligence, LiveAgent for grounded, governed AI support.',
  openGraph: {
    title: 'rik.ai — Understand your customers. Take care of them, too.',
    description: 'Two AI product lines, one conviction: Market Research to understand your customers, LiveAgent to take care of them.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
