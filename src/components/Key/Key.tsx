interface KeyProps {
  number: number;
  //function: () => void;
  className: string;
}

const NumberKey = ({ number, className }: KeyProps): JSX.Element => {
  return <button className={`${className}`}>{number}</button>;
};

export default NumberKey;
