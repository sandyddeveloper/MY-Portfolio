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
  robots: "index, follow",
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
      <head>
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Santhosh Raj | Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my projects, expertise, and contributions in React, Django, and Flask."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Santhosh Raj | Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore my projects and skills in React, Django, Flask."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/twitter-image.jpg"
        />
        <meta name="twitter:site" content="@yourusername" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Santhosh Raj",
            url: "https://yourdomain.com",
            sameAs: [
              "https://github.com/yourusername",
              "https://linkedin.com/in/yourusername",
              "https://twitter.com/yourusername",
            ],
            jobTitle: "Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            alumniOf: "Your University Name",
            knowsAbout: ["React", "Django", "Flask", "Full-Stack Development"],
            description:
              "Showcasing expertise in React, Django, and Flask. Explore my projects and contributions.",
            image: "https://yourdomain.com/your-photo.jpg",
          })}
        </script>
      </head>
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
