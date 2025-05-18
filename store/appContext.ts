import { createContext } from "react";

type AppContext = {
  country: string;
  setCountry: (country: string) => void;
};

export const appContext = createContext<AppContext>({
  country: "",
  setCountry: () => {},
  //   cart: [],
  //   addItemToCart: () => {},
});
