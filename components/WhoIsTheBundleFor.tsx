import React, { ReactNode } from "react";
import { IoBusinessSharp } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { SiMagento, SiFreelancer } from "react-icons/si";
import { motion } from "framer-motion";

const WhoIsTheBundleFor = () => {
  const iconClassname: string = "w-[3rem] h-[3rem] mb-[4rem]";

  const data: { title: string; text: string; icon?: ReactNode }[] = [
    {
      title: "Entrepreneurs & Business Owners",
      text: "Use AI to automate tasks, streamline operations and increase profits",
      icon: <IoBusinessSharp className={iconClassname} />,
    },
    {
      title: "Marketers & Social Media Experts",
      text: "Create AI-driven contents, ads and sales funnels to boost conversions.",
      icon: <TbSocial className={iconClassname} />,
    },
    {
      title: "Writers & Content Creators",
      text: "Leverage AI for copywriting, blogging and creative storytelling",
      icon: <GiNotebook className={iconClassname} />,
    },
    {
      title: "AI Enthusiasts & Beginners",
      text: "Learn to maximise AI tools like Chat-GPT and automate daily workflow",
      icon: <SiMagento className={iconClassname} />,
    },
    {
      title: "Freelancers & Agencies",
      text: "Increase efficiency by using AI driven solutions for writing, marketing and business automation",
      icon: <SiFreelancer className={iconClassname} />,
    },
  ];

  return (
    <section className=" mt-[10rem]">
      <h2 className="text-center text-[3rem] font-semibold font-dmsans mb-[3rem]">
        Who Is The Bundle For?
      </h2>
      <div className="grid grid-cols-3 w-full gap-[5rem] lg:gap-[3rem] xmd:grid-cols-2 smd:grid-cols-1">
        {data.map(
          (
            item: { title: string; text: string; icon?: ReactNode },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1, ease: "easeIn" }}
              key={item.title}
              className="border border-color-white bg-gray-850 p-[2rem] rounded-[1rem]"
            >
              {item.icon}
              <p className="text-[2rem] font-dmsans font-semibold mb-[2rem]">
                {item.title}
              </p>
              <p>{item.text}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default WhoIsTheBundleFor;
