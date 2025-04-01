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
import { motion } from "motion/react";
import { styled } from "@mui/system";
import Image from "next/image";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { animate } from "motion";
import { div } from "motion/react-client";
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

const MissionData = [
  {
    id: 1,
    image: "/Gas.png",
    title: "Reducing The Slope",
    description:
      "Help India reduce carbon emissions by 5Mt every year by adopting EVs.",
  },
  {
    id: 2,
    image: "/Recycle.png",
    title: "Environmental Impact",
    description:
      "Purchasing one e2W helps plants reduce ~500kg of CO2 emission every year. This is equivalent to planting 20 mature trees.",
  },
  {
    id: 3,
    image: "/Social.png",
    title: "Social Impact",
    description:
      "Every EV partnership helps us create more jobs for GiG workers and helps India elevate its GDP/Capital.",
  },
];

const SectionTitle = motion(
  styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "2rem",
    textAlign: "center",
    color: "#333",
    marginBottom: theme.spacing(4),
    "& .highlight": {
      color: "#ff601a",
    },
  }))
);

const MissionCard = motion(
  styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    },
  }))
);

const AboutUsPage = () => {
  return (
    <div className="pt-[88px] bg-white px-6" id="about">
      {/* <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          padding: { xs: 2, md: 4 },
        }}
        id="about"
      > */}
        {/* About Us Section */}
        <SectionTitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="highlight">Us</span>
        </SectionTitle>
        <MotionGrid
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: 6 }}
        >
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Image
              src="/image3.png"
              alt="Our Team"
              width={700}
              height={450}
              style={{ borderRadius: "12px", maxWidth: "100%", height: "auto" }}
              priority
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              className="md:text-justify text-center"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              At GOGO, we are committed to sustainability through innovative
              electric vehicles (EVs) that reduce carbon emissions, conserve
              resources, and align with India's carbon-free vision. Our team
              combines expertise from prestigious projects like Formula Bharat,
              Hyperloop Transportation, and Satellite development, driving
              forward advanced, sustainable solutions for a cleaner, greener
              future.
            </Typography>
          </Grid>
        </MotionGrid>

        {/* Mission Section */}
        <SectionTitle
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="highlight">Mission</span>
        </SectionTitle>
        <Grid container spacing={4}>
          {MissionData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
              >
                <MissionCard>
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
                      margin: "0 auto 20px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", marginTop: 1, lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                </MissionCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Vision Section */}
        <Box sx={{ marginTop: 8 }}>
          <SectionTitle
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="highlight">Vision</span>
          </SectionTitle>
          <Box
            sx={{
              widow: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-5 w-full md:w-1/2 min-h-44 rounded-md leading-relaxed text-center flex items-center bg-gradient-to-br from-white text-black to-orange-100 "
            >
              " Our goal is to offer gig workers hassle-free access to a
              reliable swapping network, empowering their growth. We are
              building a robust network with BaaS/EaaS and delivery partners to
              drive sales and expansion. "
            </motion.div>
          </Box>
        </Box>

        {/* Target Audience Section */}
        {/* <Box sx={{ marginTop: 8 }}>
        <SectionTitle>Target Audience</SectionTitle>
        <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
        <MissionCard>
        <Box display="flex" justifyContent="center" mb={2}>
        <PeopleAltIcon sx={{ fontSize: 60, color: "primary.main" }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Individuals & Businesses Seeking Sustainable Solutions
        </Typography>
        <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
        Our audience ranges from eco-conscious individuals to
        large-scale organizations looking to reduce their carbon
        footprint by adopting electric vehicles and energy-efficient
        technologies.
        </Typography>
        </MissionCard>
        </Grid>
        </Grid>
        </Box> */}
      {/* </Box> */}
    </div>
  );
};

export default AboutUsPage;
