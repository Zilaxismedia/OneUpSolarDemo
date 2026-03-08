"use client";

import { SavingsCalculator } from "@/components/SavingsCalculator";
import { FadeIn } from "@/components/FadeIn";

export function CalculatorSection() {
    return (
        <section className="bg-zinc-50 py-24 sm:py-32 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-medium tracking-tight text-black sm:text-5xl">
                        See How Much You Could Save
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Use our interactive calculator to estimate your potential savings and the ideal solar system size for your home.
                    </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                    <SavingsCalculator />
                </FadeIn>
            </div>
        </section>
    );
}
