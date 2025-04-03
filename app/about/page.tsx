"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
// import "../styles/animations.css";

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

const AboutUsPage = () => {
  return (
    <div className="pt-[88px] bg-white px-4 sm:px-6 lg:px-8" id="about">
      {/* About Us Section */}
      <h2 className="font-bold text-3xl sm:text-4xl text-center text-gray-800 mb-8 font-['Poppins'] animate-slide-up">
        About <span className="text-[#ff601a]">Us</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center animate-slide-left">
        <div className="flex justify-center transform transition-all duration-500 hover:scale-105">
          <Image
            src="/image3.png"
            alt="Our Team"
            width={700}
            height={450}
            className="rounded-xl w-full h-auto shadow-lg"
            priority
          />
        </div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed md:text-justify text-center">
          At GOGO, we are committed to sustainability through innovative
          electric vehicles (EVs) that reduce carbon emissions, conserve
          resources, and align with India's carbon-free vision. Our team
          combines expertise from prestigious projects like Formula Bharat,
          Hyperloop Transportation, and Satellite development, driving forward
          advanced, sustainable solutions for a cleaner, greener future.
        </p>
      </div>

      {/* Mission Section */}
      <h2 className="font-bold text-3xl sm:text-4xl text-center text-gray-800 mb-8 font-['Poppins'] animate-slide-up">
        Our <span className="text-[#ff601a]">Mission</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MissionData.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${
              index + 1
            }`}
          >
            <div className="relative w-[150px] h-[150px] mx-auto mb-5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <div className="mt-16">
        <h2 className="font-bold text-3xl sm:text-4xl text-center text-gray-800 mb-8 font-['Poppins'] animate-slide-up">
          Our <span className="text-[#ff601a]">Vision</span>
        </h2>

        <div className="flex justify-center">
          <div className="p-6 w-full md:w-2/3 lg:w-1/2 rounded-lg bg-gradient-to-br from-white to-orange-100 shadow-md transform transition-all duration-500 hover:shadow-lg animate-slide-left">
            <p className="text-center text-gray-800 text-lg leading-relaxed">
              "Our goal is to offer gig workers hassle-free access to a reliable
              swapping network, empowering their growth. We are building a
              robust network with BaaS/EaaS and delivery partners to drive sales
              and expansion."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
