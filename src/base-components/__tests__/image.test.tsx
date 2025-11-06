import { render, screen } from "@testing-library/react";
import { Image } from "../image";

// Mock Next.js Image
jest.mock("next/image", () => ({
    __esModule: true,
    default: ({
        src,
        alt,
        width,
        height,
        className,
        priority,
    }: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
        priority?: boolean;
    }) => (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            data-priority={priority}
        />
    ),
}));

describe("Image", () => {
    it("should render image with required alt text for accessibility", () => {
        render(<Image src="/test-image.jpg" alt="Test image description" />);

        const image = screen.getByAltText("Test image description");
        expect(image).toBeInTheDocument();
    });

    it("should use default dimensions when user does not specify width and height", () => {
        render(<Image src="/test-image.jpg" alt="Test image" />);

        const image = screen.getByAltText("Test image");
        expect(image).toHaveAttribute("width", "400");
        expect(image).toHaveAttribute("height", "400");
    });

    it("should allow user to specify custom dimensions", () => {
        render(
            <Image
                src="/test-image.jpg"
                alt="Custom sized image"
                width={800}
                height={600}
            />,
        );

        const image = screen.getByAltText("Custom sized image");
        expect(image).toHaveAttribute("width", "800");
        expect(image).toHaveAttribute("height", "600");
    });

    it("should apply custom className when provided", () => {
        render(
            <Image
                src="/test-image.jpg"
                alt="Styled image"
                className="custom-class"
            />,
        );

        const image = screen.getByAltText("Styled image");
        expect(image).toHaveClass("custom-class");
    });

    it("should set priority loading when user specifies priority", () => {
        render(
            <Image
                src="/test-image.jpg"
                alt="Priority image"
                priority={true}
            />,
        );

        const image = screen.getByAltText("Priority image");
        expect(image).toHaveAttribute("data-priority", "true");
    });
});
