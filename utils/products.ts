import selfCareImg from "../assets/self-care.png";
import mindfullnessImg from "../assets/mindfullness.png";
import gratitudeImg from "../assets/gratitude.png";
import emotionalImg from "../assets/emotional-wellness.png";
import stressManImg from "../assets/stress-management.png";
import { StaticImageData } from "next/image";

export type Product = {
  priceId: string;
  title: string;
  price: number;
  percentOff: number;
  image: StaticImageData;
  slug: string;
  detail: string;
};

const products: Product[] = [
  {
    priceId: "price_1QmuPFRC8367g7X78DEPdSZg",
    title: "Self care guide",
    price: 20,
    percentOff: 20,
    image: selfCareImg,
    slug: "self-care-guide",
    detail:
      "In this course, you will recieve a folder with a guide that will help you create viral videos like me. This guide will help you to get into the Tiktok Creator Rewards Program so that you can potentially start earning money. This guide is a great start to becoming Tiktok/Instagram Famous!",
  },
  {
    priceId: "price_1QmvfsRC8367g7X7yMXQ8hIQ",
    title: "Mindfulness Challenge",
    price: 15,
    percentOff: 20,
    image: mindfullnessImg,
    slug: "mindfulness-challenge",
    detail:
      "In this course, you will recieve a folder with a guide that will help you create viral videos like me. This guide will help you to get into the Tiktok Creator Rewards Program so that you can potentially start earning money. This guide is a great start to becoming Tiktok/Instagram Famous!",
  },
  {
    priceId: "price_1QmvkMRC8367g7X7MXCXphib",
    title: "Gratitude journal",
    price: 20,
    percentOff: 25,
    image: gratitudeImg,
    slug: "gratitude-journal",
    detail:
      "In this course, you will recieve a folder with a guide that will help you create viral videos like me. This guide will help you to get into the Tiktok Creator Rewards Program so that you can potentially start earning money. This guide is a great start to becoming Tiktok/Instagram Famous!",
  },
  {
    priceId: "price_1QmvmZRC8367g7X7FDsc4iPS",
    title: "Emotional wellness",
    price: 25,
    percentOff: 25,
    image: emotionalImg,
    slug: "emotional-wellness",
    detail:
      "In this course, you will recieve a folder with a guide that will help you create viral videos like me. This guide will help you to get into the Tiktok Creator Rewards Program so that you can potentially start earning money. This guide is a great start to becoming Tiktok/Instagram Famous!",
  },
  {
    priceId: "price_1QmvlNRC8367g7X7wNaJLrho",
    title: "Stress management workbook",
    price: 35,
    percentOff: 25,
    image: stressManImg,
    slug: "stress-management-workbook",
    detail:
      "In this course, you will recieve a folder with a guide that will help you create viral videos like me. This guide will help you to get into the Tiktok Creator Rewards Program so that you can potentially start earning money. This guide is a great start to becoming Tiktok/Instagram Famous!",
  },
];

export default products;
