import { render, screen } from "@testing-library/react";

import Greet from ".";

describe("<Greet /> Component", () => {
  it("Should render hello, user", () => {
    render(<Greet />);

    const result = screen.getByText("Hello, user");

    expect(result).toBeInTheDocument();
  });

  it("Should render hello, `username`", () => {
    const username = "Alaa";

    render(<Greet username="Alaa" />);

    const result = screen.getByText(`Hello, ${username}`);

    expect(result).toBeInTheDocument();
  });
});
