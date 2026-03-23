import type { Metadata } from "next";
import { AdyaNavbar } from "@/components/adya/AdyaNavbar";
import { AdyaFooter } from "@/components/adya/AdyaFooter";

export const metadata: Metadata = {
    title: "Adya — Women's Health, Reimagined",
    description:
        "Private, online healthcare for PCOS, period health, and hair loss. Expert doctors, discreet delivery, real results.",
};

export default function AdyaLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="adya">
            <AdyaNavbar />
            <main className="min-h-screen bg-background text-foreground">
                {children}
            </main>
            <AdyaFooter />
        </div>
    );
}
