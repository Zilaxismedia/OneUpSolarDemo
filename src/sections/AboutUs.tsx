"use client";

import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const text = "Powering Florida With Smarter Solar. One Up Solar is a trusted solar energy provider based in Cutler Bay, Florida.";
const words = text.split(" ");

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative whitespace-nowrap">
            <span className="opacity-20 text-black">{children}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-black">
                {children}
            </motion.span>
        </span>
    );
};

export function AboutUs() {
    const stats = [
        { value: "98%", label: "Customer satisfaction" },
        { value: "40%", label: "Faster Installation" },
        { value: "60%", label: "Lower Energy Costs" },
        { value: "25", label: "Year System Lifespan" },
    ];

    const element = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.85", "start 0.35"] // Animation plays between 85% and 35% of the viewport height
    });

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden px-6 lg:px-8 mt-[100vh] rounded-t-[3rem] relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-start gap-16 lg:gap-24 flex-col md:flex-row">

                    {/* Left Column: Label */}
                    <div className="md:w-1/4 shrink-0">
                        <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 border-gray-200">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-black inline-block"></span>
                            About Us
                            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-black inline-block"></span>
                        </Badge>
                    </div>

                    {/* Right Column: Content */}
                    <div className="md:w-3/4 max-w-4xl">
                        <h2 ref={element} className="text-4xl sm:text-5xl font-medium tracking-tight leading-[1.3]">
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = start + (1 / words.length);
                                return (
                                    <span key={i}>
                                        <Word progress={scrollYProgress} range={[start, end]}>
                                            {word}
                                        </Word>
                                        {" "}
                                    </span>
                                );
                            })}
                        </h2>

                        <div className="mt-8 text-lg text-gray-500 space-y-6">
                            <p>
                                We specialize in designing and installing efficient solar energy systems that help homeowners and businesses reduce electricity costs and embrace renewable energy.
                            </p>
                            <p>
                                Our mission is simple: make solar energy affordable, reliable, and accessible for everyone.
                            </p>
                            <p>
                                With a team of experienced technicians and energy consultants, we handle everything from solar consultation and system design to installation and maintenance.
                            </p>

                            <div className="pt-4">
                                <p className="font-semibold text-black mb-4">Why choose us?</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Custom solar system design</li>
                                    <li>Professional installation</li>
                                    <li>High-efficiency solar panels</li>
                                    <li>Long-term energy savings</li>
                                    <li>Dedicated customer support</li>
                                </ul>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                                >
                                    <span className="text-4xl sm:text-5xl font-medium text-black">
                                        {stat.value}
                                    </span>
                                    <span className="mt-2 text-sm text-gray-500">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
