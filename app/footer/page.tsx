"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white w-full py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo Column */}
          <div className="mb-6 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="GOGO Energy Logo" 
              width={200} 
              height={160} 
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-4 mb-6 md:mb-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-black font-bold text-xl hover:text-[#FF4500] transition-colors duration-300">
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-black font-bold text-xl hover:text-[#FF4500] transition-colors duration-300">
              Product
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-black font-bold text-xl hover:text-[#FF4500] transition-colors duration-300">
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact-us')} 
              className="text-black font-bold text-xl hover:text-[#FF4500] transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col items-center md:items-start space-y-8 mr-6">
            {/* Email Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <Image 
                  src="/Email Image.png" 
                  alt="Email" 
                  width={32} 
                  height={32}
                  className="mr-2"
                />
                <span className="text-black font-bold text-xl">Email</span>
              </div>
              <a 
                href="mailto:gogoxenergy@gmail.com" 
                className="text-[#FF4500] hover:underline text-lg"
              >
                gogoxenergy@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <Image 
                  src="/Phone Image.png" 
                  alt="Phone" 
                  width={32} 
                  height={32}
                  className="mr-2"
                />
                <span className="text-black font-bold text-xl">Phone</span>
              </div>
              <a 
                href="tel:+918355908284" 
                className="text-[#FF4500] hover:underline text-lg"
              >
                +91 83559 08284
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-black text-sm">
            © 2024 GOGO ENERGY
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;