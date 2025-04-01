"use client";

import React from "react";
import { Container, Box, Typography, IconButton } from "@mui/material";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  WhatsApp,
  Phone,
  Email,
  Map,
  PinDrop,
} from "@mui/icons-material";
import { styled } from "@mui/system";

// Styled Components
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
const ContactPageContainer = styled(Container)({
  padding: "60px 50px",
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color:'black',
  gap: '20px',
  minHeight: "40vh",
  background: '#fff',
  boxShadow: '0 0 15px rgba(0,0,0,0.08)',
  borderRadius: '12px',
  margin: '30px auto',
  "@media (max-width: 768px)": {
    padding: '40px 20px',
  }
});

const ContactBox = styled(Box)({
  width: '100%',
  display: 'flex',
  gap: '40px',
  padding: '30px',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'row',
  "@media (max-width: 768px)": {
    flexDirection: 'column',
    padding: '15px',
    gap: '30px',
  }
});

const MapContainer = styled(Box)({
  flex: 1,
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  "@media (max-width: 768px)": {
    width: '100%',
  }
});

const ContactInfoContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  padding: '10px 20px',
  "@media (max-width: 768px)": {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  "@media (min-width: 769px)": {
    alignItems: 'flex-start',
  }
});

const ContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
  transition: 'transform 0.2s ease',
  "&:hover": {
    transform: 'translateY(-2px)',
  },
  "@media (max-width: 768px)": {
    justifyContent: 'center',
  }
});

const SectionTitle = styled(Typography)({
  position: 'relative',
  marginBottom: '25px',
  "&:after": {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: '0',
    width: '50px',
    height: '3px',
    background: 'orange',
    "@media (max-width: 768px)": {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  }
});

// Component
const ContactPage = () => {
  return (
    <ContactPageContainer maxWidth="lg" id="contact-us" className="pt-[87px] bg-white px-6">
      <SectionTitle variant="h4" sx={{ fontWeight: 'bold' }}>Reach Out <span className="text-orange-500">Us</span> </SectionTitle>
      
      <ContactBox>
        <MapContainer>
          <iframe
            loading="lazy"
            allowFullScreen
            title="Thakur College of Engineering and Technology Location"
            src="https://maps.google.com/maps?q=thakur+college+of+engineering+and+technology&output=embed"
            style={{
              border: "0",
              width: "100%",
              height: "400px",
            }}
          ></iframe>
        </MapContainer>
        
        <ContactInfoContainer>
          <SectionTitle variant="h5" sx={{ fontWeight: 'medium' }}>Contact Us</SectionTitle>
          
          <ContactItem>
            <Phone sx={{ color: '#f97316 ' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Phone</Typography>
              <Typography variant="body1">
                <a href="tel:+918355908284" style={{ textDecoration: 'none', color: 'inherit' }}>
                  +91 83559 08284
                </a>
              </Typography>
            </Box>
          </ContactItem>
          
          <ContactItem>
            <Email sx={{ color: '#f97316 ' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Email</Typography>
              <Typography variant="body1">
                <a href="mailto:gogoxenergy@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  gogoxenergy@gmail.com
                </a>
              </Typography>
            </Box>
          </ContactItem>
          
          <ContactItem>
            <PinDrop sx={{ color: '#f97316 ' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'medium' }}>Visit Us</Typography>
              <Typography variant="body1">
                TCET, Kandivali East, Mumbai - 400101
              </Typography>
            </Box>
          </ContactItem>
          
          <Box sx={{ 
            display: 'flex', 
            gap: '15px', 
            marginTop: '15px',
            "@media (max-width: 768px)": {
              justifyContent: 'center',
            }
          }}>
            {[LinkedIn, Twitter, Instagram, Facebook, WhatsApp].map((Icon, index) => (
              <IconButton 
                key={index}
                sx={{ 
                  backgroundColor: '#f5f5f5', 
                  color: '#000 ',
                  '&:hover': {
                    backgroundColor: '#f97316 ',
                    color: '#fff',
                    transform: 'translateY(-3px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
          <FloatingButton
        onClick={() => window.open("https://wa.me/918355908284", "_blank")}
      >
        <WhatsApp fontSize="large" />
      </FloatingButton>

        </ContactInfoContainer>
      </ContactBox>
    </ContactPageContainer>
  );
};

export default ContactPage;