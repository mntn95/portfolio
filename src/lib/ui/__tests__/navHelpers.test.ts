import { smoothScrollToId } from "../navHelpers";

// Mock scrollIntoView
const mockScrollIntoView = jest.fn();

describe("smoothScrollToId", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = "";
    });

    it("should scroll to element when user navigates to section", () => {
        const element = document.createElement("div");
        element.id = "about";
        element.scrollIntoView = mockScrollIntoView;
        document.body.appendChild(element);

        smoothScrollToId("about");

        expect(mockScrollIntoView).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        });
    });

    it("should handle navigation to different sections", () => {
        const homeElement = document.createElement("div");
        homeElement.id = "home";
        homeElement.scrollIntoView = mockScrollIntoView;
        document.body.appendChild(homeElement);

        const servicesElement = document.createElement("div");
        servicesElement.id = "services";
        servicesElement.scrollIntoView = mockScrollIntoView;
        document.body.appendChild(servicesElement);

        smoothScrollToId("home");
        expect(mockScrollIntoView).toHaveBeenCalledTimes(1);

        smoothScrollToId("services");
        expect(mockScrollIntoView).toHaveBeenCalledTimes(2);
    });

    it("should not throw error when element does not exist", () => {
        expect(() => {
            smoothScrollToId("non-existent-section");
        }).not.toThrow();

        expect(mockScrollIntoView).not.toHaveBeenCalled();
    });

    it("should handle server-side rendering gracefully", () => {
        const originalDocument = global.document;
        // @ts-ignore
        delete global.document;

        expect(() => {
            smoothScrollToId("any-id");
        }).not.toThrow();

        // Restore document
        global.document = originalDocument;
    });

    it("should scroll to element with special characters in id", () => {
        const element = document.createElement("div");
        element.id = "section-123";
        element.scrollIntoView = mockScrollIntoView;
        document.body.appendChild(element);

        smoothScrollToId("section-123");

        expect(mockScrollIntoView).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        });
    });

    it("should use smooth scrolling behavior for better user experience", () => {
        const element = document.createElement("div");
        element.id = "smooth-section";
        element.scrollIntoView = mockScrollIntoView;
        document.body.appendChild(element);

        smoothScrollToId("smooth-section");

        expect(mockScrollIntoView).toHaveBeenCalledWith(
            expect.objectContaining({
                behavior: "smooth",
            }),
        );
    });
});

