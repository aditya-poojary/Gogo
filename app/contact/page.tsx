"use client";

import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  WhatsApp,
} from "@mui/icons-material";
import { styled } from "@mui/system";

// Styled Components
const ContactPageContainer = styled(Container)({
  marginTop: "50px",
  padding: "50px 20px",
});

const GridBackground = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
  alignItems: "center",
  textAlign: "center",
  padding: "60px 20px",
  background: "linear-gradient(145deg, #f5f5f5, #ddd)",
  borderRadius: "12px",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
});

const Header = styled(Box)({
  textAlign: "center",
  marginBottom: "60px",
});


const Card = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: "40px 20px",
  borderRadius: "16px",
  transition: "transform 0.3s ease",
  "&:hover": {
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", // Enhanced shadow on hover
  },
});


const FloatingButton = styled(Box)({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "#25D366",
  padding: "16px",
  borderRadius: "50%",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const IconRow = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  marginTop: "40px",
});

// Component
const ContactPage = () => {
  return (
    <ContactPageContainer maxWidth="lg" id="contact-us">
      {/* Header Section */}
      <Header>
        <Typography variant="h3" fontWeight="bold">
          Reach Out to Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "10px", color: "gray" }}
        >
          We&apos;d love to hear from you and collaborate.
        </Typography>
      </Header>

      {/* Contact Grid Section */}
      <GridBackground>
        <Card>
          <Typography variant="h5">Call Us</Typography>
          <Typography variant="body1" color="primary">
            +91 83559 08284
          </Typography>
        </Card>

        <Card>
          <Typography variant="h5">Email Us</Typography>
          <Typography variant="body1" color="primary">
            gogoxenergy@gmail.com
          </Typography>
        </Card>

        <Card>
          <Typography variant="h5">Visit Us</Typography>
          <Typography variant="body1" color="primary">
            TCET, Kandivali East, Mumbai - 400101
          </Typography>
        </Card>
      </GridBackground>

      {/* Social Media Section */}
      <IconRow>
        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com/company/gogo-energy/"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://x.com/gogoenergyIN"
          target="_blank"
        >
          <Twitter fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.instagram.com/gogoenergy.in/"
          target="_blank"
        >
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com/profile.php?id=61570236652723"
          target="_blank"
        >
          <Facebook fontSize="large" />
        </IconButton>
      </IconRow>

      {/* Floating WhatsApp Button */}
      <FloatingButton
        onClick={() => window.open("https://wa.me/918355908284", "_blank")}
      >
        <WhatsApp fontSize="large" />
      </FloatingButton>
    </ContactPageContainer>
  );
};

export default ContactPage;
