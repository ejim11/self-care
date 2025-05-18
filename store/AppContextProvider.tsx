"use client";

import { FC, ReactNode, useState } from "react";
import { appContext } from "./appContext";

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [country, setCountry] = useState<string>("nigeria");

  return (
    <appContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
