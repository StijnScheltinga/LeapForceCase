import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ttCommons = localFont({
	variable: '--font-ttcommons',
	src: '../public/fonts/TT Commons Pro/TT Commons Pro Normal.otf'
})

const  gtAlpina = localFont({
	variable: '--font-gtalpina',
	src: '../public/fonts/GT Alpina/GTAlpina-Light.otf'
})


export const metadata: Metadata = {
  title: "LeapForce CTA Case",
  description: "Case gemaakt door Stijn Scheltinga Koopman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ttCommons.variable} ${gtAlpina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
