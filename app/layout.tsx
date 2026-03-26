import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacob Chamie — Software Engineer",
  description:
    "Forward Deployed Engineer & Full-Stack Developer. UC Berkeley CS graduate with experience at AWS, Expedia, Scale AI, and building AI-driven enterprise systems.",
  keywords: ["Jacob Chamie", "Software Engineer", "Full Stack", "AI", "React", "Next.js"],
  openGraph: {
    title: "Jacob Chamie — Software Engineer",
    description: "Portfolio of Jacob Chamie — Forward Deployed Engineer & Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080B0E] text-[#F0F4FF] antialiased">
        {children}
      </body>
    </html>
  );
}
