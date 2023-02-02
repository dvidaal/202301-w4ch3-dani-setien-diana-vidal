import { useContext } from "react";
import PhoneContext from "../../Context/PhoneContext";

interface KeyProps {
  number: string;
  className: string;
}

const NumberKey = ({ number, className }: KeyProps): JSX.Element => {
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

export default NumberKey;
