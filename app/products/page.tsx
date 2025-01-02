//

import React from "react";
import { Card, Typography, Divider } from "@mui/material";

const ProductDescription = () => {
  return (
    <div className="my-12 px-6">
      {/* Heading: Product Description */}
      <Typography
        variant="h4"
        className="text-center font-bold text-gray-800 mb-8 pb-8"
      >
        Product Description
      </Typography>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Right side: Product Image */}
        <div className="w-full md:w-1/2 p-4">
          <Card className="shadow-xl rounded-lg overflow-hidden bg-gray-50 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-96">
              <img
                src="/image.png"
                alt="Product"
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            
           
          </Card>
        </div>

        {/* Left side: Product Technical Specifications */}
        <div className="w-full md:w-1/2 p-4">
          <Card
            className="shadow-xl p-6 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-200 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{ minHeight: "24rem" }}
          >
            <Typography
              variant="h5"
              className="text-gray-800 font-semibold mb-6 pb-6 text-lg"
            >
              Product Technical Specifications
            </Typography>
            <Divider className="mb-6" />

            <div className="space-y-6">
              {" "}
              {/* Increased space between items */}
              <Typography
                variant="body1"
                className="text-gray-700 text-lg leading-relaxed"
              >
                <strong>Load Capacity:</strong> 100-120 kg*
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600 text-lg leading-relaxed"
              >
                Ideal for delivery personnel, with a weight consideration of
                75-85Kg.(*Including rider)
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-700 text-lg leading-relaxed"
              >
                <strong>Max Speed:</strong> 25kmph*
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600 text-lg leading-relaxed"
              >
                Designed for electric vehicles with no need for an official
                driving license.(*Subject to change)
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-700 text-lg leading-relaxed"
              >
                <strong>Range:</strong> 35-40km/Swap
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600 text-lg leading-relaxed"
              >
                Competitive range based on market standards, perfect for
                everyday use.
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
