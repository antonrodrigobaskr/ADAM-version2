import type { Metadata } from "next";
import { Manrope, MuseoModerno } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import { RouteAwareLayout } from "@/components/layout/RouteAwareLayout";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ADAM - Men's Telehealth",
    description: "Accessible, discreet, and professional healthcare solutions for men in Sri Lanka.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${manrope.variable} ${museoModerno.variable} antialiased bg-background text-foreground font-[family-name:var(--font-manrope)]`}
                suppressHydrationWarning
            >
                <RouteAwareLayout>{children}</RouteAwareLayout>
            </body>
        </html>
    );
}
