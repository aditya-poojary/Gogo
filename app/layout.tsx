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
  image: "/favicon.ico", // Ensure this image is in the public folder
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar */}
        <ResponsiveAppBar />

        {/* Main Content */}
        <main >{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
