"use client";

import { useRef } from "react";
import { Brain, Trophy, TrendingUp, Zap, Play, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const details = [
    {
        icon: <Brain className="h-6 w-6" />,
        title: "AI-Powered Practice",
        description: "Generate endlessly new challenges tailored to your skill level.",
        style: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
        icon: <Trophy className="h-6 w-6" />,
        title: "Live Competitions",
        description: "Compete in real-time with developers around the world.",
        style: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    },
    {
        icon: <TrendingUp className="h-6 w-6" />,
        title: "Real-time Analytics",
        description: "Get detailed performance metrics and visual breakdowns.",
        style: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Code Optimization",
        description: "Automatically detect inefficiencies and logical errors.",
        style: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
];

export const CompetitionsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(".comp-header > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        )
            .fromTo(".comp-card-left",
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(".comp-center",
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
                "-=0.6"
            )
            .fromTo(".comp-card-right",
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            );

        // Hover effect for center video
        const videoEl = sectionRef.current?.querySelector(".comp-center");
        if (videoEl) {
            videoEl.addEventListener("mouseenter", () => {
                gsap.to(".play-icon", { scale: 1.2, duration: 0.3, ease: "back.out" });
            });
            videoEl.addEventListener("mouseleave", () => {
                gsap.to(".play-icon", { scale: 1, duration: 0.3 });
            });
        }

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="ai-solution" className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="comp-header mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <h2 className="text-4xl font-bold text-white">
                        Build for Developers <br />
                        Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Demand more</span>
                    </h2>
                    <div className="max-w-sm text-right">
                        <p className="text-gray-400 mb-4 text-sm">
                            Experience the future of coding with tools designed for speed and scale.
                        </p>
                        <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 hover:scale-105 active:scale-95 duration-200 flex items-center ml-auto">
                            Explore All <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-3">
                        <FeatureCard data={details[0]!} className="comp-card-left" />
                        <FeatureCard data={details[1]!} className="comp-card-left" />
                    </div>

                    {/* Center Column - Video/Demo Placeholder */}
                    <div className="comp-center relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] lg:col-span-6 shadow-2xl shadow-purple-900/10 group cursor-pointer">
                        <video
                            src="/CODIGO_v_Demo_Video_Generation.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-0 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="play-icon mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-transform">
                                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                                </div>
                                <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">Watch Demo</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:col-span-3">
                        <FeatureCard data={details[2]!} className="comp-card-right" />
                        <FeatureCard data={details[3]!} className="comp-card-right" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ data, className }: { data: typeof details[0], className?: string }) => (
    <div
        className={`group rounded-2xl border border-white/10 bg-[#111] p-6 transition-all hover:bg-[#161616] hover:border-white/20 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center ${className}`}
    >
        <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${data.style} shadow-lg shadow-white/5 transition-transform group-hover:scale-110 mx-auto`}>
            {data.icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-white">{data.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
            {data.description}
        </p>
    </div>
);
