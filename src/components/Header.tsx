"use client";

import Link from 'next/link';
import { Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Articles', href: '#' },
    { name: 'FAQ', href: '#' },
];

export function Header() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 w-full"
        >
            <div className="flex items-center gap-2 text-white font-semibold text-2xl">
                <Sun className="h-8 w-8" />
                <span>One Up Solar</span>
            </div>

            <nav className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${link.active
                            ? 'bg-white text-black'
                            : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Contact Us
            </button>
        </motion.header>
    );
}
