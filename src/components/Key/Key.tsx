interface KeyProps {
  text: string;
  className: string;
}

interface KeyBigProps {
  text: string;
  className: string;
}

export const NumberKey = ({ text, className }: KeyProps): JSX.Element => {
  return <button className={`${className}`}>{text}</button>;
};

export const StringKey = ({ text, className }: KeyBigProps): JSX.Element => {
  return <button className={`${className}`}>{text}</button>;
};
