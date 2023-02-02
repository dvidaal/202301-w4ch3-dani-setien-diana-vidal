import { render } from "@testing-library/react";
import { createContext } from "react";
import { Display } from "../Display/Display";

const melo = createContext({});

describe("Given a redered Display component", () => {
  describe("When it receives the phone number '6995424280'", () => {
    test("Then it should show '699542428'", () => {
      render(<Display phoneNumber={"6995424280"} />);
    });
  });
});
