import chatgptImg from "../assets/chatgpt.png";
import generativeAIImg from "../assets/generative-ai.png";
import highImpactGptImg from "../assets/high-impact-gpt.png";
import ultimateGptImg from "../assets/ultimate-gpt.png";
import { StaticImageData } from "next/image";

export type Product = {
  priceId: string;
  title: string;
  price: number;
  percentOff: number;
  paymentLink: string;
  image: StaticImageData;
  slug: string;
  details: string[];
};

const products: Product[] = [
  {
    priceId: "price_1QmvmZRC8367g7X7FDsc4iPS",
    title: "ChatGpt Simplified: Learn, Prompt and Succeed",
    price: 2000,
    percentOff: 20,
    image: chatgptImg,
    slug: "chatgpt-simplified",
    paymentLink:
      "https://paystack.com/buy/chatgpt-simplified-learn-prompt-and-succeed-oyqlsl",
    details: [
      "Unlock advanced prompt engineering techniques",
      "Learn prompting techniques to get the best AI responses",
      "Avoid common mistakes and optimize AI-generated outputs",
    ],
  },
  {
    priceId: "price_1QmvlNRC8367g7X7wNaJLrho",
    title: "The Ultimate Guide to Generative AI & Prompting",
    price: 500,
    percentOff: 20,
    paymentLink:
      "https://paystack.com/buy/the-ultimate-guide-to-generative-ai--prompting-dczuja",
    image: generativeAIImg,
    slug: "the-ultimate-guide-to-generative-ai",
    details: [
      "Understand AI fundamentals & how ChatGPT and other AI models work",
      "Learn the science behind AI-generated content & automation",
      "Master the basics of prompt engineering for better AI-generated responses",
    ],
  },
  {
    priceId: "price_1QmvkMRC8367g7X7MXCXphib",
    title:
      "High Impact Chatgpt Prompts for Business, Creativity & Productivity",
    price: 5000,
    percentOff: 25,
    image: highImpactGptImg,
    slug: "high-impact-chatgpt-prompts",
    paymentLink:
      "https://paystack.com/buy/high-impact-chatgpt-prompts-for-business-creativity---mtmwmn",
    details: [
      "A collection of 2,500+ expert-crafted prompts across 27 industries",
      "Use AI for marketing, sales, content creation, finance, legal, healthcare, and more",
      "Save time, improve workflow efficiency, and boost creativity with AI",
    ],
  },
  {
    priceId: "price_1QmvfsRC8367g7X7yMXQ8hIQ",
    title: "The Ultimate ChatGpt: Prompts Handbook",
    price: 100,
    percentOff: 20,
    paymentLink:
      "https://paystack.com/buy/the-ultimate-chatgpt-prompts-handbook-lbjsxq",
    image: ultimateGptImg,
    slug: "the-ultimate-chatgpt",
    details: [
      "A structured guide to crafting the best AI prompts for different use cases",
      "Learn how to use ChatGPT for business, productivity, and automation",
      "Covers content creation, AI-driven customer support, brainstorming, and chatbot training",
    ],
  },
];

export default products;
