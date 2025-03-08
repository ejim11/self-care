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
import { motion } from "framer-motion";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const ProductDetail = ({ productSlug }: { productSlug: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const product = products.filter((prd) => prd.slug === productSlug)[0];

  const router = useRouter();

  const routeToPaymentPageHandler = (url: string) => {
    router.push(url);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <section className="w-full bg-home text-white min-h-screen">
      <div className="w-full h-[7rem] px-[10rem] lg:px-[3rem] xlg:px-[5rem]  sm:px-[2rem] flex items-center">
        <Link
          href={"/"}
          className="w-[4rem] h-[4rem] flex items-center justify-center rounded-[0.6rem] border border-gray-400"
        >
          <IoIosArrowRoundBack className="text-color-white w-[3rem] h-[3rem]" />
        </Link>
      </div>
      <div className="w-full flex xmd:flex-col justify-between px-[10rem] lg:px-[3rem] xlg:px-[5rem]  sm:px-[2rem] relative mt-[2rem] pb-[5rem]">
        <div className="flex-1  mr-[5rem]  xmd:mr-0 xmd:order-2 flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="w-[55rem] md:w-full  h-[50rem]  rounded-[0.6rem] overflow-hidden"
          >
            <Image
              src={product.image}
              alt={`${product.title} image`}
              width={500}
              height={500}
              className="w-full h-full "
            />
          </motion.div>
          <p className="mt-[3rem] mb-[1.5rem] font-bold text-[1.8rem]">
            What you will get:
          </p>
          <ul>
            {product.details.map((detail: string, index: number) => (
              <motion.li
                initial={{ opacity: 0, x: -30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  ease: "easeIn",
                }}
                key={detail}
                className="flex items-center mb-[1.5rem]"
              >
                <SiCheckio className="w-[2.4rem] h-[2.4rem] mr-[1rem]" />
                <p>{detail}</p>
              </motion.li>
            ))}
          </ul>
          <p className="mt-[3rem] mb-[1.5rem] font-bold text-[1.8rem]">
            About me:
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            I have a large presence on both, with almost 100k followers across
            all platforms. I have received over 50 million views and millions of
            likes on my videos. My dedication and hard work have allowed me to
            create a loyal following by sharing high-quality content. This has
            allowed me to become a part of the Tiktok Creator Rewards Program,
            where I generate a large income monthly. (If you read this far, use
            code: reader for 10% off!) These achievements showcase the hard work
            and consistency that I have put into my craft.
          </motion.p>
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
        <div className="w-[50rem] xmd:w-full xmd:order-1 xmd:mb-[3rem] xmd:relative xmd:top-0  sticky top-[4rem] border rounded-[0.6rem] border-[#c3bebe] h-max p-[1.5rem]">
          <p className="text-[3rem] font-bold">{product.title}</p>
          <p className="text-[2.5rem] font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <Link
            // onClick={buyProductHandler}
            target="blank"
            href={product.paymentLink}
            className="w-full flex justify-center bg-gray-400 text-color-black py-[1rem] font-semibold text-[1.8rem] rounded-[0.6rem] mt-[2rem]"
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
              "Buy now"
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
