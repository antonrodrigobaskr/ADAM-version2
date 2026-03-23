"use client";

export function AdyaAdamContext() {
    return (
        <section className="py-16 md:py-20 bg-white border-t border-black/5">
            <div className="container mx-auto px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[#00674F] text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        Built on a proven foundation
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-black font-[family-name:var(--font-manrope)] mb-8">
                        The sister clinic to Sri Lanka&apos;s newest digital health platform.
                    </h2>

                    <p className="text-lg text-black/50 font-medium leading-relaxed max-w-2xl mb-16">
                        Adya is built by the doctors behind ADAM — we&apos;ve already helped 100s of patients access discreet, online healthcare. Now we&apos;re bringing that same standard of private, expert care to women.
                    </p>

                    {/* Stats as editorial inline numbers with vertical dividers */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0">
                        <div className="sm:pr-12">
                            <span className="text-5xl md:text-6xl font-bold text-black tracking-tight font-[family-name:var(--font-manrope)]">
                                100+
                            </span>
                            <p className="text-sm text-black/40 font-medium mt-2">Patients treated</p>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-black/10" />

                        <div className="sm:px-12">
                            <span className="text-5xl md:text-6xl font-bold text-black tracking-tight font-[family-name:var(--font-manrope)]">
                                100%
                            </span>
                            <p className="text-sm text-black/40 font-medium mt-2">Online & private</p>
                        </div>

                        <div className="hidden sm:block w-px h-16 bg-black/10" />

                        <div className="sm:pl-12">
                            <span className="text-5xl md:text-6xl font-bold text-[#00674F] tracking-tight font-[family-name:var(--font-manrope)]">
                                24hr
                            </span>
                            <p className="text-sm text-black/40 font-medium mt-2">Delivery nationwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
