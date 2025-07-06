import './globals.css';
import { Metadata } from 'next';
import React from 'react';
import Navigation from './(components)/Navigation';
import DownloadsMenu from './(components)/DownloadsMenu';
import Footer from './(components)/Footer';

export const metadata: Metadata = {
  title: 'Gospel of Grace Academy',
  description: 'Raising a generation that is Christo centric',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <DownloadsMenu />
      </body>
    </html>
  );
}
