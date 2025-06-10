import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gospel of Grace Academy and University International',
  description: 'Raising a generation that is Christo centric and educated about the gospel of grace',
  keywords: ['theology', 'education', 'christian studies', 'gospel of grace', 'university', 'academy'],
};

import Footer from './(components)/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Gospel of Grace Academy and University International</title>
        <meta name="description" content="Raising a generation that is Christo centric and educated about the gospel of grace" />
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
