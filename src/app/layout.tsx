import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhay1777.github.io"),
  title: "Abhay Dubey — IT Student & Developer",
  description: "Portfolio of Abhay Dubey, an IT engineering student building web and Android projects.",
  authors: [{ name: "Abhay Dubey" }],
  keywords: ["Abhay Dubey", "portfolio", "IT student", "web development", "Android", "Java", "Next.js", "TypeScript"],
  openGraph: {
    title: "Abhay Dubey — IT Student & Developer",
    description: "Web, Android and software projects by Abhay Dubey.",
    type: "website",
    locale: "en_IN",
    url: "https://abhay1777.github.io/Portfolio/",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
