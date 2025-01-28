"use client";
import products, { Product } from "@/utils/products";
import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const totalAmount = products
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <div className="mt-[3rem] flex flex-col items-center font-dmsans w-full ">
      <h1 className="mb-[2rem] text-[2rem] font-semibold">See our products</h1>
      <div className="flex flex-col sm:w-full">
        {products.map((product: Product) => (
          <ProductItem
            key={product.title}
            image={product.image}
            title={product.title}
            price={product.price}
            // percentOff={product.percentOff}
          />
        ))}
        <button
          type="button"
          className="bg-color-white text-color-black text-[2rem] w-full py-[1rem] text-center rounded-[0.6rem] mt-[2rem] hover:bg-[#e9ecef] transition-all duration-100 ease-in"
        >
          Buy all products <span className="line-through">{totalAmount}</span>{" "}
          $(
          <span>{0.25 * totalAmount}</span>) - 75% off
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
