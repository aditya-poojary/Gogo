// "use client";

// import React from "react";
// import { Container, Box, Typography, IconButton, Divider } from "@mui/material";
// import {
//   LinkedIn,
//   Twitter,
//   Instagram,
//   Facebook,
//   WhatsApp,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";

// // Styled Components
// const ContactPageContainer = styled(Container)({
//   marginTop: "50px",
//   textAlign: "center",
//   padding: "50px 20px",
// });

// const HeroBanner = styled(Box)({
//   height: "30vh",
//   background: "linear-gradient(135deg, #FF6600, #FFC400)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "12px",
//   color: "#fff",
//   marginBottom: "30px",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
// });

// const SectionTitle = styled(Typography)({
//   fontWeight: "bold",
//   marginBottom: "20px",
//   textTransform: "uppercase",
//   fontSize: "2rem", // Reduced size
// });

// const SocialMediaIcons = styled(Box)({
//   display: "flex",
//   justifyContent: "center",
//   gap: "25px", // Reduced gap
//   marginBottom: "30px",
// });

// const IconButtonStyled = styled(IconButton)({
//   "&:hover": {
//     transform: "scale(1.1)", // Slight hover scale
//     transition: "transform 0.3s ease",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
//   },
// });

// const ContactInfo = styled(Box)({
//   backgroundColor: "#f4f4f4",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//   padding: "30px", // Reduced padding
//   marginTop: "30px",
// });

// const FloatingWhatsApp = styled(Box)({
//   position: "fixed",
//   bottom: "30px",
//   right: "30px",
//   backgroundColor: "#25D366",
//   color: "#fff",
//   padding: "12px", // Smaller padding
//   borderRadius: "50%",
//   boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
//   cursor: "pointer",
//   "&:hover": {
//     transform: "scale(1.1)",
//   },
// });

// // Component
// const ContactPage = () => {
//   return (
//     <ContactPageContainer maxWidth="lg">
//       {/* Hero Section */}
//       <HeroBanner>
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           Let's Connect and Drive Innovation Together
//         </Typography>
//       </HeroBanner>

//       {/* Section Title */}
//       <SectionTitle variant="h4">Get in Touch</SectionTitle>

//       {/* Social Media Section */}
//       <SocialMediaIcons>
//         <IconButtonStyled
//           color="primary"
//           component="a"
//           href="https://www.linkedin.com/company/gogo-energy/"
//           target="_blank"
//         >
//           <LinkedIn fontSize="large" />
//         </IconButtonStyled>
//         <IconButtonStyled
//           color="primary"
//           component="a"
//           href="https://x.com/gogoenergyIN"
//           target="_blank"
//         >
//           <Twitter fontSize="large" />
//         </IconButtonStyled>
//         <IconButtonStyled
//           color="primary"
//           component="a"
//           href="https://www.instagram.com/gogoenergy.in/"
//           target="_blank"
//         >
//           <Instagram fontSize="large" />
//         </IconButtonStyled>
//         <IconButtonStyled
//           color="primary"
//           component="a"
//           href="https://www.facebook.com/profile.php?id=61570236652723"
//           target="_blank"
//         >
//           <Facebook fontSize="large" />
//         </IconButtonStyled>
//       </SocialMediaIcons>

//       <Divider sx={{ width: "60%", margin: "30px auto" }} />

//       {/* Contact Information */}
//       <ContactInfo>
//         <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6600" }}>
//           Contact Number: +91 83559 08284
//         </Typography>
//         <Typography variant="body1" sx={{ marginTop: "15px" }}>
//           Feel free to reach out to us for any inquiries, support, or feedback.
//           We're here to assist you!
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{ fontStyle: "italic", marginTop: "10px", color: "gray" }}
//         >
//           "Your electric future starts here."
//         </Typography>
//       </ContactInfo>

//       {/* Floating WhatsApp Button */}
//       <FloatingWhatsApp
//         onClick={() => window.open("https://wa.me/918355908284", "_blank")}
//       >
//         <WhatsApp fontSize="large" />
//       </FloatingWhatsApp>
//     </ContactPageContainer>
//   );
// };

// export default ContactPage;


// pattern 2


// "use client";

// import React from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   IconButton,
//   Divider,
//   Grid,
// } from "@mui/material";
// import {
//   LinkedIn,
//   Twitter,
//   Instagram,
//   Facebook,
//   WhatsApp,
// } from "@mui/icons-material";
// import { styled } from "@mui/system";

