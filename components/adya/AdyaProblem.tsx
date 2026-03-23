"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const conditions = [
    {
        num: "01",
        title: "PCOS & Hormones",
        problem: "\"Just lose weight.\"",
        truth: "PCOS is complex and incredibly common. It's not your fault, and it responds to proper treatment.",
    },
    {
        num: "02",
        title: "Painful Periods",
        problem: "\"It's normal, deal with it.\"",
        truth: "Heavy bleeding and extreme pain are not normal. You deserve clinical relief, not just a hot water bottle.",
    },
    {
        num: "03",
        title: "Hair Loss",
        problem: "\"It's just stress.\"",
        truth: "Thinning hair is often hormonal. It's incredibly common, rarely talked about, and treatable.",
    },
];

export function AdyaProblem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-white">
            {/* Desktop: Sticky narrative scroll */}
            <div className="container mx-auto px-6 md:px-8 py-24 hidden lg:block h-[300vh] relative">
                <div className="sticky top-0 h-screen flex items-center">
                    <div className="grid grid-cols-2 gap-24 w-full max-w-6xl mx-auto">
                        {/* Left: Sticky narrative */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-black font-[family-name:var(--font-manrope)] mb-8">
                                We know how exhausting it is to be{" "}
                                <span className="text-[#00674F]">dismissed.</span>
                            </h2>
                            <p className="text-lg text-black/50 leading-relaxed font-medium">
                                Asking for help shouldn&apos;t feel shameful. Whether it&apos;s
                                unpredictable periods, sudden hair loss, or struggling
                                with PCOS — we&apos;re here to listen, diagnose, and treat.
                            </p>
                        </div>

                        {/* Right: Scrolling cards */}
                        <div className="relative h-full flex items-center justify-center">
                            {conditions.map((item, i) => {
                                const start = i / conditions.length;
                                const end = (i + 1) / conditions.length;
                                const mid = (start + end) / 2;

                                const opacity = useTransform(
                                    scrollYProgress,
                                    [start, start + 0.05, mid, end - 0.05, end],
                                    [0, 1, 1, 1, 0]
                                );
                                const y = useTransform(
                                    scrollYProgress,
                                    [start, mid, end],
                                    [40, 0, -40]
                                );

                                return (
                                    <motion.div
                                        key={item.num}
                                        style={{ opacity, y }}
                                        className="absolute w-full max-w-md"
                                    >
                                        <span className="text-[6rem] font-bold text-black/[0.04] leading-none block font-[family-name:var(--font-manrope)]">
                                            {item.num}
                                        </span>
                                        <h3 className="text-2xl font-bold text-black -mt-8 mb-6">
                                            {item.title}
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="py-4 border-l-2 border-black/10 pl-6">
                                                <p className="text-xs uppercase tracking-[0.15em] font-bold text-black/30 mb-1">What you hear</p>
                                                <p className="text-lg font-semibold text-black/70 italic">{item.problem}</p>
                                            </div>
                                            <div className="py-4 border-l-2 border-[#00674F] pl-6">
                                                <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#00674F] mb-1">The truth</p>
                                                <p className="text-base font-medium text-black/70">{item.truth}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile: Stacked editorial blocks */}
            <div className="container mx-auto px-6 py-16 lg:hidden">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.1] text-black font-[family-name:var(--font-manrope)] mb-6">
                        We know how exhausting it is to be{" "}
                        <span className="text-[#00674F]">dismissed.</span>
                    </h2>
                    <p className="text-base text-black/50 font-medium leading-relaxed">
                        Asking for help shouldn&apos;t feel shameful. We&apos;re here to
                        listen, diagnose, and treat.
                    </p>
                </div>

                <div className="space-y-0">
                    {conditions.map((item, i) => (
                        <div key={item.num} className={`py-10 ${i < conditions.length - 1 ? "border-b border-black/5" : ""}`}>
                            <span className="text-5xl font-bold text-black/[0.05] leading-none block font-[family-name:var(--font-manrope)]">
                                {item.num}
                            </span>
                            <h3 className="text-xl font-bold text-black -mt-4 mb-5">
                                {item.title}
                            </h3>
                            <div className="space-y-3">
                                <div className="border-l-2 border-black/10 pl-5 py-2">
                                    <p className="text-xs uppercase tracking-[0.15em] font-bold text-black/30 mb-1">What you hear</p>
                                    <p className="font-semibold text-black/60 italic">{item.problem}</p>
                                </div>
                                <div className="border-l-2 border-[#00674F] pl-5 py-2">
                                    <p className="text-xs uppercase tracking-[0.15em] font-bold text-[#00674F] mb-1">The truth</p>
                                    <p className="font-medium text-black/60 text-sm">{item.truth}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
