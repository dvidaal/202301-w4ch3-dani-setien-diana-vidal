import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ActionKey from "./ActionKey";

describe("Given a component Action Key", () => {
  describe("When rendered", () => {
    test("Then it should show a text 'Call'", () => {
      render(<ActionKey text="Call" className="call" />);

      const key = screen.getByText("Call");

      expect(key).toBeInTheDocument();
    });
    test("Then it should show a text 'Hang up'", () => {
      render(<ActionKey text="Hang up" className="hang-up" />);

      const key = screen.getByText("Hang up");

      expect(key).toBeInTheDocument();
    });
  });
});
