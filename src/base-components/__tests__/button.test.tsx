import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";

describe("Button", () => {
    it("should render button with children text", () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toBeInTheDocument();
    });

    it("should call onClick handler when user clicks the button", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole("button", { name: /click me/i });
        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should render with default variant styles", () => {
        render(<Button>Default Button</Button>);

        const button = screen.getByRole("button", { name: /default button/i });
        expect(button).toHaveClass("border-link");
    });

    it("should render with filled variant styles when user specifies variant", () => {
        render(<Button variant="filled">Filled Button</Button>);

        const button = screen.getByRole("button", { name: /filled button/i });
        expect(button).toHaveClass("bg-link");
    });

    it("should apply custom className when provided", () => {
        render(<Button className="custom-class">Custom Button</Button>);

        const button = screen.getByRole("button", { name: /custom button/i });
        expect(button).toHaveClass("custom-class");
    });
});
