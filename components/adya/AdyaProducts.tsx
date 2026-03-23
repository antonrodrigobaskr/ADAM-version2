"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK =
    "https://wa.me/94765548544?text=Hi%20Adya%2C%20I%27d%20like%20to%20pre-order%20the%20Women%27s%20Hair%20Regrowth%20Spray.";

const product = {
    title: "Women's Hair Regrowth Spray",
    tagline: "Propylene glycol-free. Gentle on your scalp, strong on results.",
    features: [
        "Minoxidil 5%",
        "Saw Palmetto Extract",
        "Redensyl, Capixyl & Procapil",
        "Bisabolol & Panthenol",
        "No Propylene Glycol",
        "Alcohol-Free",
        "Non-Greasy Serum",
    ],
    price: "TBA",
    plans: "Customized",
};

export function AdyaProducts() {
    return (
        <section id="products" className="py-16 md:py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-5xl mx-auto">

                    {/* Left: Text */}
                    <div className="lg:w-1/3 lg:sticky lg:top-24 self-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-manrope)] tracking-[-0.02em] text-black"
                        >
                            Treatments tailored to{" "}
                            <span className="text-[#00674F]">your body.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-black/50 leading-relaxed font-medium"
                        >
                            Doctor-prescribed, pharmaceutical-grade. Formulated without the harsh chemicals that irritate your scalp.
                        </motion.p>
                    </div>

                    {/* Right: Product Card (ADAM-style) */}
                    <div className="lg:w-2/3 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col max-w-md mx-auto lg:mx-0"
                        >
                            {/* Card Top: Visual Area */}
                            <div className="relative bg-[#F5F5F5] rounded-[2.5rem] min-h-[380px] mb-6 overflow-hidden flex flex-col items-center justify-center">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://res.cloudinary.com/ddzotdvev/image/upload/v1774280766/Gemini_Generated_Image_p5dl62p5dl62p5dl_1_km77gc.png"
                                        alt={product.title}
                                        fill
                                        unoptimized
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="absolute bottom-6 left-6 z-10 bg-black text-white text-xs font-bold px-4 py-2 rounded-full">
                                    Rx Required
                                </div>
                            </div>

                            {/* Card Bottom: Details */}
                            <div className="border border-black/10 rounded-[2rem] p-6 bg-white relative z-10">
                                {/* Title & Tagline */}
                                <div className="mb-5">
                                    <p className="text-xs font-bold text-[#00674F] uppercase tracking-wider mb-2">
                                        {product.tagline}
                                    </p>
                                    <h3 className="text-xl font-bold text-black">{product.title}</h3>
                                </div>

                                {/* Features Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="bg-[#F2F2F2] px-3 py-1.5 rounded-full text-xs font-medium text-black flex items-center">
                                            <Plus className="w-3 h-3 mr-1" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Price Info */}
                                <div className="flex border-t border-black/5 pt-6 mb-8">
                                    <div className="w-1/2 pr-4 border-r border-black/10">
                                        <div className="text-xs text-black/40 font-semibold mb-1">Pricing</div>
                                        <div className="text-lg font-bold text-black">
                                            {product.price}
                                        </div>
                                    </div>
                                    <div className="w-1/2 pl-4">
                                        <div className="text-xs text-black/40 font-semibold mb-1">Treatment plans</div>
                                        <div className="text-lg font-medium text-black">{product.plans}</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Button
                                    asChild
                                    className="w-full bg-[#00674F] hover:bg-[#00674F]/90 text-white h-14 md:h-12 rounded-full font-bold text-base md:text-sm relative overflow-hidden group"
                                >
                                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                        <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                        <span className="relative z-20">Pre-Order</span>
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
