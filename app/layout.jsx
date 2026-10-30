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
  title: 'rik.ai — Better customer experiences begin with better understanding.',
  description: 'Businesses need to understand what customers think, and be there when customers need them. Voice for AI-powered customer research, LiveAgent for knowledge-powered AI support.',
  openGraph: {
    title: 'rik.ai — Better customer experiences begin with better understanding.',
    description: 'Two AI products, one philosophy: Voice to listen deeper, LiveAgent to respond smarter.',
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
