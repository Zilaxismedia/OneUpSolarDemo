"use client";

import { ArrowUpRight, Wrench } from "lucide-react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const services = [
    {
        title: "Residential Solar",
        description: "We help homeowners switch to solar energy and dramatically reduce monthly electricity bills.",
        image: "/b1.jpg",
        features: ["Solar panel installation", "Solar battery backup systems", "Net-metering setup", "Energy efficiency consultation"],
        benefits: ["Lower electricity bills", "Increase property value", "Protection from rising energy costs", "Clean renewable energy"],
    },
    {
        title: "Commercial Solutions",
        description: "Businesses can significantly reduce operational costs with commercial solar systems.",
        image: "/b2.jpg",
        features: ["Large scale solar installations", "System design & engineering", "Energy cost optimization", "Maintenance & monitoring"],
        benefits: ["Lower operating expenses", "Sustainable brand image", "Long term ROI", "Tax incentives & rebates"],
    }
];

export function ServicesSection() {
    return (
        <section className="bg-[#f2efe9] py-24 sm:py-32 px-6 lg:px-8 relative overflow-hidden">
            <div className="mx-auto max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                    <FadeIn direction="down" className="flex flex-col items-center">
                        <div className="w-16 h-1 bg-orange-500 mb-8 rounded-full" />
                        <div className="overflow-hidden">
                            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#3d3935] leading-[1.1] tracking-tight">
                                Powering your world,<br />
                                <span className="text-black block mt-2">sustainably.</span>
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2} className="mt-12 max-w-lg lg:text-center flex flex-col items-center gap-8">
                        <p className="text-[#595551] text-lg leading-relaxed">
                            From design to installation, we provide quality energy solutions tailored to your needs.
                        </p>
                        <button className="inline-flex items-center gap-4 bg-[#dac8b6] hover:bg-[#cfb9a3] text-[#3d3935] px-6 py-3 rounded-full font-medium transition-colors group border border-[#cfb9a3]">
                            See our services
                            <div className="bg-[#3d3935] text-[#dac8b6] rounded-full p-2 group-hover:bg-black transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>
                    </FadeIn>
                </div>

                {/* Services Grid (inspired by the vertical card design) */}
                <StaggerContainer staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <StaggerItem key={index} direction={index % 2 === 0 ? "left" : "right"}>
                            <div className="group relative rounded-[2rem] overflow-hidden h-[600px] lg:h-[700px] flex flex-col justify-end bg-gray-900">
                                {/* Background Image with hover zoom */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60 mix-blend-overlay"
                                />

                                {/* Gradient overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                                {/* Floating Arrow Top Right */}
                                <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>

                                {/* Content Box */}
                                <div className="relative z-10 p-8 lg:p-12 pb-10 transition-transform duration-500">
                                    <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
                                        {service.description}
                                    </p>

                                    {/* Lists that reveal/expand gently */}
                                    <div className="grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
                                        <div>
                                            <p className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Includes</p>
                                            <ul className="space-y-2 text-white/70 text-sm">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-2 text-orange-400 mt-0.5">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Benefits</p>
                                            <ul className="space-y-2 text-white/70 text-sm">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-2 text-[#4ade80] mt-0.5">✓</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </section>
    );
}
