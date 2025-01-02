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
  backgroundSize: "cover",
  "@media (min-width: 768px)": {
    backgroundAttachment: "fixed",
  },
});

// "Revolutionizing the way you ride" tagline styling (left aligned)
const TaglineText = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "bold",
  fontSize: "47px",
  color: "#FF4500", // Red highlight
  animation: `${fadeIn} 2s ease-out`,
  letterSpacing: "2px",
  lineHeight: "1.4",
  textAlign: "left",
  marginBottom: "8px",
  maxWidth: "600px",
  alignSelf: "flex-start",
});

// "Coming Soon" text styling (smaller and below tagline)
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

// Shape Divider for modern section transition
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
    <div className="mt-4">
      {/* Hero Section */}
      <HeroSection>
        {/* Tagline "Revolutionizing the way you ride" */}
        <TaglineText variant="h2">
          Revolutionizing the way you ride.
        </TaglineText>

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
