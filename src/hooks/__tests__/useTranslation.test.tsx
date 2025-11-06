import { renderHook } from "@testing-library/react";
import { useTranslation } from "../useTranslation";
import { useTranslation as useI18nTranslation } from "react-i18next";

// Mock react-i18next
jest.mock("react-i18next");

const mockUseI18nTranslation = useI18nTranslation as jest.MockedFunction<
    typeof useI18nTranslation
>;

describe("useTranslation", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return translation function and i18n instance", () => {
        const mockT = jest.fn((key: string) => key);
        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: mockT,
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result } = renderHook(() => useTranslation());

        expect(result.current.t).toBe(mockT);
        expect(result.current.i18n).toBe(mockI18n);
    });

    it("should return current language from i18n", () => {
        const mockI18n = {
            language: "fr",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: jest.fn(),
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result } = renderHook(() => useTranslation());

        expect(result.current.currentLanguage).toBe("fr");
    });

    it("should correctly identify when language is French", () => {
        const mockI18n = {
            language: "fr",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: jest.fn(),
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result } = renderHook(() => useTranslation());

        expect(result.current.isFrench).toBe(true);
        expect(result.current.isEnglish).toBe(false);
    });

    it("should correctly identify when language is English", () => {
        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: jest.fn(),
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result } = renderHook(() => useTranslation());

        expect(result.current.isEnglish).toBe(true);
        expect(result.current.isFrench).toBe(false);
    });

    it("should pass namespace to underlying useTranslation hook when provided", () => {
        const mockT = jest.fn();
        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: mockT,
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        renderHook(() => useTranslation("hero"));

        expect(mockUseI18nTranslation).toHaveBeenCalledWith("hero");
    });

    it("should work without namespace parameter", () => {
        const mockT = jest.fn();
        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: mockT,
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        renderHook(() => useTranslation());

        expect(mockUseI18nTranslation).toHaveBeenCalledWith(undefined);
    });

    it("should allow user to translate text using the t function", () => {
        const mockT = jest.fn((key: string) => {
            const translations: Record<string, string> = {
                "hero.title": "Welcome",
                "hero.subtitle": "Build amazing things",
            };
            return translations[key] || key;
        });

        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: mockT,
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result } = renderHook(() => useTranslation("hero"));

        const translatedTitle = result.current.t("hero.title");
        expect(translatedTitle).toBe("Welcome");

        const translatedSubtitle = result.current.t("hero.subtitle");
        expect(translatedSubtitle).toBe("Build amazing things");
    });

    it("should reflect language changes in boolean flags", () => {
        let currentLanguage = "en";
        const mockI18n = {
            get language() {
                return currentLanguage;
            },
        };

        mockUseI18nTranslation.mockReturnValue({
            t: jest.fn(),
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        const { result, rerender } = renderHook(() => useTranslation());

        expect(result.current.isEnglish).toBe(true);
        expect(result.current.isFrench).toBe(false);

        // Simulate language change
        currentLanguage = "fr";
        rerender();

        expect(result.current.isEnglish).toBe(false);
        expect(result.current.isFrench).toBe(true);
    });

    it("should handle multiple namespaces correctly", () => {
        const mockT = jest.fn();
        const mockI18n = {
            language: "en",
        };

        mockUseI18nTranslation.mockReturnValue({
            t: mockT,
            i18n: mockI18n,
        } as unknown as ReturnType<typeof useI18nTranslation>);

        // User uses hero namespace
        const { result: heroResult } = renderHook(() => useTranslation("hero"));

        expect(heroResult.current.t).toBe(mockT);

        // User uses about namespace
        const { result: aboutResult } = renderHook(() =>
            useTranslation("about"),
        );

        expect(aboutResult.current.t).toBe(mockT);
        expect(mockUseI18nTranslation).toHaveBeenCalledWith("hero");
        expect(mockUseI18nTranslation).toHaveBeenCalledWith("about");
    });
});
