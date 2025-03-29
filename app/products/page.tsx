import React from "react";
import { Card, Typography, Divider, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const ProductDescription = () => {
  const createData=(specs:String,details:String)=>{
return {specs,details}
  }
  const rows=[
    createData('LoadCapacity','100-120 kg (including rider)'),
    createData('Max Speed','25 km/h (*Subject to change)'),
    createData('Range','35-40 km/Swap'),
  ]
  return (
    <div className="my-12 bg-white py-8 px-6" id="products" >
      {/* Heading: Product Description */}
      <Typography
        variant="h4"
        className="text-center mt-2 font-bold text-black  "
      >
        Our <span className=" text-orange-500">Products</span> 
      </Typography>

      <div className="flex flex-col    md:flex-row items-center justify-between gap-8">
        {/* Right side: Product Image */}
        <div className="w-full scale-75 md:w-1/2">
        <img src="/image.png" alt="" className=" h-full w-full object-cover" />
        </div>

        {/* Left side: Product Technical Specifications */}
        <div className="w-full md:w-1/2 p-4">
         <Table>
          <TableHead>
            <TableRow>
              <TableCell className="border-b-2 border-black"><b className="text-[23px]">Specs</b></TableCell>
              <TableCell className="border-b-2 border-black"><b className="text-[23px]">Details</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {
            rows.map((row,idx)=>(
              <TableRow className="border-0" key={idx}>
                <TableCell className="font-bold text-lg border-0">
                  {row.specs}
                </TableCell>
                 <TableCell className="border-0 text-lg" >
                  {row.details}
                </TableCell>
              </TableRow>
            ))
           }
          </TableBody>
         </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
