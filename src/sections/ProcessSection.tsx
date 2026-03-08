"use client";

import Image from "next/image";

const steps = [
    {
        num: "01",
        title: "Free Consultation",
        description: "We analyze your energy consumption and property to determine the best solar solution.",
        image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop",
    },
    {
        num: "02",
        title: "Custom System Design",
        description: "Our engineers design a solar system optimized for maximum efficiency.",
        image: "/sikwe-scarter-lDnsJtjCeGg-unsplash.jpg",
    },
    {
        num: "03",
        title: "Professional Installation",
        description: "Our trained installers handle the entire setup quickly and safely.",
        image: "/i2.jpg",
    },
    {
        num: "04",
        title: "Monitoring & Support",
        description: "We ensure your system runs efficiently for years to come.",
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop",
    },
];

export function ProcessSection() {
    return (
        <section className="bg-zinc-50 pb-32 pt-24 px-6 lg:px-8 relative">
            <div className="mx-auto max-w-5xl">

                <div className="text-center mb-16 md:mb-24 relative z-10">
                    <p className="text-sm font-bold tracking-wider text-orange-500 uppercase mb-4">How It Works</p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black uppercase">
                        Our Process
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-black/10 rounded-full" />
                </div>

                <div className="flex flex-col gap-0 md:gap-4 relative pb-10 md:pb-0">
                    {steps.map((step, index) => {
                        // Calculate top offset for the sticky effect to stack them
                        const topOffset = `calc(100px + ${index * 2}rem)`;

                        return (
                            <div
                                key={index}
                                className="sticky flex flex-col md:flex-row items-center justify-between w-full h-[60vh] md:h-[50vh] min-h-[400px] mb-8 md:mb-0 rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-200/50"
                                style={{ top: topOffset }}
                            >
                                {/* Left Content Area (Number and Image) */}
                                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-gray-100/50 group">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 mix-blend-multiply md:mix-blend-normal md:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Giant Number Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center md:justify-end md:-mr-16 pointer-events-none z-10 overflow-hidden md:overflow-visible">
                                        <span className="text-[12rem] md:text-[min(24vw,300px)] font-bold text-white/90 drop-shadow-2xl leading-none tracking-tighter mix-blend-overlay">
                                            {step.num}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Content Area (Text) */}
                                <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-transparent z-20">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
