import { AdyaHero } from "@/components/adya/AdyaHero";
import { AdyaProblem } from "@/components/adya/AdyaProblem";
import { AdyaAdamContext } from "@/components/adya/AdyaAdamContext";
import { AdyaHowItWorks } from "@/components/adya/AdyaHowItWorks";
import { AdyaProducts } from "@/components/adya/AdyaProducts";
import { AdyaLeadCapture } from "@/components/adya/AdyaLeadCapture";
import { AdyaFAQ } from "@/components/adya/AdyaFAQ";
import { AdyaCTA } from "@/components/adya/AdyaCTA";

export default function AdyaPage() {
    return (
        <div className="flex flex-col gap-0">
            <AdyaHero />
            <AdyaProducts />
            <AdyaProblem />
            <AdyaAdamContext />
            <AdyaHowItWorks />
            <AdyaLeadCapture />
            <AdyaFAQ />
            <AdyaCTA />
        </div>
    );
}
