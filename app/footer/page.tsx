"use client";
import React from "react";
import Image from "next/image";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Facebook,
  WhatsApp,
} from "@mui/icons-material";

function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social media links
  const socialLinks = [
    {
      icon: LinkedIn,
      url: "https://www.linkedin.com/company/gogo-energy",
      color: "#0077B5",
    },
    { icon: Twitter, url: "https://twitter.com/gogoenergy", color: "#1DA1F2" },
    {
      icon: Instagram,
      url: "https://www.instagram.com/gogoenergy",
      color: "#E1306C",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/gogoenergy",
      color: "#4267B2",
    },
    {
      icon: WhatsApp,
      url: "https://wa.me/918355908284",
      color: "#25D366",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 w-full py-16 border-t border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:col-span-4">
            <div className="relative w-[200px] h-[160px] transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.png"
                alt="GOGO Energy Logo"
                fill
                loading="lazy"
                sizes="200px"
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm max-w-xs text-center md:text-left mt-4">
              Revolutionizing the way you ride with sustainable energy
              solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <social.icon className="h-5 w-5 text-gray-600 group-hover:text-orange-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:col-span-3">
            <h3 className="font-bold text-xl text-gray-800 mb-2 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-orange-500">
              Quick Links
            </h3>
            {["home", "products", "about", "contact-us"].map((section) => (
              <button
                key={section}
                onClick={() =>
                  scrollToSection(
                    section === "contact-us" ? "contact" : section
                  )
                }
                className="text-gray-600 font-medium text-base hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1 flex items-center"
              >
                <span className="mr-2">→</span>
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-us", "")}
              </button>
            ))}
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col items-center md:items-start space-y-6 md:col-span-5">
            <h3 className="font-bold text-xl text-gray-800 mb-2 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-orange-500">
              Get In Touch
            </h3>

            {/**
             * Contact items array
             * @type {Array<{icon: string, label: string, link: string, text: string}>}
             */}
            {[
              {
                icon: "/Email Image.png",
                label: "Email",
                link: "mailto:gogoxenergy@gmail.com",
                text: "gogoxenergy@gmail.com",
              },
              {
                icon: "/Phone Image.png",
                label: "Phone",
                link: "tel:+918355908284",
                text: "+91 83559 08284",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start group w-full max-w-xs"
              >
                <div className="relative w-10 h-10 mr-4 bg-orange-50 rounded-lg p-2 group-hover:bg-orange-100 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className="object-contain p-1 transform transition-transform duration-300 group-hover:scale-110"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-bold text-base">
                    {item.label}
                  </span>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm hover:underline"
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="flex items-start group w-full max-w-xs">
              <div className="relative w-10 h-10 mr-4 bg-orange-50 rounded-lg p-2 group-hover:bg-orange-100 transition-colors duration-300">
                <Image
                  src="/map-pin.png"
                  alt="Address"
                  fill
                  className="object-contain p-1 transform transition-transform duration-300 group-hover:scale-110"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold text-base">
                  Address
                </span>
                <span className="text-gray-600 text-sm">
                  TCET, Kandivali East, Mumbai - 400101
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright Text */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} GOGO ENERGY. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Designed with ❤️ for a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