// // Styled Components
// const ContactPageContainer = styled(Container)({
//   marginTop: "50px",
//   textAlign: "center",
//   padding: "50px 20px",
// });

// const HeroSection = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   height: "40vh",
//   background: "linear-gradient(135deg, #004E92, #000428)",
//   borderRadius: "12px",
//   color: "#fff",
//   padding: "0 40px",
//   boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
// });

// const HeroText = styled(Box)({
//   maxWidth: "50%",
//   textAlign: "left",
// });

// const HeroImage = styled(Box)({
//   width: "40%",
//   height: "100%",
//   background: "url(/hero-image.svg) no-repeat center",
//   backgroundSize: "cover",
// });

// const WaveDivider = styled(Box)({
//   height: "80px",
//   background: "url(/wave.svg) no-repeat center bottom",
//   backgroundSize: "cover",
// });

// const ContactCard = styled(Box)({
//   background: "rgba(255, 255, 255, 0.7)",
//   backdropFilter: "blur(10px)",
//   padding: "30px",
//   borderRadius: "16px",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-10px)",
//   },
// });

// const TimelineItem = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
//   marginBottom: "20px",
// });

// const FloatingWhatsApp = styled(Box)({
//   position: "fixed",
//   bottom: "30px",
//   right: "30px",
//   background: "rgba(255, 255, 255, 0.2)",
//   backdropFilter: "blur(10px)",
//   color: "#25D366",
//   padding: "16px",
//   borderRadius: "50%",
//   boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
//   cursor: "pointer",
//   "&:hover": {
//     transform: "scale(1.1)",
//   },
// });

// // Component
// const ContactPage = () => {
//   return (
//     <ContactPageContainer maxWidth="lg">
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroText>
//           <Typography variant="h3" fontWeight="bold">
//             Connect with Us for Innovation
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: "15px" }}>
//             Driving the future of clean energy and sustainable technology.
//           </Typography>
//         </HeroText>
//         <HeroImage />
//       </HeroSection>

//       <WaveDivider />

//       {/* Contact Section */}
//       <Typography variant="h4" sx={{ margin: "50px 0 30px" }}>
//         Get in Touch
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6} lg={4}>
//           <ContactCard>
//             <Typography variant="h6">Contact Number</Typography>
//             <Typography variant="body1" color="primary">
//               +91 83559 08284
//             </Typography>
//           </ContactCard>
//         </Grid>

//         <Grid item xs={12} md={6} lg={4}>
//           <ContactCard>
//             <Typography variant="h6">Email</Typography>
//             <Typography variant="body1" color="primary">
//               support@gogoenergy.in
//             </Typography>
//           </ContactCard>
//         </Grid>
//       </Grid>

//       {/* Timeline Social Section */}
//       <Box sx={{ marginTop: "60px" }}>
//         <Typography variant="h5">Follow Us</Typography>
//         <Box sx={{ margin: "30px 0" }}>
//           {[
//             {
//               icon: <LinkedIn />,
//               link: "https://linkedin.com",
//               color: "#0A66C2",
//             },
//             { icon: <Twitter />, link: "https://x.com", color: "#1DA1F2" },
//             {
//               icon: <Instagram />,
//               link: "https://instagram.com",
//               color: "#E1306C",
//             },
//             {
//               icon: <Facebook />,
//               link: "https://facebook.com",
//               color: "#1877F2",
//             },
//           ].map((item, index) => (
//             <TimelineItem key={index}>
//               <IconButton
//                 href={item.link}
//                 target="_blank"
//                 sx={{ color: item.color }}
//               >
//                 {item.icon}
//               </IconButton>
//               <Typography>Follow us for updates!</Typography>
//             </TimelineItem>
//           ))}
//         </Box>
//       </Box>

//       {/* Floating WhatsApp Button */}
//       <FloatingWhatsApp
//         onClick={() => window.open("https://wa.me/918355908284", "_blank")}
//       >
//         <WhatsApp fontSize="large" />
//       </FloatingWhatsApp>
//     </ContactPageContainer>
//   );
// };

// export default ContactPage;


// pattern 3

"use client";

import React from "react";
import { Container, Box, Typography, IconButton, Grid } from "@mui/material";
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
  backgroundColor: "#fff",
  padding: "40px 20px",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
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
    <ContactPageContainer maxWidth="lg">
      {/* Header Section */}
      <Header>
        <Typography variant="h3" fontWeight="bold">
          Reach Out to Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "10px", color: "gray" }}
        >
          We'd love to hear from you and collaborate.
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
