import "./globals.css";
import ResponsiveAppBar from "./navbar/page";
import Footer from "./footer/page";

export const metadata = {
  title: "Gogo Energy",
  description:
    "Revolutionizing the way you ride with sustainable energy solutions.",
  keywords: "Gogo Energy, electric vehicles, clean energy, sustainability",
  author: "Gogo Energy",
  url: "https://www.gogoenergy.com",
  image: "/logo.png", // Ensure this image is in the public folder
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.url + metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.url + metadata.image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gogo Energy",
              url: metadata.url,
              logo: metadata.url + metadata.image,
              description: metadata.description,
              sameAs: [
                "https://www.facebook.com/gogoenergy",
                "https://www.twitter.com/gogoenergy",
                "https://www.linkedin.com/company/gogoenergy",
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href={metadata.image} type="image/png" />

        <title>{metadata.title}</title>
      </head>
      <body>
        {/* Navigation Bar */}
        <ResponsiveAppBar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
