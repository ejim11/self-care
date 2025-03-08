"use client";
import Link from "next/link";
import React, { lazy, ReactNode, useEffect } from "react";
import { FaInstagram, FaRegCircleCheck, FaTiktok } from "react-icons/fa6";
import ProductsList from "./ProductsList";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { LuBadgeAlert } from "react-icons/lu";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import WhoIsTheBundleFor from "./WhoIsTheBundleFor";
import IndustriesCovered from "./IndustriesCovered";
import { FaRegCopyright } from "react-icons/fa6";
import { motion } from "framer-motion";

const PromptVideo = lazy(() => import("./PromptVideo"));

const HomeComp = () => {
  const iconClassname = "w-[2.5rem] h-[2.5rem] text-current";

  const iconLinks: { icon: ReactNode; link: string }[] = [
    {
      icon: <FaInstagram className={iconClassname} />,
      link: "https://www.instagram.com/dextterr__?igsh=MWUxYW8wcng5cWkyZg==",
    },
    {
      icon: <FaFacebookSquare className={iconClassname} />,
      link: "https://www.facebook.com/share/1F9XkLsALe/?mibextid=wwXIfr",
    },
    {
      icon: <FaTiktok className={iconClassname} />,
      link: "https://www.tiktok.com/@dextterr._?_t=ZT-8uF06F2II70&_r=1",
    },
    {
      icon: <FaTwitter className={iconClassname} />,
      link: "https://x.com/dextterr__?s=21",
    },
    {
      icon: <FaYoutube className={iconClassname} />,
      link: "https://youtube.com/@dextterrr?si=_S0Ceju5Fg4E_8ym",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      toastSuccess(
        "Successful, check mail for item!",
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-black" />
      );

      // mailUser(
      //   "favourejim56@gmail.com",
      //   "Thank you for buying a product! ",
      //   product.title,
      //   product.price
      // );
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
      toastError(
        "Failed, try again!",
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-[red]" />
      );
    }
  }, []);

  return (
    <main className="bg-home min-h-screen  relative">
      <div className="h-[7rem] border-b border-b-gray-600 flex items-center fixed top-0 left-0 right-0 bg-black z-[50] ">
        <p className="text-[3rem] font-dmsans text-white font-semibold pl-[10rem] xl:pl-[7rem]  xlg:pl-[5rem] lg:pl-[3rem] sm:pl-[2rem] ">
          DextterrsAILab
        </p>
      </div>
      <section className="w-full flex flex-col items-center text-color-white pb-[5rem] px-[10rem]  sm:px-[2rem] lg:px-[3rem] xlg:px-[5rem] xl:px-[7rem]    pt-[17rem] smd:pt-[12rem] ">
        <div className="w-full flex justify-between items-center xmd:flex-col">
          <div className="w-[48%] xmd:w-full">
            {/* <div className="w-[15rem] h-[15rem] rounded-full border flex items-center justify-center border-color-white ">
              <p className="text-[5rem] font-bold font-dmsans">DX</p>
            </div> */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="my-[2rem] text-[3rem] font-bold "
            >
              AI Power Bundle – The Ultimate AI Prompting & Productivity Toolkit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
              className=" text-[2rem]  sm:text-[1.8rem] "
            >
              Master AI for Business, Content Creation & Automation – All in One
              Exclusive Bundle!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
              className="mb-[4rem] mt-[1rem] text-[2rem] sm:text-[1.8rem]"
            >
              Transform your business with our curated AI prompt library. We
              help startups scale efficiently with ready-to-use AI directives
              that streamline operations and deliver professional results—no
              technical expertise needed.
            </motion.p>
          </div>
          <div className="w-[48%] xmd:w-full xmd:mt-[2rem]">
            <PromptVideo />
          </div>
        </div>

        <WhoIsTheBundleFor />
        <ProductsList />
        <IndustriesCovered />
        <div className="flex items-center justify-center">
          {iconLinks.map((link, i) => (
            <Link
              key={i}
              target="blank"
              href={link.link}
              className="mr-[1.5rem] last:mr-0"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center mt-[3rem]">
          <FaRegCopyright />
          <p>2025 DextterrsAILab. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
};

export default HomeComp;
