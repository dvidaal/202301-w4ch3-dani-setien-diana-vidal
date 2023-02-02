import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a component Keybord", () => {
  describe("When rendered", () => {
    test("Then it should show a button with a number on it", () => {
      render(<Keyboard />);

      const allKeys = screen.getByRole("button", { name: "5" });

      expect(allKeys).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'delete' on it", () => {
      render(<Keyboard />);

      const deleteKey = screen.getByRole("button", { name: "delete" });

      expect(deleteKey).toBeInTheDocument();
    });
  });
});
