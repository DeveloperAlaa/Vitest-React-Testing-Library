import { render, screen } from "@testing-library/react";
import Signin from ".";

describe("<Signin /> Component", () => {
  it("renders an h2 heading element", () => {
    render(<Signin />);
    const h2Element = screen.getByRole("heading", {
      level: 2,
    });

    expect(h2Element).toBeInTheDocument();
  });

  it("renders an h3 heading element", () => {
    render(<Signin />);
    const h3Element = screen.getByRole("heading", {
      level: 3,
    });

    expect(h3Element).toBeInTheDocument();
  });

  it("renders the username input element correctly", () => {
    render(<Signin />);
    const usernameInputElement = screen.getByRole("textbox", {
      name: "Username",
    });

    expect(usernameInputElement).toBeInTheDocument();
  });

  it("renders the password input element correctly", () => {
    render(<Signin />);
    const passwordInputElement = screen.getByLabelText("Password");

    expect(passwordInputElement).toBeInTheDocument();
  });

  it("renders the bio input element correctly", () => {
    render(<Signin />);

    const bioInputElement = screen.getByPlaceholderText("Enter your bio...");

    expect(bioInputElement).toBeInTheDocument();
  });

  it("renders the submit button element correctly", () => {
    render(<Signin />);

    const submitButtonElement = screen.getByRole("button", {
      name: "Submit",
    });

    expect(submitButtonElement).toBeInTheDocument();
  });

  it("renders a paragraph element with terms and conditions", () => {
    render(<Signin />);

    const terms =
      "By submiting your data you are accepting our terms and conditions";

    const paragraghElement = screen.getByText(terms);

    expect(paragraghElement).toBeInTheDocument();
  });

  it("renders the reactive age input element", () => {
    render(<Signin />);

    const defalutAge = 20;
    const ageInputElement = screen.getByDisplayValue(defalutAge);

    expect(ageInputElement).toBeInTheDocument();
  });

  it("renders a react logo image", () => {
    render(<Signin />);

    const altText = "React Logo";
    const reactLogo = screen.getByAltText(altText);

    expect(reactLogo).toBeInTheDocument();
  });
});
