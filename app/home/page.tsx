"use client";
import React from "react";
import About from "../about/page";
import Contact from "../contact/page";
import ProductDescription from "../products/page";

const HomePage = () => {
  return (
    <div id="home" className="overflow-x-hidden">
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/hero2.jpeg")',
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/40 to-black/20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto py-12 sm:py-16">
        <div className="block sm:hidden">
  <h2 className="font-bold text-4xl bg-gradient-to-b from-[#640B02] to-[#FF8C4E] bg-clip-text text-transparent p-1 leading-tight tracking-wide mb-2 animate-fade-in-down">
    Revolutionizing
  </h2>
  <h2 className="font-bold text-4xl bg-gradient-to-b from-[#640B02] to-[#FF8C4E] bg-clip-text text-transparent p-1 leading-tight tracking-wide mb-4 animate-fade-in-down">
    the way
  </h2>
</div>
<div className="hidden sm:block">
  <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#640B02] to-[#FF8C4E] bg-clip-text text-transparent p-1 leading-tight tracking-wide mb-4 animate-fade-in-down max-w-[90vw] sm:max-w-none">
    Revolutionizing the way
  </h2>
</div>

          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-[#FF8C4E] to-[#640B02] bg-clip-text text-transparent leading-tight tracking-wide mb-6 sm:mb-8 p-1 animate-fade-in-down max-w-[90vw] sm:max-w-none">
            you ride.
          </h2>

          <div className="flex justify-center items-center mt-4 sm:mt-6">
            <h2 className="font-bold font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl text-white tracking-wider animate-fade-in-up">
              Coming Soon ...
            </h2>
          </div>
        </div>
      </section>

      <ProductDescription />
      <About />
      <Contact />

      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }

        @media (max-width: 640px) {
          .animate-fade-in-down,
          .animate-fade-in-up {
            animation-duration: 1s;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
