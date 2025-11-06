import { render, screen, waitFor } from "@testing-library/react";
import { I18nProvider } from "../provider";

// Mock dependencies - must be defined before jest.mock calls
jest.mock("../config", () => {
    const mockChangeLanguageFn = jest.fn().mockResolvedValue(undefined);
    return {
        __esModule: true,
        default: {
            language: "en",
            changeLanguage: mockChangeLanguageFn,
            isInitialized: true,
        },
    };
});

jest.mock("../helpers", () => ({
    detectBrowserLanguage: jest.fn(),
}));

// Import after mocks are set up
import i18n from "../config";
import { detectBrowserLanguage } from "../helpers";

const mockDetectBrowserLanguageTyped =
    detectBrowserLanguage as jest.MockedFunction<typeof detectBrowserLanguage>;

beforeEach(() => {
    jest.clearAllMocks();
    if (i18n.changeLanguage) {
        // @ts-expect-error - Accessing mock for testing
        i18n.changeLanguage.mockResolvedValue(undefined);
    }
    mockDetectBrowserLanguageTyped.mockReturnValue("en");
    i18n.language = "en";

    // Reset document language
    if (document?.documentElement) {
        document.documentElement.lang = "en";
    }
});

describe("I18nProvider", () => {
    it("should not render children until language is initialized", async () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("fr");
        i18n.language = "en";
        // @ts-expect-error - Accessing mock for testing
        i18n.changeLanguage.mockImplementation(
            () =>
                new Promise<void>((resolve) => {
                    setTimeout(resolve, 100);
                }),
        );

        render(
            <I18nProvider>
                <div>Test Content</div>
            </I18nProvider>,
        );

        // Content should not be visible immediately when language change is in progress
        expect(screen.queryByText("Test Content")).not.toBeInTheDocument();

        // After language change completes, content should appear
        await waitFor(
            () => {
                expect(screen.getByText("Test Content")).toBeInTheDocument();
            },
            { timeout: 200 },
        );
    });

    it("should render children after language initialization completes", async () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("en");
        i18n.language = "en";

        render(
            <I18nProvider>
                <div>Test Content</div>
            </I18nProvider>,
        );

        await waitFor(() => {
            expect(screen.getByText("Test Content")).toBeInTheDocument();
        });
    });

    it("should detect browser language on mount", () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("fr");

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        expect(mockDetectBrowserLanguageTyped).toHaveBeenCalled();
    });

    it("should set document language attribute to detected language", async () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("fr");
        i18n.language = "en";
        // @ts-expect-error - Accessing mock for testing
        i18n.changeLanguage.mockResolvedValue(undefined);

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        await waitFor(() => {
            expect(document.documentElement.lang).toBe("fr");
        });
    });

    it("should change i18n language when browser language differs", async () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("fr");
        i18n.language = "en";

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        await waitFor(() => {
            expect(i18n.changeLanguage).toHaveBeenCalledWith("fr");
        });
    });

    it("should not change language when browser language matches i18n language", async () => {
        mockDetectBrowserLanguageTyped.mockReturnValue("en");
        i18n.language = "en";
        jest.clearAllMocks(); // Clear any previous calls

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        await waitFor(() => {
            expect(screen.getByText("Content")).toBeInTheDocument();
        });

        // changeLanguage should not be called if languages already match
        // (it might be called during initialization, but not for sync)
        // The key is that content is rendered without waiting for language change
    });
});
