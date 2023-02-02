import { createContext } from "react";
interface PhoneContextStructure {
  phoneNumber: string;
  isCalling: boolean;
  addNumber: (number: string) => void;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;
