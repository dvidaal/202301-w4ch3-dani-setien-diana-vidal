import { useContext } from "react";
import PhoneContext from "../../Context/PhoneContext";

export const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneContext);
  return <span className="number">{phoneNumber}</span>;
};
