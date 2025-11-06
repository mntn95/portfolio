import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollArrow from "../scrollArrow";
import { smoothScrollToId } from "@/lib/ui/navHelpers";

// Mock framer-motion
jest.mock("framer-motion", () => ({
    motion: {
        button: ({
            children,
            whileInView,
            initial,
            transition,
            ...props
        }: any) => <button {...props}>{children}</button>,
    },
}));

// Mock smoothScrollToId
jest.mock("@/lib/ui/navHelpers", () => ({
    smoothScrollToId: jest.fn(),
}));

const mockSmoothScrollToId = smoothScrollToId as jest.MockedFunction<
    typeof smoothScrollToId
>;

describe("ScrollArrow", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render down arrow with correct aria label", () => {
        render(<ScrollArrow direction="down" targetId="next-section" />);

        const button = screen.getByRole("button", {
            name: /scroll to next section/i,
        });
        expect(button).toBeInTheDocument();
    });

    it("should render up arrow with correct aria label", () => {
        render(<ScrollArrow direction="up" targetId="prev-section" />);

        const button = screen.getByRole("button", {
            name: /scroll to previous section/i,
        });
        expect(button).toBeInTheDocument();
    });

    it("should scroll to target section when user clicks down arrow", async () => {
        const user = userEvent.setup();

        render(<ScrollArrow direction="down" targetId="about" />);

        const button = screen.getByRole("button", {
            name: /scroll to next section/i,
        });
        await user.click(button);

        expect(mockSmoothScrollToId).toHaveBeenCalledWith("about");
    });

    it("should scroll to target section when user clicks up arrow", async () => {
        const user = userEvent.setup();

        render(<ScrollArrow direction="up" targetId="home" />);

        const button = screen.getByRole("button", {
            name: /scroll to previous section/i,
        });
        await user.click(button);

        expect(mockSmoothScrollToId).toHaveBeenCalledWith("home");
    });

    it("should scroll when user presses Enter key", async () => {
        const user = userEvent.setup();

        render(<ScrollArrow direction="down" targetId="skills" />);

        const button = screen.getByRole("button", {
            name: /scroll to next section/i,
        });
        button.focus();
        await user.keyboard("{Enter}");

        expect(mockSmoothScrollToId).toHaveBeenCalledWith("skills");
    });

    it("should scroll when user presses Space key", async () => {
        const user = userEvent.setup();

        render(<ScrollArrow direction="up" targetId="projects" />);

        const button = screen.getByRole("button", {
            name: /scroll to previous section/i,
        });
        button.focus();
        await user.keyboard(" ");

        expect(mockSmoothScrollToId).toHaveBeenCalledWith("projects");
    });

    it("should be keyboard accessible with tabIndex", () => {
        render(<ScrollArrow direction="down" targetId="next" />);

        const button = screen.getByRole("button", {
            name: /scroll to next section/i,
        });
        expect(button).toHaveAttribute("tabIndex", "0");
    });
});
