import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./natural-theme.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay1777.github.io"),
  title: "Abhay Dubey | IT Engineering Student & Developer",
  description: "Portfolio of Abhay Dubey — an IT engineering student building web and Android projects while learning software development and DSA.",
  authors: [{ name: "Abhay Dubey" }],
  keywords: ["Abhay Dubey", "portfolio", "IT student", "web development", "Android development", "Java", "TypeScript", "Next.js", "DSA"],
  openGraph: {
    title: "Abhay Dubey | IT Engineering Student & Developer",
    description: "A student developer portfolio featuring web projects, Android applications, and DSA work.",
    type: "website",
    locale: "en_IN",
    url: "https://abhay1777.github.io/Portfolio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Dubey | IT Engineering Student & Developer",
    description: "Web, Android and DSA projects by Abhay Dubey.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}