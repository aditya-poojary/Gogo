"use client";
import React from "react";
import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import About from "../about/page";
import Contact from "../contact/page";
import ProductDescription from "../products/page";

// Keyframes for text animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// HeroSection with parallax effect and background overlay
const HeroSection = styled("section")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  minHeight: "700px",
  backgroundImage: `url("/hero2.jpeg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "0 20px",
  position: "relative",
  borderBottom: "5px solid #fff",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  

  "@media (min-width: 768px)": {
    backgroundAttachment: "fixed",
  },
});

// "Revolutionizing the way you ride" tagline styling (responsive)
const TaglineText = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "bold",
  fontSize: "60px", // Desktop default
  background: "linear-gradient(to bottom, black -30%, #FF4500 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${fadeIn} 2s ease-out`,
  letterSpacing: "3px",
  lineHeight: "1.5",
  textAlign: "center",
  marginBottom: "16px",
  maxWidth: "800px",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",

  // Tablet view
  "@media (max-width: 1024px)": {
    fontSize: "45px",
    letterSpacing: "2px",
    maxWidth: "600px",
    marginBottom: "12px",
  },

  // Mobile view
  "@media (max-width: 640px)": {
    fontSize: "32px",
    letterSpacing: "1.5px",
    maxWidth: "100%",
    marginBottom: "8px",
    lineHeight: "1.3",
  },
});

const ComingSoonText = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
  fontSize: "30px",
  color: "#FFFFFF",
  animation: `${fadeIn} 1.5s ease-out`,
  letterSpacing: "1.5px",
  lineHeight: "1.2",
  textAlign: "left",
  alignSelf: "flex-start",
});

const ShapeDivider = styled("div")({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100px",
  backgroundColor: "white",
  clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
});

const HomePage = () => {
  return (
    <div className="mt-4" id="home">
      {/* Hero Section */}
      <HeroSection>
        {/* Tagline "Revolutionizing the way you ride" */}
        <TaglineText variant="h2">Revolutionizing the way</TaglineText>
        <TaglineText variant="h2">you ride.</TaglineText>

        {/* "Coming Soon" text */}
        <ComingSoonText variant="h2">Coming Soon ....</ComingSoonText>

        {/* Shape Divider */}
        <ShapeDivider />
      </HeroSection>

      <ProductDescription />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
