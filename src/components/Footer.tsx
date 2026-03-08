"use client";

import { Mail, Phone, ArrowUpRight, Instagram, Linkedin, Facebook, Twitter, Sun } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export function Footer() {
    return (
        <footer className="bg-white pt-24 pb-8 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Top CTA Banner */}
                <FadeIn direction="up" className="bg-[url('/Hero.png')] bg-cover bg-center rounded-[2rem] p-8 md:p-16 mb-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                    <div className="relative z-10 max-w-xl text-white w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            Get Your Free Solar Quote Today
                        </h2>
                        <p className="text-lg md:text-xl text-white/90">
                            Ready to switch to clean energy? Contact One Up Solar today and discover how solar power can reduce your energy costs.
                        </p>
                    </div>

                    {/* Glassmorphic Contact Card */}
                    <div className="relative z-10 w-full md:w-auto bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-8 shrink-0 shadow-2xl flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <a href="tel:+11234567890" className="flex items-center gap-3 text-white hover:text-orange-300 transition-colors">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">(123) 456-7890</span>
                            </a>
                            <a href="mailto:hello@oneupsolar.com" className="flex items-center gap-3 text-white hover:text-orange-300 transition-colors">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">hello@oneupsolar.com</span>
                            </a>
                        </div>

                        <div className="w-full h-px bg-white/20" />

                        <button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-4 px-6 font-medium flex items-center justify-between transition-colors group">
                            <span>Fill out the form</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </FadeIn>

                {/* Footer Links & Info */}
                <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <StaggerItem direction="up" className="lg:col-span-1">
                        <div className="flex items-center gap-2 text-xl font-bold mb-6 text-black">
                            <Sun className="h-6 w-6 text-orange-500" />
                            <span className="tracking-tight">One Up Solar</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            One Up Solar is a trusted solar energy provider based in Cutler Bay, Florida.
                        </p>
                    </StaggerItem>

                    {/* Links Columns */}
                    <StaggerItem direction="up">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-black transition-colors">Residential Solar</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Commercial Solar</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Battery Backup</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">System Maintenance</a></li>
                        </ul>
                    </StaggerItem>

                    <StaggerItem direction="up">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Our Process</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                        </ul>
                    </StaggerItem>

                    <StaggerItem direction="up">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li><a href="#" className="hover:text-black transition-colors">Solar Calculator</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Financing Guide</a></li>
                        </ul>
                    </StaggerItem>

                    {/* Socials Column */}
                    <StaggerItem direction="up">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Follow Us</h4>
                        <div className="flex items-center gap-4 text-gray-500">
                            <a href="#" className="hover:text-black transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-black transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </StaggerItem>

                </StaggerContainer>

                {/* Bottom Bar */}
                <FadeIn direction="up" delay={0.4} className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 text-sm text-gray-500 font-medium">
                    <p>Copyright © {new Date().getFullYear()} One Up Solar. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-black transition-colors underline underline-offset-4">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors underline underline-offset-4">Terms of Use</a>
                    </div>
                </FadeIn>

            </div>
        </footer>
    );
}
