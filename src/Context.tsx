import { createContext } from "react";

export const Context = createContext({});

const value = {
  isAuth: false,
};

export const ContextProvider = ({ children }: any) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
