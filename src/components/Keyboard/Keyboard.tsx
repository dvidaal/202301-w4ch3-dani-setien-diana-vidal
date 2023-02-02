import NumberKey from "../Key/Key";

const Keyboard = (): JSX.Element => {
  return (
    <ol className="keyboard">
      <li>
        <NumberKey number={"1"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"2"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"3"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"4"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"5"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"6"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"7"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"8"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"9"} className={"key"} />
      </li>
      <li>
        <NumberKey number={"0"} className={"key"} />
      </li>
      <li>
        <button className="key big">delete</button>
      </li>
    </ol>
  );
};

export default Keyboard;
