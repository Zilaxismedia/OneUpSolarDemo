"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    className?: string;
    viewMargin?: string;
    staggerChildren?: number;
}

export function FadeIn({
    children,
    direction = "up",
    delay = 0,
    duration = 0.5,
    className = "",
    viewMargin = "-100px",
    staggerChildren
}: FadeInProps) {
    const directionOffset = 40;

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0,
            y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] as any, // Custom ease-out cubic
                ...(staggerChildren ? { staggerChildren } : {})
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewMargin as any }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Helper wrapper for staggered children
export function StaggerContainer({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className = "",
    viewMargin = "-100px"
}: FadeInProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewMargin as any }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        delayChildren: delay,
                        staggerChildren: staggerChildren
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child item meant to be used inside StaggerContainer
export function StaggerItem({
    children,
    direction = "up",
    duration = 0.5,
    className = ""
}: Omit<FadeInProps, "delay" | "staggerChildren" | "viewMargin">) {
    const directionOffset = 40;

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0,
            y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.21, 0.47, 0.32, 0.98] as any,
            },
        },
    };

    return (
        <motion.div variants={variants} className={className}>
            {children}
        </motion.div>
    );
}
