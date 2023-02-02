import { createContext } from "react";
import { PhoneContextStructure } from "../Context/PhoneContext";

export interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const PhoneContext = createContext({} as PhoneContextStructure);
