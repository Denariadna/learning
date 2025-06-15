import { Button, ButtonTheme } from "./Button";
import { render, screen } from "@testing-library/react";
import * as cls from "./Button.module.scss";
import "@testing-library/jest-dom";

console.log("cls.clear", cls);
describe("Button", () => {
  test("with only first param", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("with only first param", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    const button = screen.getByText("TEST");
    screen.debug(button);
    expect(button).toHaveClass("clear");
  });
});
