import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ClientFeatures from "@/components/ui/ClientFeatures";

// Load the Sora font
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santhosh Raj | Web Developer Portfolio",
  description:
    "Discover Santhosh Raj's expertise in React, Django, Flask, and full-stack development. Explore cutting-edge projects, skills, and open-source contributions.",
  keywords:
    "Santhosh Raj, Web Developer, React, Django, Flask, Full-Stack Developer, Portfolio, Projects, Skills",
  authors: [{ name: "Santhosh Raj", url: "https://yourdomain.com" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar bg-black">
      <body className={font.className}>
        <ClientFeatures />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
