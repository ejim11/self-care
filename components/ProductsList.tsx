"use client";
import products, { Product } from "@/data/products";
import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";
import formatAmount from "@/utils/formatAmount";
import { appContext } from "@/store/appContext";

const ProductsList = () => {

  const {country} = useContext(appContext)

  const totalAmount = products
    .map((product) => {
      if (country.toLowerCase() === "nigeria") {
        return product.price;
      } else {
        return product.usdPrice;
      }
    })
    .reduce((acc, cur) => acc + cur, 0);

  const discount = country.toLowerCase() === "nigeria" ? 0.6 : 0.5;

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
            usdPrice = {product.usdPrice}
          />
        ))}
      </div>
      <Link
        href={"https://paystack.com/buy/all-products-ryxeqx"}
        target="blank"
        className="bg-color-white text-color-black text-[2rem] px-[3rem] py-[1rem] w-max xmd:w-full  text-center rounded-[0.6rem] mt-[2rem] hover:bg-[#e9ecef] transition-all duration-100 ease-in "
      >
        Buy all{" "}
        <span className="line-through">
          {country.toLowerCase() === "nigeria" ? "N" : "$"}
          {formatAmount(String(totalAmount))}
        </span>
        (
        <span>
          {country.toLowerCase() === "nigeria" ? "N" : "$"}
          {formatAmount(String(Math.round(discount * totalAmount)))}
        </span>
        ) - {(1 - discount) * 100}% off
      </Link>
    </div>
  );
};

export default ProductsList;
