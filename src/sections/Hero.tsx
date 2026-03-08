"use client";

import { ArrowLeft, ArrowRight, Coins, ShieldCheck, Smartphone } from 'lucide-react';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';

const features = [
    {
        icon: <Coins className="h-6 w-6 text-white" />,
        title: 'Lower Your Monthly Bills',
        description: 'Cut energy costs with high-yield solar panel systems.',
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-white" />,
        title: 'Long-Term Durability',
        description: '25-year weather-resistant warranty.',
    },
    {
        icon: <Smartphone className="h-6 w-6 text-white" />,
        title: 'Smart Energy Monitoring',
        description: 'Track energy production from your smartphone.',
    },
];

export function Hero() {
    return (
        <section className="sticky top-0 -z-10 min-h-screen w-full bg-[url('/Hero.png')] bg-cover bg-center flex flex-col pt-32 pb-12 px-8 overflow-hidden">
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            <Header />

            <div className="relative z-10 flex flex-col justify-between flex-1 w-full h-full max-w-7xl mx-auto">
                {/* Top Content Area */}
                <div className="mt-8 md:mt-16 w-full">
                    <FadeIn direction="up" delay={0.2} duration={0.8}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight">
                            Clean Energy<br />that Pays for Itself
                        </h1>
                    </FadeIn>
                </div>

                {/* Bottom Content Area */}
                <div className="mt-auto pt-16 flex flex-col lg:flex-row justify-between items-end gap-12 w-full">

                    {/* Left Column: Features */}
                    <StaggerContainer delay={0.4} staggerChildren={0.15} className="flex flex-col gap-8 max-w-xl">
                        {features.map((feature, idx) => (
                            <StaggerItem key={idx} direction="left">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-white/80 mt-1 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Right Column: Glass Card only */}
                    <div>
                        <FadeIn direction="right" delay={0.6} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-3 flex flex-col sm:flex-row max-w-md w-full gap-4 relative z-20">
                            <div className="w-full sm:w-1/2 relative h-32 sm:h-auto rounded-2xl overflow-hidden shrink-0">
                                <Image src="/Hero.png" alt="Solar Panels" fill className="object-cover" />
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col justify-center py-2 pr-2">
                                <h4 className="text-white font-semibold leading-tight text-base">How Solar Cuts Your Bills</h4>
                                <p className="text-white/80 text-xs mt-2 line-clamp-3">
                                    Discover how modern solar panels instantly lower monthly energy...
                                </p>
                                <div className="mt-4 w-full">
                                    <button className="w-full bg-white text-black text-xs font-semibold py-2.5 rounded-full hover:bg-gray-100 transition">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
