import { useState } from "react";
import PhoneContext from "../Context/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element;
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setNumber] = useState("");
  const [isCalling] = useState(false);

  const addDigit = (phoneNumber: string, num: string) => {
    return phoneNumber.length < 9
      ? setNumber(`${phoneNumber}${num}`)
      : setNumber(phoneNumber);
  };

  return (
    <PhoneContext.Provider
      value={{ phoneNumber, isCalling, addNumber: addDigit }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
