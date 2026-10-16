import { render, screen } from "@testing-library/react";
import Skills from ".";

describe("<Skills /> Component", () => {
  const skills = ["coding", "football", "video games"];

  it("renders a list of skills.", () => {
    render(<Skills skills={skills} />);

    const listElements = screen.getAllByRole("listitem");

    expect(listElements).toHaveLength(skills.length);
  });
});
