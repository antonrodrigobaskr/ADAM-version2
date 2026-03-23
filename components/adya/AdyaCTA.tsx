"use client";

import { Button } from "@/components/ui/button";

const WHATSAPP_LINK =
    "https://wa.me/94765548544?text=Hi%20Adya%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.";

export function AdyaCTA() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden border-t border-black/5">
            {/* Green spotlight */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-full max-w-3xl h-full max-h-[400px] bg-[#00674F]/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-black font-[family-name:var(--font-manrope)] mb-6">
                        You deserve answers.
                        <br />
                        <span className="text-[#00674F]">Not judgment.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-black/50 font-medium mb-12 max-w-xl mx-auto">
                        Start a free, private consultation with a doctor who actually listens.
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="rounded-full h-14 px-10 text-base font-bold bg-[#00674F] text-white hover:bg-[#00674F]/90 shadow-lg shadow-[#00674F]/20 relative overflow-hidden group"
                    >
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                            <span className="relative z-20">Start My Assessment</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
