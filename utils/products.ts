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
    price: 25,
    percentOff: 20,
    image: chatgptImg,
    slug: "chatgpt-simplified",
    paymentLink: "https://sandbox.flutterwave.com/pay/mgdumxhttw8w",
    details: [
      "Unlock advanced prompt engineering techniques",
      "Learn prompting techniques to get the best AI responses",
      "Avoid common mistakes and optimize AI-generated outputs",
    ],
  },
  {
    priceId: "price_1QmvlNRC8367g7X7wNaJLrho",
    title: "The Ultimate Guide to Generative AI & Prompting",
    price: 35,
    percentOff: 20,
    paymentLink: "https://sandbox.flutterwave.com/pay/6pkki7pug8lt",
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
    price: 20,
    percentOff: 25,
    image: highImpactGptImg,
    slug: "high-impact-chatgpt-prompts",
    paymentLink: "https://sandbox.flutterwave.com/pay/timnaxi9icqe",
    details: [
      "A collection of 2,500+ expert-crafted prompts across 27 industries",
      "Use AI for marketing, sales, content creation, finance, legal, healthcare, and more",
      "Save time, improve workflow efficiency, and boost creativity with AI",
    ],
  },
  {
    priceId: "price_1QmvfsRC8367g7X7yMXQ8hIQ",
    title: "The Ultimate ChatGpt: Prompts Handbook",
    price: 15,
    percentOff: 20,
    paymentLink: "https://sandbox.flutterwave.com/pay/6hzeqwgdbw7j",
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
