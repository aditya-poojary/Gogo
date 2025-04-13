"use client";

import React from "react";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";

const ProductDescription = () => {
  const createData = (specs: string, details: string) => {
    // Split details to separate parenthetical content for mobile styling
    let mainText = details;
    let parentheticalText = "";

    const match = details.match(/(.*?)(\(.*?\))(.*)/);
    if (match) {
      mainText = match[1] + match[3];
      parentheticalText = match[2];
    }

    return {
      specs,
      details,
      mainText,
      parentheticalText,
    };
  };

  const rows = [
    createData("LoadCapacity", "100-120 kg (Including rider)"),
    createData("Max Speed", "25 km/h (*Subject to change)"),
    createData("Range", "35-40 km/Swap"),
  ];

  const MotionTitle = motion(Typography);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      transition={{ duration: 0.8 }}
      className=" pt-[87px] bg-white"
      id="products"
    >
      {/* Heading: Product Description */}
      <MotionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        variant="h4"
        className="text-center mt-2 font-bold  text-black  "
      >
        Our <span className=" text-orange-500">Products</span>
      </MotionTitle>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className="flex flex-col    md:flex-row items-center justify-between gap-8 "
      >
        {/* Right side: Product Image */}
        <div className="relative w-full scale-75 md:w-1/2 h-[500px]">
          <Image src="/image.png" alt="Image" fill className="object-cover" />
        </div>

        {/* Left side: Product Technical Specifications */}
        <div className="w-full md:w-1/2 p-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="border-b-2 border-black">
                  <b className="text-[23px]">Specs</b>
                </TableCell>
                <TableCell className="border-b-2 border-black">
                  <b className="text-[23px]">Details</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow className="border-0" key={idx}>
                  <TableCell className="font-bold text-md md:text-lg border-0">
                    {row.specs}
                  </TableCell>
                  <TableCell className="border-0 text-[16px] md:text-lg px-1">
                    {/* Display content inline with smaller parentheses on mobile */}
                    <span className="">
                      {row.mainText}
                      {row.parentheticalText && (
                        <span className="text-[11px] md:text-lg">
                          {row.parentheticalText}
                        </span>
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDescription;
