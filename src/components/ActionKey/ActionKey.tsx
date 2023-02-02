interface ActionKeyProps {
  text: string;
  className: string;
}

const ActionKey = ({ text, className }: ActionKeyProps): JSX.Element => {
  return (
    <>
      <a href="call" className={className}>
        {text}
      </a>
    </>
  );
};

export default ActionKey;
