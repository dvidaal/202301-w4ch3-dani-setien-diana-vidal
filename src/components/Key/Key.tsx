import { useContext } from "react";
import PhoneContext from "../../Context/PhoneContext";

interface KeyProps {
  text: string;
  className: string;
}

interface KeyBigProps {
  text: string;
  className: string;
}

export const NumberKey = ({ text, className }: KeyProps): JSX.Element => {
  const { phoneNumber, addNumber } = useContext(PhoneContext);

  return (
    <button
      className={`${className}`}
      onClick={() => addNumber(phoneNumber, text)}
    >
      {text}
    </button>
  );
};

export const StringKey = ({ text, className }: KeyBigProps): JSX.Element => {
  return <button className={`${className}`}>{text}</button>;
};
