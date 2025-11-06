import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    // Add more setup options before each test is run
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        // Handle module aliases (matches tsconfig.json paths)
        "^@/(.*)$": "<rootDir>/src/$1",
        // Handle CSS imports (with CSS modules)
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        // Handle image imports
        "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i":
            "<rootDir>/__mocks__/fileMock.js",
    },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/**/*.stories.{js,jsx,ts,tsx}",
        "!src/**/__tests__/**",
        "!src/**/__mocks__/**",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": [
            "ts-jest",
            {
                tsconfig: {
                    jsx: "react-jsx",
                },
            },
        ],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
