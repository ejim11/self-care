"use client";
import products, { Product } from "@/utils/products";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { useRouter } from "next/navigation";
import { buyProduct } from "@/services/buyProductService";
import { BallTriangle } from "react-loader-spinner";
import Link from "next/link";

const ProductsList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const totalAmount = products
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0);

  const router = useRouter();

  const routeToPaymentPageHandler = (url: string) => {
    router.push(url);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        href={"https://sandbox.flutterwave.com/pay/k75lhcghkz23"}
        // onClick={buyProductHandler}
        target="blank"
        // type="button"
        className="bg-color-white text-color-black text-[2rem] px-[3rem] py-[1rem] w-max xmd:w-full  text-center rounded-[0.6rem] mt-[2rem] hover:bg-[#e9ecef] transition-all duration-100 ease-in "
      >
        {isLoading ? (
          <div className="w-full  flex justify-center">
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
            Buy all <span className="line-through">${totalAmount}</span> (
            <span>${Math.round(0.74 * totalAmount)}</span>) - 25% off
          </>
        )}
      </Link>
    </div>
  );
};

export default ProductsList;
