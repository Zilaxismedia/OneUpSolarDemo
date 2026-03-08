"use client";

import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const faqs = [
    {
        question: "How much can I save with solar?",
        answer: "Savings depend on your energy usage and system size, but many homeowners reduce their electricity bills by 60–90%.",
    },
    {
        question: "How long does installation take?",
        answer: "Most installations are completed within 1–3 days after permits are approved.",
    },
    {
        question: "Do solar panels work during cloudy days?",
        answer: "Yes. Solar panels still generate power even on cloudy days, though efficiency may vary.",
    },
    {
        question: "Are there financing options available?",
        answer: "Yes, we offer multiple financing and payment options to make solar affordable.",
    },
];

export function FAQSection() {
    return (
        <section className="bg-[#f8f8f8] py-24 sm:py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-4xl relative">

                {/* Floating Badge (matching reference) */}
                <FadeIn direction="right" className="absolute top-0 left-0 hidden lg:block">
                    <Badge variant="outline" className="bg-white px-4 py-1.5 rounded-full border-gray-200 text-gray-700 text-sm font-medium shadow-sm">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400 inline-block"></span>
                        FAQ
                        <span className="ml-2 h-1.5 w-1.5 rounded-full bg-gray-400 inline-block"></span>
                    </Badge>
                </FadeIn>

                {/* Header Area */}
                <FadeIn direction="down" className="text-center mb-16 max-w-2xl mx-auto">
                    {/* Mobile Badge */}
                    <Badge variant="outline" className="lg:hidden bg-white px-4 py-1.5 rounded-full border-gray-200 text-gray-700 text-sm font-medium shadow-sm mb-8">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400 inline-block"></span>
                        FAQ
                        <span className="ml-2 h-1.5 w-1.5 rounded-full bg-gray-400 inline-block"></span>
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Your Solar Questions, Answered Clearly
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
                        Find clear answers to the most common questions about switching to solar energy. We simplify the details so you can make informed, confident decisions.
                    </p>
                </FadeIn>

                {/* Accordion List */}
                <StaggerContainer staggerChildren={0.15} className="space-y-4 mb-20">
                    <Accordion className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <StaggerItem key={index} direction="up">
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-white border-0 rounded-2xl px-6 md:px-8 py-2 md:py-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] data-open:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all"
                                >
                                    <AccordionTrigger className="hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden">
                                        <span className="text-left text-lg md:text-xl font-medium text-gray-900 pr-8">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-gray-600 pt-2 pb-6 max-w-3xl leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </StaggerItem>
                        ))}
                    </Accordion>
                </StaggerContainer>

                {/* Bottom CTA */}
                <FadeIn direction="up" delay={0.4} className="text-center">
                    <p className="text-gray-500 mb-4">Need more help?</p>
                    <button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 text-sm font-medium transition-colors">
                        Contact Us
                    </button>
                </FadeIn>

            </div>
        </section>
    );
}
