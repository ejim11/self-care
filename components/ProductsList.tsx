"use client";
import products, { Product } from "@/utils/products";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { useRouter } from "next/navigation";
import { buyProduct } from "@/services/buyProductService";
import { BallTriangle } from "react-loader-spinner";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const totalAmount = products
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0);

  const router = useRouter();

  const routeToPaymentPageHandler = (url: string) => {
    router.push(url);
  };

  const buyProductHandler = async () => {
    setIsLoading(true);
    try {
      await buyProduct(
        "price_1Qmw25RC8367g7X7SV72BXyP",
        routeToPaymentPageHandler
      );

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-[3rem] flex flex-col items-center font-dmsans w-[50%] xlg:w-[80%] xmd:w-full ">
      <div className="flex flex-col sm:w-full">
        {products.map((product: Product) => (
          <ProductItem
            key={product.title}
            slug={product.slug}
            image={product.image}
            title={product.title}
            price={product.price}

            // percentOff={product.percentOff}
          />
        ))}
        <button
          onClick={buyProductHandler}
          type="button"
          className="bg-color-white text-color-black text-[2rem] w-full py-[1rem] text-center rounded-[0.6rem] mt-[2rem] hover:bg-[#e9ecef] transition-all duration-100 ease-in "
        >
          {isLoading ? (
            <div className="w-full flex justify-center">
              <BallTriangle
                height={30}
                width={30}
                radius={5}
                color="#000000"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass="mx-auto"
                visible={true}
              />
            </div>
          ) : (
            <>
              Buy all products{" "}
              <span className="line-through">{totalAmount}</span> $(
              <span>{Math.round(0.74 * totalAmount)}</span>) - 25% off
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
