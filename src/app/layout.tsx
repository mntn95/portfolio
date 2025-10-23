import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import { I18nProvider } from "@/lib/i18n/provider";
import BackToTopButton from "@/base-components/backToTopButton";
import { ScrollProgressBar } from "@/base-components";

const outfit = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mathieu Nguyen",
    description: "My Portfolio Website",
};

const RootLayout: React.FC<{
    children: React.ReactNode;
}> = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <html suppressHydrationWarning>
        <body className={outfit.className}>
            <ScrollProgressBar />
            <I18nProvider>
                {children}
                <BackToTopButton />
            </I18nProvider>
        </body>
    </html>
);

export default RootLayout;
