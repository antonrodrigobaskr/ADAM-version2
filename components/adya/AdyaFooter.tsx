import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const WHATSAPP_LINK =
    "https://wa.me/94765548544?text=Hi%20Adya%2C%20I%27d%20like%20to%20know%20more.";

export function AdyaFooter() {
    return (
        <footer className="bg-[#1A1A1A] py-16 border-t border-black/5">
            <div className="container mx-auto px-6 md:px-8 max-w-5xl">

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-12">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <span className="font-medium text-3xl text-white tracking-tight font-[family-name:var(--font-museo-moderno)]">
                            Adya
                        </span>
                        <span className="text-sm text-white/50 font-medium mt-1">
                            Sister clinic to ADAM.
                        </span>
                    </div>

                    {/* Hims-style Cross-Promo Card */}
                    <Link href="/" className="group flex items-center justify-between bg-white rounded-2xl p-2 w-full max-w-[260px] transition-transform hover:-translate-y-1 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                                <Image
                                    src="https://res.cloudinary.com/ddzotdvev/image/upload/v1767404971/ADAM_5_cpdtkf.jpg"
                                    alt="ADAM Clinic"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col text-left justify-center pb-0.5">
                                <span className="text-black font-extrabold text-xl leading-none font-[family-name:var(--font-museo-moderno)] mt-1 tracking-tight">ADAM</span>
                                <span className="text-[#0056D2] text-[13px] font-semibold mt-1 tracking-tight leading-none">visit theadamclinic.com</span>
                            </div>
                        </div>
                        <div className="pr-3 text-black">
                            <ExternalLink className="w-[18px] h-[18px] opacity-60 group-hover:opacity-100 transition-opacity stroke-[2.5px]" />
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <p className="text-xs text-white/30 font-medium">
                        © 2026 Adya. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm font-medium text-white/70">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            WhatsApp
                        </a>
                        <a href="#faq" className="hover:text-white transition-colors">
                            FAQ
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
