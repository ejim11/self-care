"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({
  image,
  title,
  slug,
  price,
}: // percentOff,
{
  image: StaticImageData;
  title: string;
  price: number;
  slug: string;
  // percentOff?: number;
}) => {
  // const newPrice = price - (percentOff / 100) * price;
  return (
    <div className="flex rounded-[1rem] overflow-hidden mb-[2.5rem] bg-[rgb(31,33,37)] sm:w-full sm:h-[25rem]">
      <div className="w-[25rem] h-[25rem] sm:w-[16rem] sm:h-full">
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
          <p className="mr-[1rem]">${price}</p>
          {/* <p>{`(${percentOff}% off)`}</p> */}
        </div>
        <Link
          href={`/${slug}`}
          className="bg-color-white w-full rounded-[0.6rem] text-center text-[rgb(16,16,16)] mt-[1rem] py-[0.5rem] font-medium"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
