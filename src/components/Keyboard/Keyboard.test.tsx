import { render } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a component Keybord", () => {
  describe("When rendered", () => {
    test("Then it should show all the numbers in the keyboard", () => {
      render(<Keyboard />);

      const allKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

      expect(allKeys).toBeInTheDocument();
    });
  });
});
