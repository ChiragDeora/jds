import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JDS Blue Opticals - Your Vision, Our Passion",
  description: "Discover curated eyewear collections crafted for clarity and style. Premium sunglasses and optical frames from JDS Blue Opticals.",
  keywords: "eyewear, sunglasses, optical frames, JDS Blue, premium glasses",
  authors: [{ name: "JDS Blue Opticals" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "JDS Blue Opticals - Your Vision, Our Passion",
    description: "Discover curated eyewear collections crafted for clarity and style.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <section id="contact">
          <Footer />
        </section>
      </body>
    </html>
  );
}
