interface KeyProps {
  number: number;
  className: string;
}

interface KeyBigProps {
  text: string;
  className: string;
}

export const NumberKey = ({ number, className }: KeyProps): JSX.Element => {
  return <button className={`${className}`}>{number}</button>;
};

export const StringKey = ({ text, className }: KeyBigProps): JSX.Element => {
  return <button className={`${className}`}>{text}</button>;
};
