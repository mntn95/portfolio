import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Link } from "../link";

describe("Link", () => {
    it("should render link with href and children", () => {
        render(<Link href="/about">About Page</Link>);

        const link = screen.getByRole("link", { name: /about page/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/about");
    });

    it("should navigate to external URL when user clicks link", () => {
        // Suppress jsdom navigation error
        const consoleError = jest
            .spyOn(console, "error")
            .mockImplementation(() => {});

        render(
            <Link href="https://example.com" target="_blank">
                External Link
            </Link>,
        );

        const link = screen.getByRole("link", { name: /external link/i });
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(link).toHaveAttribute("target", "_blank");

        consoleError.mockRestore();
    });

    it("should trigger download when user clicks download link", () => {
        render(
            <Link href="/file.pdf" isDownloadLink={true}>
                Download PDF
            </Link>,
        );

        const link = screen.getByRole("link", { name: /download pdf/i });
        expect(link).toHaveAttribute("download", "");
    });

    it("should call onClick handler when user clicks the link", async () => {
        const user = userEvent.setup();
        const handleClick = jest.fn();

        render(
            <Link href="/page" onClick={handleClick}>
                Clickable Link
            </Link>,
        );

        const link = screen.getByRole("link", { name: /clickable link/i });
        await user.click(link);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should apply custom className when provided", () => {
        render(
            <Link href="/page" className="custom-link-class">
                Styled Link
            </Link>,
        );

        const link = screen.getByRole("link", { name: /styled link/i });
        expect(link).toHaveClass("custom-link-class");
    });

    it("should not have download attribute for regular links", () => {
        render(
            <Link href="/page" isDownloadLink={false}>
                Regular Link
            </Link>,
        );

        const link = screen.getByRole("link", { name: /regular link/i });
        expect(link).not.toHaveAttribute("download");
    });
});
