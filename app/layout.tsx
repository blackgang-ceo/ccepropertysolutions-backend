import './globals.css';
import { Navigation } from '@/components/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCE Property Solutions',
  description: 'Property marketplace, agent network, and admin dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
