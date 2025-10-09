import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

const outfit = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mathieu Nguyen",
    description: "My Portfolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
