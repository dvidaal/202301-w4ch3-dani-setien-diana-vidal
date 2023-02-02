interface DisplayProps {
  phoneNumber: string;
}

export const Display = ({ phoneNumber }: DisplayProps): JSX.Element => {
  return <span className="number">{phoneNumber}</span>;
};
