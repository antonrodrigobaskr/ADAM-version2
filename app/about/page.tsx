"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            {/* Main Content Container */}
            <section className="flex-1 flex items-center justify-center pt-20 pb-8 px-4 md:px-8 lg:px-12">
                <div className="container max-w-6xl mx-auto h-full flex flex-col justify-center">

                    {/* Header */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        variants={fadeInUp}
                        className="text-center mb-10 md:mb-14"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-[family-name:var(--font-manrope)] text-neutral-900 leading-tight">
                            <span className="relative inline-block overflow-hidden">
                                <span className="text-black font-[family-name:var(--font-museo-moderno)] relative z-10">ADAM</span>
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 w-full h-full" />
                            </span>
                        </h1>
                        <p className="mt-1 text-neutral-500 text-base md:text-lg max-w-xl mx-auto font-[family-name:var(--font-manrope)]">
                            Redefining men&apos;s healthcare in Sri Lanka—one conversation at a time.
                        </p>
                    </motion.div>

                    {/* Three Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

                        {/* Our Why */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            variants={fadeInUp}
                            className="group"
                        >
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h2 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 font-[family-name:var(--font-manrope)]">
                                    Our Why
                                </h2>
                                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-[family-name:var(--font-manrope)]">
                                    Men&apos;s health is often neglected—not because men don&apos;t care, but because the system makes it
                                    <span className="text-primary font-medium"> inconvenient and uncomfortable</span> to seek help.
                                    We exist to change that.
                                </p>
                            </div>
                        </motion.div>

                        {/* Our Manifesto */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            variants={fadeInUp}
                            className="group"
                        >
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h2 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 font-[family-name:var(--font-manrope)]">
                                    Our Manifesto
                                </h2>
                                <ul className="space-y-2 text-neutral-600 text-sm md:text-base font-[family-name:var(--font-manrope)]">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">•</span>
                                        <span><span className="font-semibold text-neutral-900">Privacy is sacred.</span> Your health is your business.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">•</span>
                                        <span><span className="font-semibold text-neutral-900">Science-backed care.</span> No gimmicks, only proven treatments.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">•</span>
                                        <span><span className="font-semibold text-neutral-900">Accessible to all.</span> Quality healthcare shouldn&apos;t be a luxury.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Long-term Vision */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            variants={fadeInUp}
                            className="group"
                        >
                            <div className="border-l-2 border-primary pl-5 md:pl-6">
                                <h2 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 font-[family-name:var(--font-manrope)]">
                                    Long-term Vision
                                </h2>
                                <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-[family-name:var(--font-manrope)]">
                                    To become South Asia&apos;s most trusted men&apos;s health platform—where every man has
                                    <span className="text-primary font-medium"> access to expert care</span>,
                                    without stigma, without barriers, and without compromise.
                                </p>
                            </div>
                        </motion.div>
                    </div >

                    {/* Footer CTA */}
                    < motion.div
                        initial={{ opacity: 0, y: 15 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="text-center mt-10 md:mt-14"
                    >
                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-lg border border-neutral-100 overflow-hidden font-[family-name:var(--font-manrope)] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-black/5 to-transparent z-10 w-full h-full" />
                            <span className="relative z-20 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                Start your journey with us
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </motion.div >
                </div >
            </section >
        </main >
    );
}
