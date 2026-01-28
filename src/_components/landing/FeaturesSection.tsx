"use client";

import { useRef } from "react";
import { Code, Brain, TrendingUp, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    {
        icon: <Code className="h-8 w-8" />,
        title: "Write & Submit Your Code",
        description: "Practice seamlessly in our intelligent code editor with syntax highlighting.",
        style: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
        icon: <Brain className="h-8 w-8" />,
        title: "Get Real-Time AI Analysis",
        description: "Receive instant feedback on runtime, memory usage, and logic efficiency.",
        style: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Improve & Compete",
        description: "Climb the leaderboard and challenge others with your optimized solutions.",
        style: "bg-green-500/10 text-green-500 border-green-500/20",
    },
];

export const FeaturesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Add animation only for non-reduced motion preferences ideally, but simpler here
        // Use fromTo for better reliability than .from() in React strict mode
        gsap.fromTo(".feature-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo(".feature-header",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="features" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="mb-16 feature-header">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Master Coding <br />
                        with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">CodiGo</span>
                    </h2>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="max-w-xl text-gray-400">
                            Start your journey today. Smart tools for improved logic and performance.
                        </p>
                        <button className="hidden rounded-full bg-purple-600/10 px-6 py-2 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-600/20 md:block hover:scale-105 active:scale-95 duration-300 flex items-center">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-8 transition-all hover:border-white/20 hover:-translate-y-2 duration-300 hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col items-center text-center"
                        >
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border ${feature.style} shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-500 mx-auto`}>
                                {feature.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
