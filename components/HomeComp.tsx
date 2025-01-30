"use client";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { FaInstagram, FaRegCircleCheck, FaTiktok } from "react-icons/fa6";
import ProductsList from "./ProductsList";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { LuBadgeAlert } from "react-icons/lu";

const HomeComp = () => {
  const iconClassname = "w-[2.5rem] h-[2.5rem] text-current";

  const iconLinks: { icon: ReactNode; link: string }[] = [
    {
      icon: <FaTiktok className={iconClassname} />,
      link: "",
    },
    {
      icon: <FaInstagram className={iconClassname} />,
      link: "",
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
    <main className="bg-home min-h-screen py-[5rem] px-[2rem]">
      <section className="w-full flex flex-col items-center text-color-white">
        <div className="w-[15rem] h-[15rem] rounded-full border flex items-center justify-center border-color-white ">
          <p className="text-[5rem] font-bold font-dmsans">SC</p>
        </div>
        <p className="my-[2rem] text-[3rem] font-bold ">Self Care</p>
        <div className="flex items-center">
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
        <ProductsList />
      </section>
    </main>
  );
};

export default HomeComp;
