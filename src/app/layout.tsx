import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Muhammad S. Bilal - Portfolio',
    template: '%s | Muhammad S. Bilal',
  },
  description:
    'Software Engineer & Web Developer specializing in full-stack development',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'Full Stack',
    'React',
    'Node.js',
    'Next.js',
  ],
  authors: [{ name: 'Muhammad S. Bilal' }],
  creator: 'Muhammad S. Bilal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.muhammadsbilal.com',
    siteName: 'Muhammad S. Bilal Portfolio',
    images: [
      {
        url: 'https://www.muhammadsbilal.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad S. Bilal - Software Engineer & Web Developer',
      },
    ],
  },
  twitter: {
    siteId: '@muhammadsbilal',
    site: '@yourwebsitehandle', // Replace with your website's Twitter handle
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
