"use client";

import { useState } from "react";
import { ArrowRight, BadgeDollarSign, Zap } from "lucide-react";

export function SavingsCalculator() {
    const [bill, setBill] = useState(150);

    // Simplified logic for estimates
    const yearlySavings = Math.round(bill * 12 * 0.95);
    const systemSize = (bill / 100) * 5; // roughly 5kW per $100 bill in FL
    const roundedSize = systemSize.toFixed(1);

    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 max-w-xl mx-auto flex flex-col items-center">

            <div className="text-center mb-10 w-full">
                <h3 className="text-sm font-semibold tracking-wider text-orange-500 uppercase mb-3">Calculate Savings</h3>
                <h2 className="text-3xl font-medium text-black">What is your average monthly bill?</h2>
            </div>

            <div className="w-full mb-12">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-5xl font-medium text-black tracking-tight">${bill}</span>
                    <span className="text-gray-400 font-medium mb-1">/ mo</span>
                </div>
                <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2"
                />
                <div className="flex justify-between text-xs font-medium text-gray-400 mt-2 uppercase tracking-wide">
                    <span>$50</span>
                    <span>$500+</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mb-10">
                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start ring-1 ring-gray-100/50 transition hover:bg-gray-100/50">
                    <div className="flex items-center gap-2 mb-4">
                        <BadgeDollarSign className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-500">Yearly Savings</span>
                    </div>
                    <span className="text-3xl font-medium text-black tracking-tight">${yearlySavings.toLocaleString()}</span>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start ring-1 ring-gray-100/50 transition hover:bg-gray-100/50">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-medium text-gray-500">System Size</span>
                    </div>
                    <span className="text-3xl font-medium text-black tracking-tight">{roundedSize} <span className="text-xl">kW</span></span>
                </div>
            </div>

            <button className="w-full bg-black text-white rounded-full py-4 px-8 font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 group">
                Get Solar Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

        </div>
    );
}
