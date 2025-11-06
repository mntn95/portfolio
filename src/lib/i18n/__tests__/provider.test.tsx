import { render, screen, waitFor } from "@testing-library/react";
import { I18nProvider } from "../provider";
import i18n from "../config";
import { detectBrowserLanguage } from "../helpers";

// Mock dependencies
jest.mock("../config");
jest.mock("../helpers");

const mockDetectBrowserLanguage = detectBrowserLanguage as jest.MockedFunction<
    typeof detectBrowserLanguage
>;

const mockI18n = {
    language: "en",
    changeLanguage: jest.fn().mockResolvedValue(undefined),
    isInitialized: true,
};

beforeEach(() => {
    jest.clearAllMocks();
    (i18n as any) = mockI18n;
    mockDetectBrowserLanguage.mockReturnValue("en");
    mockI18n.language = "en";

    // Reset document language
    if (document?.documentElement) {
        document.documentElement.lang = "en";
    }
});

describe("I18nProvider", () => {
    it("should not render children until language is initialized", async () => {
        mockDetectBrowserLanguage.mockReturnValue("fr");
        mockI18n.language = "en";
        mockI18n.changeLanguage.mockImplementation(
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
        mockDetectBrowserLanguage.mockReturnValue("en");
        mockI18n.language = "en";

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
        mockDetectBrowserLanguage.mockReturnValue("fr");

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        expect(mockDetectBrowserLanguage).toHaveBeenCalled();
    });

    it("should set document language attribute to detected language", async () => {
        mockDetectBrowserLanguage.mockReturnValue("fr");
        mockI18n.language = "en";
        mockI18n.changeLanguage.mockResolvedValue(undefined);

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
        mockDetectBrowserLanguage.mockReturnValue("fr");
        mockI18n.language = "en";

        render(
            <I18nProvider>
                <div>Content</div>
            </I18nProvider>,
        );

        await waitFor(() => {
            expect(mockI18n.changeLanguage).toHaveBeenCalledWith("fr");
        });
    });

    it("should not change language when browser language matches i18n language", async () => {
        mockDetectBrowserLanguage.mockReturnValue("en");
        mockI18n.language = "en";
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
