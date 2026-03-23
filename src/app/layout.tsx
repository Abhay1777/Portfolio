import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "Abhay Dubey | Full Stack Developer",
    description:
      "Crafting high-performance, beautiful, and interactive digital experiences.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Dubey | Full Stack Developer",
    description: "Crafting beautiful and interactive digital experiences.",
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
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--bg-color)] text-[var(--text-color)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
