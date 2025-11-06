import { render, screen } from "@testing-library/react";
import Layout from "../layout";
import { navbarData } from "@/assets";

// Mock ScrollArrow
jest.mock("../scrollArrow", () => ({
    __esModule: true,
    default: ({
        direction,
        targetId,
    }: {
        direction: string;
        targetId: string;
    }) => (
        <button
            data-testid={`scroll-arrow-${direction}`}
            data-target={targetId}
        >
            {direction} arrow
        </button>
    ),
}));

// Mock Heading
jest.mock("../heading", () => ({
    Heading: ({ text }: { text: string }) => <h2>{text}</h2>,
}));

describe("Layout", () => {
    it("should render section with provided id", () => {
        render(
            <Layout id="about">
                <div>Content</div>
            </Layout>,
        );

        const section = document.getElementById("about");
        expect(section).toBeInTheDocument();
    });

    it("should render children content", () => {
        render(
            <Layout id="home">
                <div>Home Content</div>
            </Layout>,
        );

        expect(screen.getByText("Home Content")).toBeInTheDocument();
    });

    it("should display heading when title and showHeading are provided", () => {
        render(
            <Layout id="services" title="Services" showHeading={true}>
                <div>Services Content</div>
            </Layout>,
        );

        expect(
            screen.getByRole("heading", { level: 2, name: /services/i }),
        ).toBeInTheDocument();
    });

    it("should hide heading when showHeading is false", () => {
        render(
            <Layout id="projects" title="Projects" showHeading={false}>
                <div>Projects Content</div>
            </Layout>,
        );

        expect(
            screen.queryByRole("heading", { level: 2, name: /projects/i }),
        ).not.toBeInTheDocument();
    });

    it("should not show heading when title is not provided", () => {
        render(
            <Layout id="skills" showHeading={true}>
                <div>Skills Content</div>
            </Layout>,
        );

        expect(
            screen.queryByRole("heading", { level: 2 }),
        ).not.toBeInTheDocument();
    });

    it("should show navigation arrows based on navbar data", () => {
        // Find a section that has prev/next in navbarData
        const aboutIndex = navbarData.findIndex((item) => item.id === "about");
        const hasPrev = aboutIndex > 0;
        const hasNext = aboutIndex < navbarData.length - 1;

        render(
            <Layout id="about">
                <div>About Content</div>
            </Layout>,
        );

        if (hasPrev) {
            expect(screen.getByTestId("scroll-arrow-up")).toBeInTheDocument();
        }
        if (hasNext) {
            expect(screen.getByTestId("scroll-arrow-down")).toBeInTheDocument();
        }
    });

    it("should use custom prevId and nextId when provided", () => {
        render(
            <Layout id="custom" prevId="prev-section" nextId="next-section">
                <div>Custom Content</div>
            </Layout>,
        );

        const upArrow = screen.getByTestId("scroll-arrow-up");
        const downArrow = screen.getByTestId("scroll-arrow-down");

        expect(upArrow).toHaveAttribute("data-target", "prev-section");
        expect(downArrow).toHaveAttribute("data-target", "next-section");
    });

    it("should apply top alignment when alignTop is true", () => {
        render(
            <Layout id="top-section" alignTop={true}>
                <div>Top Aligned Content</div>
            </Layout>,
        );

        const section = document.getElementById("top-section");
        const container = section?.querySelector("div");
        expect(container).toHaveClass("justify-start", "pt-20");
    });

    it("should apply center alignment by default", () => {
        render(
            <Layout id="center-section">
                <div>Center Aligned Content</div>
            </Layout>,
        );

        const section = document.getElementById("center-section");
        const container = section?.querySelector("div");
        expect(container).toHaveClass("justify-center");
    });

    it("should apply special alignment for about section", () => {
        render(
            <Layout id="about">
                <div>About Content</div>
            </Layout>,
        );

        const section = document.getElementById("about");
        const container = section?.querySelector("div");
        expect(container).toHaveClass("items-start");
    });
});
