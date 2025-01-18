import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveAppBar from "./navbar/page";
import Footer from "./footer/page";

const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gogo Energy",
  description:
    "Revolutionizing the way you ride with sustainable and innovative energy solutions.",
  keywords:
    "electric vehicles, clean energy, Gogo Energy, sustainable transport",
  authors: [{ name: "Gogo Energy Team", url: "https://gogoenergy.in" }],
  openGraph: {
    title: "Gogo Energy - Revolutionizing the Way You Ride",
    description:
      "Discover innovative, sustainable energy solutions for modern transportation.",
    url: "https://gogoenergy.in",
    images: [
      {
        url: "https://gogoenergy.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Gogo Energy Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Global Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="electric vehicles, clean energy, Gogo Energy, sustainable transport"
        />
        <meta name="author" content="Gogo Energy Team" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gogo Energy - Revolutionizing the Way You Ride"
        />
        <meta
          property="og:description"
          content="Discover innovative, sustainable energy solutions for modern transportation."
        />
        <meta property="og:url" content="https://gogoenergy.in" />
        <meta property="og:image" content="https://gogoenergy.in/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gogo Energy" />
        <meta
          name="twitter:description"
          content="Revolutionizing the way you ride with Gogo Energy."
        />
        <meta name="twitter:image" content="https://gogoenergy.in/logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gogo Energy",
            url: "https://gogoenergy.in",
            logo: "https://gogoenergy.in/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 83559 08284",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://www.facebook.com/GogoEnergy",
              "https://www.instagram.com/GogoEnergy",
            ],
          })}
        </script>

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
