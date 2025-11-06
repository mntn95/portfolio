import { renderHook, act, waitFor } from "@testing-library/react";

// Mock dependencies - must be defined before jest.mock calls
const mockChangeLanguage = jest.fn().mockResolvedValue(undefined);
const mockI18n = {
    language: "en",
    changeLanguage: mockChangeLanguage,
};

const mockDetectBrowserLanguage = jest.fn();

jest.mock("@/lib/i18n/config", () => ({
    __esModule: true,
    default: mockI18n,
}));

jest.mock("@/lib/i18n/helpers", () => ({
    detectBrowserLanguage: mockDetectBrowserLanguage,
}));

// Import after mocks are set up
import { useLanguage } from "../useLanguage";
import i18n from "@/lib/i18n/config";
import { detectBrowserLanguage } from "@/lib/i18n/helpers";

beforeEach(() => {
    jest.clearAllMocks();
    mockChangeLanguage.mockResolvedValue(undefined);
    mockI18n.language = "en";
    mockDetectBrowserLanguage.mockReturnValue("en");

    // Reset document.documentElement.lang
    if (document?.documentElement) {
        document.documentElement.lang = "en";
    }
});

describe("useLanguage", () => {
    it("should detect browser language on initial load", () => {
        mockDetectBrowserLanguage.mockReturnValue("fr");

        const { result } = renderHook(() => useLanguage());

        expect(mockDetectBrowserLanguage).toHaveBeenCalled();
        expect(result.current.currentLanguage).toBe("fr");
    });

    it("should initialize with English when browser language is not supported", () => {
        mockDetectBrowserLanguage.mockReturnValue("de");

        const { result } = renderHook(() => useLanguage());

        expect(result.current.currentLanguage).toBe("de");
    });

    it("should allow user to change language from English to French", async () => {
        mockDetectBrowserLanguage.mockReturnValue("en");
        mockI18n.language = "en";

        const { result } = renderHook(() => useLanguage());

        expect(result.current.currentLanguage).toBe("en");
        expect(result.current.isEnglish).toBe(true);
        expect(result.current.isFrench).toBe(false);

        // User changes language to French
        await act(async () => {
            await result.current.changeLanguage("fr");
        });

        expect(mockChangeLanguage).toHaveBeenCalledWith("fr");
        expect(result.current.currentLanguage).toBe("fr");
        expect(result.current.isEnglish).toBe(false);
        expect(result.current.isFrench).toBe(true);
    });

    it("should allow user to change language from French to English", async () => {
        mockDetectBrowserLanguage.mockReturnValue("fr");
        mockI18n.language = "fr";

        const { result } = renderHook(() => useLanguage());

        expect(result.current.currentLanguage).toBe("fr");
        expect(result.current.isFrench).toBe(true);
        expect(result.current.isEnglish).toBe(false);

        // User changes language to English
        await act(async () => {
            await result.current.changeLanguage("en");
        });

        expect(mockChangeLanguage).toHaveBeenCalledWith("en");
        expect(result.current.currentLanguage).toBe("en");
        expect(result.current.isFrench).toBe(false);
        expect(result.current.isEnglish).toBe(true);
    });

    it("should update document language attribute when user changes language", async () => {
        mockDetectBrowserLanguage.mockReturnValue("en");

        const { result } = renderHook(() => useLanguage());

        await act(async () => {
            await result.current.changeLanguage("fr");
        });

        expect(document.documentElement.lang).toBe("fr");
    });
});
