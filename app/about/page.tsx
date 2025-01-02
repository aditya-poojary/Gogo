"use client";

import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import GroupsIcon from "@mui/icons-material/Groups";

import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

import NaturePeopleIcon from "@mui/icons-material/NaturePeople";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const AboutUsPageContainer = styled(Container)({
  marginTop: "50px",
  backgroundColor: "#FFFFFF", // Set background to white
});

const SectionTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif", // Set font to Poppins
  fontWeight: "bold",
  fontSize: "36px", // Adjusted to a slightly smaller size for better fit
  marginBottom: "20px", // Reduced margin for better spacing
  textAlign: "center",
  color: "#333333", // Slightly lighter shade of black for a softer appearance
  transition: "color 0.3s ease", // Smooth color transition
  "&:hover": {
    color: "#FFB74D", // Hover effect with a golden color
  },
});

const AboutUsContent = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "50px",
  background: "linear-gradient(to right, #FFEFBA, #FFE7C7)", // Soft gradient for background
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)", // Enhanced shadow for a more 3D effect
  transition: "all 0.3s ease", // Smooth transition for any changes
  "&:hover": {
    transform: "scale(1.02)", // Slight scale on hover
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)", // Darker shadow on hover
  },
  "@media (max-width: 768px)": {
    flexDirection: "column", // Stack items vertically on smaller screens
    alignItems: "center",
  },
});

const AboutUsImage = styled(Box)({
  flex: 1,
  paddingLeft: "20px",
  "@media (max-width: 768px)": {
    paddingLeft: "0", // Remove padding on small screens
    marginBottom: "20px", // Add margin at the bottom for better spacing
  },
  "& img": {
    width: "90%",
    maxHeight: "450px",
    borderRadius: "12px",
    objectFit: "cover", // Ensure image is nicely cropped and doesn't stretch
    transition: "transform 0.3s ease", // Smooth image transformation
    "&:hover": {
      transform: "scale(1.05)", // Slight zoom on hover
    },
  },
});

const MissionCard = styled(Card)({
  textAlign: "center",
  padding: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  borderRadius: "12px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.05)", // Light shadow for the cards
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", // Enhanced shadow and transform on hover
  },
});


const AboutUsPage = () => {
  return (
    <AboutUsPageContainer maxWidth="lg">
      {/* About Us Section */}
      <SectionTitle variant="h3">About Our Company</SectionTitle>
      <AboutUsContent>
        <Box flex={1}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "regular",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555555", // Lighter gray for better readability
            }}
          >
            At GOGO, we’re committed to sustainability. By transitioning to
            electric vehicles (EVs), we’re not only offering a profitable
            solution but also contributing to a cleaner, greener future. Our
            mission is to reduce carbon emissions, protect natural resources,
            and play an active role in India’s carbon-free vision.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "regular",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555555",
              marginTop: "20px", // Spacing between paragraphs
            }}
          >
            Our team brings together individuals from diverse and distinguished
            backgrounds, including experience in Formula Bharat, Hyperloop
            Transportation, and Satellite development. We harness this
            collective expertise to drive innovation and shape a sustainable
            future.
          </Typography>
        </Box>

        <AboutUsImage>
          <img src="/team.png" alt="Our Team" />
        </AboutUsImage>
      </AboutUsContent>

      {/* Mission Section */}
      <SectionTitle variant="h4">Our Mission</SectionTitle>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <MissionCard style={{ paddingBottom: "65px" }}>
            <LocalGasStationIcon sx={{ fontSize: 50, color: "primary.main" }} />
            <CardContent>
              <Typography variant="h5">Reducing The Slop</Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Help India reduce carbon emissions by 5Mt every year by adopting
                EVs.
              </Typography>
            </CardContent>
          </MissionCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <MissionCard>
            <NaturePeopleIcon sx={{ fontSize: 50, color: "primary.main" }} />
            <CardContent>
              <Typography variant="h5">Environmental Impact</Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Purchasing one e2W helps plants reduce ~500kg of CO2 emission
                every year. Which is equivalent to planting 20 mature trees.
              </Typography>
            </CardContent>
          </MissionCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <MissionCard style={{ paddingBottom: "45px" }}>
            <GroupsIcon sx={{ fontSize: 50, color: "primary.main" }} />
            <CardContent>
              <Typography variant="h5">Social Impact</Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Every EV partnership helps us create more jobs for GiG workers
                and helps India elevate its GDP/Capita.
              </Typography>
            </CardContent>
          </MissionCard>
        </Grid>
      </Grid>

      {/* Vision Section */}

      <Box
        sx={{ marginTop: "70px", marginBottom: "50px", textAlign: "center" }}
      >
        <SectionTitle variant="h4">Our Vision</SectionTitle>
        <MissionCard
          sx={{
            backgroundColor: "#F3F4F6",
            display: "inline-block",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              Strategic Partnerships for Growth
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                color: "#333333",
                lineHeight: 1.6,
              }}
            >
              Our goal is to offer gig workers hassle-free access to a reliable
              swapping network, empowering their growth.
              <br />
              We are building a robust network with BaaS/EaaS and delivery
              partners to drive sales and expansion.
            </Typography>
          </CardContent>
        </MissionCard>
      </Box>

      {/* Target Audience Section */}
      <Box sx={{ marginTop: "50px", marginBottom: "70px" }}>
        <SectionTitle variant="h4">Target Audience</SectionTitle>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={10}>
            <MissionCard>
              <PeopleAltIcon sx={{ fontSize: 60, color: "primary.main" }} />
              <CardContent>
                <Typography variant="h5">
                  Individuals & Businesses Seeking Sustainable Solutions
                </Typography>
                <Typography
                  sx={{
                    marginTop: "20px",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  Our audience ranges from eco-conscious individuals to
                  large-scale organizations looking to reduce their carbon
                  footprint by adopting electric vehicles and energy-efficient
                  technologies.
                </Typography>
              </CardContent>
            </MissionCard>
          </Grid>
        </Grid>
      </Box>
    </AboutUsPageContainer>
  );
};

export default AboutUsPage;
