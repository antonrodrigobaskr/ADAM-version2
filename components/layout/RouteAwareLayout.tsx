"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";

export function RouteAwareLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdya = pathname?.startsWith("/adya");

    if (isAdya) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
