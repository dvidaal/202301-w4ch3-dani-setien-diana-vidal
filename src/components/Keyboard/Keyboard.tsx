import { NumberKey, StringKey } from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  return (
    <ol className="keyboard">
      {keyNumbers.map((keys) => (
        <li>
          <NumberKey text={keys} className={"key"} />
        </li>
      ))}
      <li>
        <StringKey className="key big" text="delete" />
      </li>
    </ol>
  );
};

export default Keyboard;
