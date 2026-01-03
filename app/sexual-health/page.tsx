"use client";

import { Button } from "@/components/ui/button";
import { Shield, Lock, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function SexualHealthPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center justify-center pt-24 pb-12 px-4 md:px-6">
                <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-10 md:pr-12">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-[family-name:var(--font-manrope)] text-neutral-900 leading-[1.1]">
                                The hardest part is saying it <span className="text-primary/90">out loud.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-neutral-600 font-[family-name:var(--font-manrope)] max-w-lg leading-relaxed">
                                Sexual health challenges are common, but often silenced. We’ve built a judgment-free space to get expert care from licensed physicians—privately, from your own home.
                            </p>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex flex-col gap-5 border-l-2 border-primary/10 pl-6">
                            <div className="space-y-1">
                                <h3 className="font-semibold text-neutral-900">It happens to more men than you think.</h3>
                                <p className="text-sm text-neutral-500">You are not alone in this journey.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-neutral-900">No waiting rooms. No judgment.</h3>
                                <p className="text-sm text-neutral-500">Skip the awkward in-person visits.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-neutral-900">Your privacy is our practice.</h3>
                                <p className="text-sm text-neutral-500">100% confidential and discreet delivery.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-neutral-900 text-white hover:bg-neutral-800 relative overflow-hidden w-full md:w-auto shadow-xl shadow-neutral-200">
                                <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                                <span className="relative z-20">Speak to a Doctor (Privately)</span>
                            </Button>
                            <p className="mt-4 text-sm text-neutral-400 font-medium">
                                Start your assessment • Takes 2 mins
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative h-[300px] md:h-[600px] w-full bg-neutral-100 rounded-[1.25rem] overflow-hidden flex items-center justify-center">
                        {/* 
                            Using an image that is contemplative and solitary. 
                            An abstract mood shot or a silhouette works well for "mirroring" without being explicit.
                        */}
                        <Image
                            src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767469436/Gemini_Generated_Image_zgcy41zgcy41zgcy_pz6e9y.png"
                            alt="A moment of reflection"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
