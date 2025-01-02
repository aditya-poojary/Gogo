"use client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
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

// Pages
import About from "@/app/about/page";
import Home from "@/app/home/page";
import Contact from "@/app/contact/page";
import ProductDescription from "@/app/products/page";

const pages = [
  { name: "Home", icon: <HomeIcon />, path: "/home" },
  { name: "Product Description", icon: <DescriptionIcon />, path: "/products" },
  { name: "About Us", icon: <InfoIcon />, path: "/about" },
  { name: "Contact Us", icon: <PhoneIcon />, path: "/contact-us" },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
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
              component="div"
              sx={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <img
                src="/logo.png"
                alt="Company Logo"
                style={{
                  height: "80px",
                  marginLeft: "10px",
                  objectFit: "contain",
                }}
              />
            </Typography>

            {isMobile ? (
              <Button
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { color: "#FF4500" },
                  fontFamily: "'Poppins', sans-serif", // Use Poppins here
                }}
                onClick={handleDrawerToggle}
              >
                Menu
              </Button>
            ) : (
              <Box sx={{ display: "flex" }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    sx={{
                      color: "black",
                      margin: "0 10px",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": { color: "#FF4500" },
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    component={NavLink}
                    to={page.path}
                    style={({ isActive }) => ({
                      color: isActive ? "#FF4500" : "black",
                    })}
                  >
                    {page.icon}
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
                sx={{
                  color: "black",
                  margin: "10px 0",
                  fontWeight: "500",
                  textTransform: "none",
                  "&:hover": { color: "#FF4500" },
                  fontFamily: "'Poppins', sans-serif", // Use Poppins here
                }}
                component={NavLink}
                to={page.path}
                onClick={handleDrawerToggle}
              >
                {page.icon}
                <span style={{ marginLeft: "8px" }}>{page.name}</span>
              </Button>
            ))}
          </Box>
        </Drawer>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/products" element={<ProductDescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default ResponsiveAppBar;
