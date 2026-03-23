"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_LINK =
    "https://wa.me/94765548544?text=Hi%20Adya%2C%20I%27d%20like%20a%20free%20health%20assessment.";

export function AdyaHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Subtle green gradient — positioned, not filling */}
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#00674F]/[0.07] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10 py-16 md:py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-[#00674F] text-sm font-bold uppercase tracking-[0.2em] mb-8">
                                Now accepting consultations
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-black font-[family-name:var(--font-manrope)]"
                        >
                            Your health
                            <br />
                            shouldn&apos;t be
                            <br />
                            a <span className="text-[#00674F]">secret.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-black/50 text-lg md:text-xl max-w-lg mt-8 leading-relaxed font-medium"
                        >
                            Private, expert care for PCOS, periods, and hair loss.
                            From your home in Sri Lanka.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-12"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="h-14 sm:h-12 px-8 rounded-full text-base font-bold bg-[#00674F] text-white hover:bg-[#00674F]/90 shadow-lg shadow-[#00674F]/20 relative overflow-hidden group"
                            >
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                    <span className="relative z-20">Get My Free Assessment</span>
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 sm:h-12 px-8 rounded-full text-base font-semibold border-black/10 text-black hover:bg-black/[0.03]"
                                asChild
                            >
                                <a href="#products">See Treatments ↓</a>
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-black/30 text-xs uppercase tracking-[0.15em] font-semibold mt-16 text-center lg:text-left"
                        >
                            SLMC-registered &middot; 100% private &middot; Discreet delivery
                        </motion.p>
                    </div>

                    {/* Right/Bottom: Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="w-full lg:w-1/2 relative h-[450px] sm:h-[600px] lg:h-[750px] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://res.cloudinary.com/ddzotdvev/image/upload/v1774289804/Gemini_Generated_Image_9bdoyt9bdoyt9bdo_goek0i.png"
                            alt="Adya Telehealth for Women"
                            fill
                            unoptimized
                            className="object-cover object-top"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
