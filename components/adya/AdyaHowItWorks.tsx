"use client";

import { motion } from "framer-motion";

export function AdyaHowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Quick Assessment",
            description: "Answer a few questions about your symptoms via WhatsApp. Takes 2 minutes. No app needed.",
        },
        {
            num: "02",
            title: "Doctor Match",
            description: "Get matched with an SLMC-registered specialist. Consult privately via video, call, or chat.",
        },
        {
            num: "03",
            title: "Your Treatment",
            description: "Receive a personalised plan with prescriptions and supplements — delivered discreetly to your door.",
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white" id="how-it-works">
            <div className="container mx-auto px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-black font-[family-name:var(--font-manrope)] mb-6">
                            From first message to treatment,{" "}
                            <span className="text-[#00674F]">entirely private.</span>
                        </h2>
                        <p className="text-lg text-black/50 font-medium max-w-xl">
                            We&apos;ve removed the waiting rooms and the awkward conversations.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`flex gap-8 md:gap-12 py-10 ${index < steps.length - 1 ? "border-b border-black/5" : ""}`}
                            >
                                <span className="text-5xl md:text-6xl font-bold text-[#00674F]/20 leading-none shrink-0 font-[family-name:var(--font-manrope)] w-20 md:w-24">
                                    {step.num}
                                </span>
                                <div className="pt-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-black/50 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
