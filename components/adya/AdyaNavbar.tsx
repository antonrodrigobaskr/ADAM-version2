"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

const WHATSAPP_LINK =
    "https://wa.me/94765548544?text=Hi%20Adya%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.";

export function AdyaNavbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#how-it-works", label: "How It Works" },
        { href: "#products", label: "Treatments" },
        { href: "#faq", label: "FAQ" },
    ];

    const menuVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
        }),
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/adya"
                    className="font-medium text-2xl tracking-tight font-[family-name:var(--font-museo-moderno)] z-50 relative text-foreground"
                >
                    Adya
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        asChild
                        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold relative overflow-hidden group"
                    >
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                            <span className="relative z-20">Book Free Consult</span>
                        </a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative z-50"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-full sm:w-[400px] border-l-0 p-0"
                        >
                            <SheetTitle className="sr-only">
                                Mobile Menu
                            </SheetTitle>
                            <SheetDescription className="sr-only">
                                Navigation links
                            </SheetDescription>
                            <div className="flex flex-col h-full bg-white pt-24 px-6 pb-6">
                                <div className="flex flex-col gap-8">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.href}
                                            custom={i}
                                            initial="hidden"
                                            animate="visible"
                                            variants={menuVariants}
                                        >
                                            <SheetClose asChild>
                                                <a
                                                    href={link.href}
                                                    className="block text-4xl font-light tracking-tight hover:text-primary transition-colors text-foreground"
                                                >
                                                    {link.label}
                                                </a>
                                            </SheetClose>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-auto"
                                >
                                    <SheetClose asChild>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="w-full mb-4 h-14 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold relative overflow-hidden group"
                                        >
                                            <a
                                                href={WHATSAPP_LINK}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                                <span className="relative z-20">Book Free Consult</span>
                                            </a>
                                        </Button>
                                    </SheetClose>
                                    <p className="text-center text-sm text-muted-foreground">
                                        © 2026 Adya. All rights reserved.
                                    </p>
                                </motion.div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
