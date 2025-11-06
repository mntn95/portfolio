import { detectBrowserLanguage } from "../helpers";

// Mock window for SSR test
const originalWindow = global.window;

describe("detectBrowserLanguage", () => {
    afterEach(() => {
        // Restore window after each test
        if (typeof global.window === "undefined") {
            global.window = originalWindow;
        }
    });

    it("should return English as default for server-side rendering", () => {
        // Simulate SSR environment by temporarily removing window
        // @ts-ignore
        delete global.window;

        const result = detectBrowserLanguage();

        expect(result).toBe("en");
    });

    it("should detect French when user's browser language is French", () => {
        Object.defineProperty(navigator, "language", {
            value: "fr-FR",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("fr");
    });

    it("should detect English when user's browser language is English", () => {
        Object.defineProperty(navigator, "language", {
            value: "en-US",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("en");
    });

    it("should return English when user's browser language is not supported", () => {
        Object.defineProperty(navigator, "language", {
            value: "de-DE",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("en");
    });

    it("should return English when user's browser language is Spanish", () => {
        Object.defineProperty(navigator, "language", {
            value: "es-ES",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("en");
    });

    it("should handle language codes without region code", () => {
        Object.defineProperty(navigator, "language", {
            value: "fr",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("fr");
    });

    it("should handle language codes with region code", () => {
        Object.defineProperty(navigator, "language", {
            value: "en-GB",
            writable: true,
            configurable: true,
        });

        const result = detectBrowserLanguage();

        expect(result).toBe("en");
    });
});
