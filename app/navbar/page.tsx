"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer } from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";
import Image from "next/image"; // Import Image from Next.js for optimization

const pages = [
  { name: "Home", icon: <HomeIcon />, id: "home" },
  { name: "Product", icon: <DescriptionIcon />, id: "products" },
  { name: "About Us", icon: <InfoIcon />, id: "about" },
  { name: "Contact", icon: <PhoneIcon />, id: "contact-us" },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ color: "#4a4a4a", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={100} // Set width for image
              height={80} // Set height for image
              style={{ height: "80px", objectFit: "contain" }}
            />
          </Typography>

          {isMobile ? (
            <Button onClick={handleDrawerToggle} sx={{ color: "#4a4a4a" }}>
              Menu
            </Button>
          ) : (
            <Box sx={{ display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ margin: "0 10px", color: "#4a4a4a" }}
                  onClick={() => scrollToSection(page.id)}
                >
                  {/* {page.icon} */}
                  <span style={{ marginLeft: "8px" }}>{page.name}</span>
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, padding: "30px 20px" }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => {
                scrollToSection(page.id);
                handleDrawerToggle();
              }}
              sx={{ margin: "10px 0", color: "#4a4a4a" }}
            >
              {page.icon}
              <span style={{ marginLeft: "8px" }}>{page.name}</span>
            </Button>
          ))}
        </Box>
      </Drawer>
    </div>
  );
}

export default ResponsiveAppBar;
