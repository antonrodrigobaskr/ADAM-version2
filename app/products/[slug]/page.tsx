"use client";

import * as React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, ChevronDown, Plus, Minus } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Science } from "@/components/landing/Science";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Comparison } from "@/components/landing/Comparison";

// --- Mock Data ---
const PRODUCT_DATA = {
    id: "hair-regrowth-spray",
    title: "Compounded Minoxidil 5% & Finasteride 0.25% Spray",
    rating: 4.8,
    reviews: 83,
    description: "A powerful 2-in-1 prescription-strength formula that combines Minoxidil and Finasteride to regrow hair and prevent further loss. Compounded specifically for effective topical absorption.",
    features: [
        "Helps regrow hair and prevent loss",
        "Clinical strength ingredients",
        "Easy-to-use topical spray",
        "Doctor prescribed, pharmacy compounded"
    ],
    price: 5960,
    unit: "60ml / 2 FL OZ",
    images: [
        "https://res.cloudinary.com/ddzotdvev/image/upload/v1767485457/ADAM_18_sfh6y5.jpg",
    ],
    purchaseOptions: [
        {
            id: "one-time",
            label: "One-time purchase",
            subLabel: "2 month supply",
            price: 5960,
            save: null
        },
        {
            id: "subscribe-3",
            label: "Subscribe & Save",
            subLabel: "Delivered every 3 months",
            price: 4960,
            save: "Save Rs 3,000/yr"
        }
    ]
};

export default function ProductPage() {
    const params = useParams();
    // In a real app, use params.slug to fetch data.
    // const { slug } = params;

    const [selectedOption, setSelectedOption] = React.useState("one-time");
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => {
            setCurrentSlide(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    const scrollToSlide = (index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] pt-20 md:pt-32 pb-20 font-[family-name:var(--font-manrope)]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Gallery */}
                    <div className="flex flex-col gap-6">
                        {/* Mobile/Desktop Main Image Carousel */}
                        <div className="relative rounded-[2rem] overflow-hidden bg-[#EAEAEA] aspect-square lg:aspect-[4/5]" ref={emblaRef}>
                            <div className="flex h-full touch-pan-y">
                                {PRODUCT_DATA.images.map((src, index) => (
                                    <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                                        <Image
                                            src={src}
                                            alt={`${PRODUCT_DATA.title} - View ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Dots */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {PRODUCT_DATA.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-black w-6" : "bg-black/30"}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Desktop Thumbnail strip (Hidden on mobile) */}
                        <div className="hidden lg:flex gap-4">
                            {PRODUCT_DATA.images.map((src, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSlide(index)}
                                    className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${currentSlide === index ? "border-black" : "border-transparent"}`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="inline-block px-3 py-1 bg-[#F1EBE3] rounded-full text-xs font-semibold text-[#8B6E5B] mb-4">
                                Hair Regrowth Treatment
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight">
                            {PRODUCT_DATA.title}
                        </h1>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-0.5 text-[#FDB022]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground font-medium underline decoration-muted-foreground/50 underline-offset-4">
                                {PRODUCT_DATA.reviews} reviews
                            </span>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {PRODUCT_DATA.description}
                        </p>

                        {/* Purchase Options */}
                        <div className="space-y-4 mb-8">
                            {PRODUCT_DATA.purchaseOptions.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`relative border rounded-2xl p-5 cursor-pointer transition-all ${selectedOption === option.id
                                        ? "border-black bg-white ring-1 ring-black/5 shadow-sm"
                                        : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === option.id ? "border-black" : "border-gray-300"
                                                }`}>
                                                {selectedOption === option.id && (
                                                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-black">{option.label}</div>
                                                {option.save && (
                                                    <span className="text-xs font-bold text-[#16A34A]">{option.save}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-lg">Rs {option.price.toLocaleString()}</div>
                                            {option.subLabel && (
                                                <div className="text-xs text-muted-foreground">{option.subLabel}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add to Cart Button */}
                        <div className="sticky bottom-4 md:static z-20">
                            <Button className="w-full bg-[#303030] hover:bg-black text-white h-14 rounded-full font-bold text-lg relative overflow-hidden group shadow-xl md:shadow-none">
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">
                                    Add to Cart — Rs {PRODUCT_DATA.purchaseOptions.find(o => o.id === selectedOption)?.price.toLocaleString()}
                                </span>
                            </Button>
                        </div>

                        {/* Features List */}
                        <div className="mt-12 border-t pt-8">
                            <h3 className="font-bold text-lg mb-4">Meet the treatment</h3>
                            <ul className="space-y-3">
                                {PRODUCT_DATA.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-black" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Accordions */}
                        <div className="mt-8 border-t">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="details">
                                    <AccordionTrigger className="text-base font-semibold">Details</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Contains 5% Minoxidil and 0.25% Finasteride in a 60ml solution. Designed for daily topical application.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="shipping">
                                    <AccordionTrigger className="text-base font-semibold">Shipping & Returns</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Free discreet shipping on all prescription orders. Due to pharmacy regulations, we cannot accept returns on prescription medications.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="apply">
                                    <AccordionTrigger className="text-base font-semibold">How to apply</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Apply 1ml (approx. 5-6 sprays) directly to the affected area of the scalp twice daily. Massage gently into the scalp with fingers. Wash hands after use.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>
            <Science />
            <BeforeAfter />
            <Comparison />
        </div>
    );
}
