import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        dmsans: ["var(--font-dmsans)"],
      },
      colors: {
        current: "curentColor",
        transparent: "transparent",
        "color-white": "#ffffff",
        "color-black": "#000000",
      },
      screens: {
        "3xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        "2xl": { max: "1380px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        xlg: { max: "1150px" },
        // => @media (max-width: 1150px) { ... }
        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }
        xmd: { max: "950px" },
        // => @media (max-width: 950px) { ... }
        md: { max: "850px" },
        // => @media (max-width: 850px) { ... }
        smd: { max: "700px" },
        // => @media (max-width: 700px) { ... }
        sm: { max: "600px" },
        // => @media (max-width: 600px) { ... }
        ssm: { max: "500px" },
        // => @media (max-width: 500px) { ... }
      },
      backgroundImage: {
        home: "linear-gradient(rgb(16, 16, 16), rgb(16, 16, 16))",
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(28rem, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
