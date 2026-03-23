"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is this really private?",
        answer: "Yes. From your first message to your treatment delivery, everything is strictly confidential. Your consultation happens from your phone, and packages arrive in unbranded, discreet boxes.",
    },
    {
        question: "Are the doctors female?",
        answer: "We have deeply empathetic, SLMC-registered doctors of all genders who will take the time to truly listen and understand your concerns. You will always be treated with absolute respect and without judgment.",
    },
    {
        question: "Do I need a prescription?",
        answer: "Our doctors will prescribe the right treatment during your online consultation. You don't need an existing prescription to get started.",
    },
    {
        question: "How does delivery work?",
        answer: "Once prescribed, your medication is dispensed by our partner pharmacy and delivered directly to your doorstep anywhere in Sri Lanka within 24-48 hours.",
    },
    {
        question: "What if I'm not sure what's wrong?",
        answer: "That's exactly what we're here for. Start a free assessment on WhatsApp, tell us your symptoms, and our medical team will guide you on the next steps.",
    },
    {
        question: "How much does a consultation cost?",
        answer: "The initial symptom assessment via WhatsApp is completely free. If you are matched with a specialist, the video or chat consultation costs Rs 1,499.",
    },
];

export function AdyaFAQ() {
    return (
        <section className="py-16 md:py-20 bg-background border-t border-border" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-manrope)] tracking-tight text-foreground mb-4">
                        Common questions
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium">
                        Everything you need to know about getting treated with Adya.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-white border border-border rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
                        >
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 font-medium">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
