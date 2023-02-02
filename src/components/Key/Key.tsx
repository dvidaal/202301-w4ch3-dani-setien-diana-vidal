import { useContext } from "react";
import PhoneContext from "../../Context/PhoneContext";

interface KeyProps {
  number: string;
  className: string;
}

interface KeyBigProps {
  text: string;
  className: string;
}

export const NumberKey = ({ number, className }: KeyProps): JSX.Element => {
  const { phoneNumber, addNumber } = useContext(PhoneContext);

  return (
    <button
      className={`${className}`}
      onClick={() => addNumber(phoneNumber, number)}
    >
      {number}
    </button>
  );
};

export const StringKey = ({ text, className }: KeyBigProps): JSX.Element => {
  return <button className={`${className}`}>{text}</button>;
};
