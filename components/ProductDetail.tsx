"use client";
import products from "@/utils/products";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { buyProduct } from "@/services/buyProductService";
import { BallTriangle } from "react-loader-spinner";
import { SiCheckio } from "react-icons/si";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const ProductDetail = ({ productSlug }: { productSlug: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const product = products.filter((prd) => prd.slug === productSlug)[0];

  const router = useRouter();

  const routeToPaymentPageHandler = (url: string) => {
    router.push(url);
  };

  const buyProductHandler = async () => {
    setIsLoading(true);
    try {
      await buyProduct(product.priceId, routeToPaymentPageHandler);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full h-[7rem] px-[5rem] xlg:px-[3rem] sm:px-[2rem] flex items-center">
        <Link href={"/"}>
          <IoIosArrowRoundBack className="text-color-black w-[3rem] h-[3rem]" />
        </Link>
      </div>
      <div className="w-full flex md:flex-col justify-between px-[8rem] xlg:px-[3rem] sm:px-[2rem] relative mt-[2rem] pb-[5rem]">
        <div className="flex-1  mr-[5rem] xmd:mr-[2.5rem] md:mr-0 md:order-2 flex flex-col">
          <div className="w-[50rem] md:w-full  h-[40rem]  rounded-[0.6rem] overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.title} image`}
              width={500}
              height={500}
              className="w-full h-full "
            />
          </div>
          <p className="mt-[3rem] mb-[1.5rem] font-bold text-[1.8rem]">
            What you will get:
          </p>
          <ul>
            {product.details.map((detail: string) => (
              <li key={detail} className="flex items-center mb-[1.5rem]">
                <SiCheckio className="w-[2.4rem] h-[2.4rem] mr-[1rem]" />
                <p>{detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-[3rem] mb-[1.5rem] font-bold text-[1.8rem]">
            About me:
          </p>
          <p>
            I have a large presence on both, with almost 100k followers across
            all platforms. I have received over 50 million views and millions of
            likes on my videos. My dedication and hard work have allowed me to
            create a loyal following by sharing high-quality content. This has
            allowed me to become a part of the Tiktok Creator Rewards Program,
            where I generate a large income monthly. (If you read this far, use
            code: reader for 10% off!) These achievements showcase the hard work
            and consistency that I have put into my craft.
          </p>
          <p className="mt-[2rem]">
            All rights owned by{" "}
            <Link
              className="text-[#74c0fc] font-semibold"
              href={
                "https://www.instagram.com/dextterr__?igsh=MWUxYW8wcng5cWkyZg=="
              }
              target="blank"
            >
              @Dextterr_
            </Link>
          </p>
          <p>Do not share content once downloaded</p>
          <p className="mt-[2rem]">Thank you</p>
        </div>
        <div className="w-[50rem] md:w-full md:order-1 md:mb-[3rem] md:relative md:top-0  sticky top-[4rem] border rounded-[0.6rem] border-[#c3bebe] h-max p-[1.5rem]">
          <p className="text-[3rem] font-bold">{product.title}</p>
          <p className="text-[2.5rem] font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={buyProductHandler}
            type="button"
            className="w-full bg-color-black text-color-white py-[1rem] font-semibold text-[1.8rem] rounded-[0.6rem] mt-[2rem]"
          >
            {isLoading ? (
              <div className="w-full flex justify-center">
                <BallTriangle
                  height={30}
                  width={30}
                  radius={5}
                  color="#ffffff"
                  ariaLabel="ball-triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass="mx-auto"
                  visible={true}
                />
              </div>
            ) : (
              "Buy now"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
