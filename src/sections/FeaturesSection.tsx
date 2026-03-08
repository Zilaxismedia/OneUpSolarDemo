"use client";

import { Badge } from "@/components/ui/badge";
import { Coins, Zap, TrendingUp, Leaf } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const features = [
    {
        title: "Save Money",
        description: "Solar systems can significantly reduce your monthly electricity bills.",
        icon: <Coins className="w-8 h-8 text-white mb-4" />,
        offset: false,
    },
    {
        title: "Energy Independence",
        description: "Generate your own power and reduce reliance on traditional utilities.",
        icon: <Zap className="w-8 h-8 text-white mb-4" />,
        offset: true,
    },
    {
        title: "Increase Property Value",
        description: "Homes with solar systems often have higher resale value.",
        icon: <TrendingUp className="w-8 h-8 text-white mb-4" />,
        offset: false,
    },
    {
        title: "Environment Friendly",
        description: "Reduce your carbon footprint and support clean energy.",
        icon: <Leaf className="w-8 h-8 text-white mb-4" />,
        offset: true,
    },
];

export function FeaturesSection() {
    return (
        <section className="relative min-h-screen py-24 sm:py-32 px-6 lg:px-8 bg-[url('/sec2.jpg')] bg-cover bg-center overflow-hidden">
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center">

                {/* Top Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 lg:mb-32">

                    <FadeIn direction="down" className="max-w-xl">
                        <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 border-white/20 text-white bg-white/10 backdrop-blur-md mb-8">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white inline-block"></span>
                            Features
                            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-white inline-block"></span>
                        </Badge>

                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                            Why Go Solar? <br />
                            <span className="text-white/80">Real Impact.</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2} className="max-w-md lg:text-right flex flex-col lg:items-end gap-6">
                        <p className="text-white/80 text-lg leading-relaxed">
                            Experience cutting-edge features that ensure consistent energy production and long-lasting performance.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors self-start lg:self-end">
                            Learn More
                        </button>
                    </FadeIn>

                </div>

                {/* Feature Cards Grid */}
                <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {features.map((feature, index) => (
                        <StaggerItem key={index} direction="up">
                            <div
                                className={`relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 md:p-10 flex flex-col justify-end min-h-[320px] transition-transform duration-500 hover:-translate-y-2
                     ${feature.offset ? 'lg:translate-y-16' : ''}
                   `}
                            >
                                <div className="mt-auto">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
