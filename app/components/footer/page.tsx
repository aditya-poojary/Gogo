"use client";
import React from "react";
import { AppBar, Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material"; // Social media icons

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#FFFFFF", // White background
        color: "#000000", // Black text color
        padding: 1, // Reduced padding
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Add shadow for depth
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center vertically
          padding: 1, // Reduced padding
        }}
      >
        {/* Logo on Top (optional, and can be reduced) */}
        <img
          src="/logo.png"
          alt="GOGO Energy Logo"
          style={{ height: 80, transition: "transform 0.3s ease" }} // Add transition for logo
          className="footer-logo"
        />

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            marginBottom: 1, // Reduced margin
            color: "#000000", // Black text for copyright text
            fontSize: "0.8rem", // Reduced font size
            fontFamily: "Poppins, sans-serif", // Font family applied
            fontWeight: "bold", // Bold font style
            letterSpacing: 1, // Add some spacing for better readability
            transition: "color 0.3s ease", // Smooth transition for color change
            "&:hover": {
              color: "#FF4500", // Change color on hover (catchy effect)
            },
          }}
        >
          &copy; 2024 GOGO ENERGY
        </Typography>

        {/* Links */}
        <Box
          sx={{
            display: "flex",
            gap: 2, // Reduced gap between links
            marginBottom: 2, // Reduced margin
            justifyContent: "center", // Ensure links are centered
          }}
        >
          <Link
            href="#"
            color="inherit"
            sx={{
              color: "#000000", // Black text for links
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "14px", // Reduced font size
              fontFamily: "Poppins, sans-serif", // Font family applied
              letterSpacing: 1.5, // Some letter spacing for visual appeal
              "&:hover": {
                color: "#FF4500", // Red color on hover
                // textDecoration: "underline",
                transform: "scale(1.05)", // Scale up effect on hover
                transition: "transform 0.3s ease, color 0.3s ease", // Add transition
              },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{
              color: "#000000",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "14px", // Reduced font size
              fontFamily: "Poppins, sans-serif",
              letterSpacing: 1.5,
              "&:hover": {
                color: "#FF4500", // Red color on hover
                // textDecoration: "underline",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease, color 0.3s ease", // Smooth transition
              },
            }}
          >
            Terms of Service
          </Link>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginBottom: 2,
            justifyContent: "center", // Center social icons
          }}
        >
          <IconButton
            sx={{
              color: "#000000",
              fontSize: "1.5rem", // Slightly larger size for icons
              "&:hover": {
                color: "#FF4500", // Red color on hover
                transform: "scale(1.2)", // Slight scaling effect
                transition: "transform 0.3s ease, color 0.3s ease", // Smooth scaling and color change
              },
            }}
            href="#"
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#000000",
              fontSize: "1.5rem", // Slightly larger size for icons
              "&:hover": {
                color: "#FF4500", // Red color on hover
                transform: "scale(1.2)",
                transition: "transform 0.3s ease, color 0.3s ease",
              },
            }}
            href="#"
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{
              color: "#000000",
              fontSize: "1.5rem", // Slightly larger size for icons
              "&:hover": {
                color: "#FF4500", // Red color on hover
                transform: "scale(1.2)",
                transition: "transform 0.3s ease, color 0.3s ease",
              },
            }}
            href="#"
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              color: "#000000",
              fontSize: "1.5rem", // Slightly larger size for icons
              "&:hover": {
                color: "#FF4500", // Red color on hover
                transform: "scale(1.2)",
                transition: "transform 0.3s ease, color 0.3s ease",
              },
            }}
            href="#"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Footer;
