import { motion } from "framer-motion";
import React from "react";

const IndustriesCovered = () => {
  const data: string[] = [
    "Copywriting & Content Strategy",
    "Marketing & Growth Strategy",
    "Sales & Lead Generation",
    " Social Media & Brand Building",
    "E-Commerce & Product Marketing",
    "Data Analysis & Business Intelligence",
    "Business Growth & Competitive Strategy",
    "Customer Service & Support Automation",
    "AI & Machine Learning Applications",
    "Productivity & Time Management",
    "Email Writing & Outreach",
    "Resume Writing & Career Development",
    "Job Search & Resume Optimization",
    "Legal Advice & Document Assistance",
    "Real Estate & Property Management",
    "Personal Finance & Investment Planning",
    "Public Relations & Media Strategy",
    "Content Creation & Digital Media",
    "Healthcare & Medical Guidance",
    "Mental Health & Self-Care",
    "Fitness & Health Coaching",
    "Parenting & Child Development",
    "Exam Preparation & Study Assistance",
    "Event Planning & Travel Tips",
    "Graphic & UX/UI Design",
    "Programming & Software Development",
    "Betting & Gambling Strategies",
  ];

  return (
    <section className="mt-[10rem]  pb-[10rem]">
      <h2 className="font-dmsans text-[3rem] font-semibold mb-[3rem] text-center">
        Industry Covered in the the AI Prompts Pack
      </h2>
      <ul className="flex flex-wrap justify-around">
        {data.map((industry: string, index: number) => (
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeIn" }}
            key={industry}
            className="px-[2rem] py-[1rem] border border-white rounded-[1rem] mb-[2rem] bg-gray-700 mr-[2rem] last:mr-0"
          >
            {industry}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default IndustriesCovered;
