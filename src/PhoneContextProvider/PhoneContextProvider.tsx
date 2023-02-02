import { useState } from "react";
import PhoneContext from "../Context/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setNumber] = useState("");
  const [isCalling] = useState(true);

  const addNumber = (num: string) => {
    setNumber(num + 1);
  };

  return (
    <PhoneContext.Provider value={{ phoneNumber, isCalling, addNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
