"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdyaLeadCapture() {
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
    const [whatsappNumber, setWhatsappNumber] = useState("");

    const concerns = [
        "PCOS / Hormonal Issues",
        "Period Problems",
        "Hair Loss / Thinning",
        "Other / Not Sure",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let message = `Hi Adya, I'd like help with: ${selectedConcern || "General enquiry"}.`;
        if (whatsappNumber) {
            message += ` My number is ${whatsappNumber}.`;
        }
        window.open(`https://wa.me/94765548544?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="py-16 md:py-20 bg-black/[0.02]">
            <div className="container mx-auto px-6 md:px-8 max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-black font-[family-name:var(--font-manrope)] mb-4">
                        We&apos;re here to listen.
                    </h2>
                    <p className="text-black/50 font-medium">
                        Tell us what you&apos;re experiencing. We&apos;ll connect you with a specialist — free, zero commitment.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label className="text-sm font-bold text-black mb-4 block">What&apos;s your main concern?</label>
                        <div className="grid grid-cols-2 gap-3">
                            {concerns.map((concern) => (
                                <button
                                    key={concern}
                                    type="button"
                                    onClick={() => setSelectedConcern(concern)}
                                    className={`text-left px-5 py-4 rounded-lg text-sm font-semibold transition-all border ${
                                        selectedConcern === concern
                                            ? "border-[#00674F] text-[#00674F] bg-[#00674F]/[0.05]"
                                            : "border-black/10 text-black/60 hover:border-black/20"
                                    }`}
                                >
                                    {concern}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-bold text-black mb-3 block">
                            Your WhatsApp Number <span className="text-black/30 font-normal">(Optional)</span>
                        </label>
                        <Input
                            type="tel"
                            placeholder="077 123 4567"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            className="h-12 rounded-lg px-4 text-base bg-white border-black/10 focus-visible:ring-[#00674F]"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-14 rounded-full text-base font-bold bg-[#00674F] text-white hover:bg-[#00674F]/90 shadow-lg shadow-[#00674F]/15 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                        <span className="relative z-20">Send via WhatsApp</span>
                    </Button>

                    <p className="text-center text-xs text-black/30 font-medium">
                        Your conversation is end-to-end encrypted.
                    </p>
                </form>
            </div>
        </section>
    );
}
