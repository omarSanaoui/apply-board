import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apply-Board",
  description: "Track your job applications on a drag-and-drop board — one board for everything, or split them up however you want.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{
          __html: 'const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; const OStheme = isDark ? "dark" : "light"; const theme = localStorage.getItem("theme") || OStheme; document.documentElement.setAttribute("data-theme", theme);'
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
