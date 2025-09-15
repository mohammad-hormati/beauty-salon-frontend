import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProviders from '@/providers/AppProviders';
import setInitialColorMode from '@/utils/set-initial-color-mode';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Banoo Hoseini Beauty Salon',
  description:
    'Banoo Hoseini is a modern women’s beauty salon app that offers professional services including hair styling, skincare, makeup, and more. Book appointments, explore services, and stay updated with the latest beauty trends – all in one place.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialColorMode() }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
