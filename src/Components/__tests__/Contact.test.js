import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes in the contact component", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    expect(input).toHaveLength(2);
  });
});
