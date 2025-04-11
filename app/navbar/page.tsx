"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Phone as PhoneIcon,
  Description as DescriptionIcon,
  Menu,
  Close as CloseIcon,
} from "@mui/icons-material";

// Define navigation pages with name, icon, and target section ID.
const pages = [
  { name: "Home", icon: <HomeIcon />, id: "home" },
  { name: "Product", icon: <DescriptionIcon />, id: "products" },
  { name: "About Us", icon: <InfoIcon />, id: "about" },
  { name: "Contact", icon: <PhoneIcon />, id: "contact-us" },
];

// Function to scroll smoothly to a page section.
function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className="relative">
      {/* Main Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="flex justify-between items-center px-6 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={80}
              height={70}
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          {isMobile ? (
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          ) : (
            /* Desktop Navigation */
            <div className="hidden md:flex items-center space-x-4">
              {pages.map((page) => (
                <button
                  key={page.name}
                  onClick={() => scrollToSection(page.id)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-base font-medium text-[20px]"
                >
                  {page.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-orange-300">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={80}
            height={60}
            className="h-14 w-auto object-contain"
          />
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-black hover:text-gray-300 transition-colors"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col p-6 space-y-4">
          {pages.map((page) => (
            <button
              key={page.name}
              onClick={() => {
                scrollToSection(page.id);
                setDrawerOpen(false);
              }}
              className="flex items-center px-4 py-3 text-orange-600 hover:bg-white/10 rounded-lg transition-colors text-left"
            >
              {page.icon}
              <span className="ml-3">{page.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
}

export default ResponsiveAppBar;
