import { useState } from "react";
import {
  PhoneContext,
  PhoneContextProviderProps,
} from "../PhoneContextProvider/PhoneContextProvider";

export interface PhoneContextStructure {
  phoneNumber: number;
  isCalling: boolean;
  addNumber: (number: number) => void;
}

export const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps) => {
  const [phoneNumber, setNumber] = useState(123);
  const [isCalling] = useState(true);

  const addNumber = (num: number) => {
    setNumber(num + 1);
  };

  return (
    <PhoneContext.Provider value={{ phoneNumber, isCalling, addNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
