"use client";
import React from "react";
import About from "../about/page";
import Contact from "../contact/page";
import ProductDescription from "../products/page";

const HomePage = () => {
  return (
    <div id="home">
      <section className="relative  min-h-[700px] flex items-center justify-center overflow-hidden border-b-[5px] border-white w-full bg-hero-pic bg-cover bg-center">
   
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("/hero2.jpeg")',
            backgroundSize: '120% 120%'
          }}
        >
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/30 to-black/10 "></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
        
          <br />
          <h2 className="font-bold text-6xl md:text-7xl bg-gradient-to-b from-[#640B02] to-[#FF8C4E] bg-clip-text text-transparent p-1 leading-tight tracking-wide mb-4 animate-fade-in-down">
            Revolutionizing the way
          </h2>
          <h2 className="font-bold text-6xl md:text-7xl bg-gradient-to-b from-[#FF8C4E] to-[#640B02] bg-clip-text text-transparent leading-tight tracking-wide mb-8 p-1 animate-fade-in-down">
            you ride.
          </h2>
          

          <div className="flex justify-center items-center mt-4">
            <h2 className="font-bold font-['Montserrat'] text-4xl md:text-5xl text-white tracking-wider animate-fade-in-up">
              Coming Soon ...
            </h2>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)' }}></div>
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
      `}</style>
    </div>
  );
};

export default HomePage;