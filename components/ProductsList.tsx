"use client";
import products, { Product } from "@/utils/products";
import React from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";
import formatAmount from "@/utils/formatAmount";

const ProductsList = () => {
  const totalAmount = products
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="mt-[10rem]  flex flex-col  font-dmsans w-full ">
      <h2 className="font-dmsans text-[3rem] font-semibold mb-[3rem] text-center">
        Power Bundles
      </h2>
      <div className="grid grid-cols-2 w-full xmd:grid-cols-1 pb-[5rem] gap-[5rem]">
        {products.map((product: Product, i: number) => (
          <ProductItem
            index={i}
            key={product.title}
            slug={product.slug}
            image={product.image}
            title={product.title}
            price={product.price}

            // percentOff={product.percentOff}
          />
        ))}
      </div>
      <Link
        href={"https://paystack.com/buy/all-products-ryxeqx"}
        target="blank"
        className="bg-color-white text-color-black text-[2rem] px-[3rem] py-[1rem] w-max xmd:w-full  text-center rounded-[0.6rem] mt-[2rem] hover:bg-[#e9ecef] transition-all duration-100 ease-in "
      >
        Buy all
        <span className="line-through">
          N{formatAmount(String(totalAmount))}
        </span>
        (<span>N{formatAmount(String(Math.round(0.75 * totalAmount)))}</span>) -
        25% off
      </Link>
    </div>
  );
};

export default ProductsList;
