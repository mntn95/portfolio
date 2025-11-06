import { render, screen } from "@testing-library/react";
import { Heading } from "../heading";

describe("Heading", () => {
    it("should render heading with provided text", () => {
        render(<Heading text="About Me" />);

        const heading = screen.getByRole("heading", {
            level: 2,
            name: /about me/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("should display heading text correctly", () => {
        render(<Heading text="My Portfolio" />);

        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toHaveTextContent("My Portfolio");
    });

    it("should render heading with uppercase styling", () => {
        render(<Heading text="Services" />);

        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toHaveClass("uppercase");
    });
});
