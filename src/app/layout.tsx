import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

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
    <html lang="en">
        <body className={outfit.className}>{children}</body>
    </html>
);

export default RootLayout;
