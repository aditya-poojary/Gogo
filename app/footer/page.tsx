"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white w-full py-12 border-t border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
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
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {["home", "products", "about", "contact-us"].map((section) => (
              <button
                key={section}
                onClick={() =>
                  scrollToSection(
                    section === "contact-us" ? "contact" : section
                  )
                }
                className="text-gray-800 font-bold text-lg hover:text-[#FF4500] transform transition-all duration-300 hover:translate-x-1"
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-us", "")}
              </button>
            ))}
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            {/* Contact Sections */}
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
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center mb-2 group">
                  <div className="relative w-8 h-8 mr-2">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      fill
                      className="object-contain transform transition-transform duration-300 group-hover:scale-110"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-gray-800 font-bold text-lg">
                    {item.label}
                  </span>
                </div>
                <a
                  href={item.link}
                  className="text-[#FF4500] hover:text-[#FF6B00] transition-colors duration-300 text-lg hover:underline"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} GOGO ENERGY
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
