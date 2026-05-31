import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay1777.github.io"),
  title: "Abhay Dubey | Full Stack Developer & IT Student",
  description:
    "Portfolio of Abhay Dubey — a second-year IT engineering student and full stack developer from Mumbai, specialising in Android development and modern web technologies.",
  authors: [{ name: "Abhay Dubey" }],
  keywords: [
    "Abhay Dubey",
    "portfolio",
    "full stack developer",
    "Android developer",
    "React",
    "Next.js",
    "IT student",
    "Mumbai",
    "Java",
    "TypeScript",
  ],
  openGraph: {
    title: "Abhay Dubey | Full Stack Developer",
    description:
      "Crafting high-performance, beautiful, and interactive digital experiences for Android and Web.",
    type: "website",
    locale: "en_IN",
    url: "https://abhay1777.github.io/Portfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Dubey | Full Stack Developer",
    description: "Crafting beautiful and interactive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
