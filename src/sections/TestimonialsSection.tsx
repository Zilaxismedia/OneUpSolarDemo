"use client";

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";

const testimonials = [
    {
        text: "Excellent solar installation service. The team was professional and helped us cut our electricity bill drastically.",
        author: "Sarah Jenkins",
        role: "Homeowner"
    },
    {
        text: "Smooth installation process and great support from start to finish.",
        author: "Michael Chen",
        role: "Business Owner"
    },
    {
        text: "Highly recommend One Up Solar for anyone considering switching to solar energy.",
        author: "Emily Rodriguez",
        role: "Homeowner"
    },
    // Duplicate for infinite scroll effect
    {
        text: "Excellent solar installation service. The team was professional and helped us cut our electricity bill drastically.",
        author: "Sarah Jenkins",
        role: "Homeowner"
    },
    {
        text: "Smooth installation process and great support from start to finish.",
        author: "Michael Chen",
        role: "Business Owner"
    },
    {
        text: "Highly recommend One Up Solar for anyone considering switching to solar energy.",
        author: "Emily Rodriguez",
        role: "Homeowner"
    },
];

export function TestimonialsSection() {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

                <FadeIn direction="down" className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 border-orange-200 text-orange-600 bg-orange-50 mb-6">
                        <Star className="w-4 h-4 fill-orange-500 text-orange-500 mr-2" />
                        Client Reviews
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                        What Our Customers Say
                    </h2>
                </FadeIn>

                {/* Scroll Container */}
                <FadeIn direction="up" delay={0.2} className="relative -mx-6 px-6 lg:-mx-8 lg:px-8 mt-12 overflow-hidden flex">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Marquee Container */}
                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
                        {/* First Track */}
                        <div className="flex gap-6 px-3">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[320px] md:w-[400px] bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                                        "{testimonial.text}"
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Track (Duplicate for seamless loop) */}
                        <div className="flex gap-6 px-3">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex-none w-[320px] md:w-[400px] bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm"
                                >
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                                        "{testimonial.text}"
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
