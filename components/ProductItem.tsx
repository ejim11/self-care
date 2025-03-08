"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({
  image,
  title,
  slug,
  price,
  index,
}: // percentOff,
{
  index: number;
  image: StaticImageData;
  title: string;
  price: number;
  slug: string;
  // percentOff?: number;
}) => {
  // const newPrice = price - (percentOff / 100) * price;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeIn" }}
      className="flex rounded-[1rem] overflow-hidden mb-[2.5rem] bg-[rgb(31,33,37)] w-full sm:w-full sm:h-[25rem]"
    >
      <div className="w-[25rem] h-[30rem] sm:w-[16rem] sm:h-full">
        <Image
          src={image}
          alt={`${title} image`}
          priority
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>
      <div className="p-[1.5rem] flex flex-col flex-1">
        <p className="capitalize font-semibold text-[1.8rem]">{title}</p>
        {/* <p className="mt-auto font-medium">${newPrice}</p> */}
        <div className="flex text-[rgba(254,254,254,0.75)] mt-auto">
          <p className="mr-[1rem] text-[3rem] text-color-white font-semibold">
            ${price}
          </p>
          {/* <p>{`(${percentOff}% off)`}</p> */}
        </div>
        <Link
          href={`/${slug}`}
          className="bg-color-white w-full rounded-[0.6rem] text-center text-[rgb(16,16,16)] mt-[1rem] py-[0.5rem] font-medium"
        >
          Buy now
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductItem;
