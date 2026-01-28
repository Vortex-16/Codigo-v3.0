"use client";

import { useRef } from "react";
import Link from "next/link";
import { CodePreview } from "./CodePreview";
import { AnimeGridBackground } from "./AnimeGridBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Reveal Text cleanly - using fromTo for stability
        tl.fromTo(".hero-content > *",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            }
        );

    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
            <AnimeGridBackground />

            <div className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content - Perfectly Aligned Left */}
                    <div className="hero-content flex flex-col justify-center text-left">
                        <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-blue-400 mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            v3.0 Now Available
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Code Smarter <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#ec4899]">
                                Not Harder.
                            </span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Experience the future of coding with our AI-powered platform.
                            Build, analyze, and compete with precision tools designed for
                            modern developers.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/signup"
                                className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                            >
                                Get Started Free
                            </Link>
                            <Link
                                href="/demo"
                                className="rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10"
                            >
                                View Demo
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-gray-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-gray-500" />
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visuals - Perfectly Aligned Right */}
                    <div className="relative flex justify-center lg:justify-end">
                        <CodePreview />
                    </div>
                </div>
            </div>
        </section>
    );
};
