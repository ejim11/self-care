"use client";
import products, { Product } from "@/utils/products";
import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
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
            percentOff={product.percentOff}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
