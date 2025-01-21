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
  image: "/logo.png",
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
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href={metadata.image} type="image/png" />

        <title>{metadata.title}</title>
      </head>
      <body>
        <ResponsiveAppBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
