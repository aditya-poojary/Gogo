import Header from "next/head";

const Head = () => {
  const metadata = {
    title: "Gogo Energy",
    description:
      "Revolutionizing the way you ride with sustainable energy solutions.",
    keywords: "Gogo Energy, electric vehicles, clean energy, sustainability",
    author: "Gogo Energy",
    url: "https://www.gogoenergy.com",
    image: "/favicon.ico", // Ensure this image is in the public folder
  };

  return (
    <>
      <Header>
        <title>Gogo Energy</title>

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

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Header>
    </>
  );
};

export default Head;
