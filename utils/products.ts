import selfCareImg from "../assets/self-care.png";
import mindfullnessImg from "../assets/mindfullness.png";
import gratitudeImg from "../assets/gratitude.png";
import emotionalImg from "../assets/emotional-wellness.png";
import stressManImg from "../assets/stress-management.png";
import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  price: number;
  // percentOff: number;
  image: StaticImageData;
};

const products: Product[] = [
  {
    title: "Self care guide",
    price: 30,
    // percentOff: 20,
    image: selfCareImg,
  },
  {
    title: "Mindfulness Challenge",
    price: 15,
    // percentOff: 20,
    image: mindfullnessImg,
  },
  {
    title: "Gratitude journal",
    price: 20,
    // percentOff: 25,
    image: gratitudeImg,
  },
  {
    title: "Emotional wellness",
    price: 10,
    // percentOff: 25,
    image: emotionalImg,
  },
  {
    title: "Stress management workbook",
    price: 25,
    // percentOff: 25,
    image: stressManImg,
  },
];

export default products;
