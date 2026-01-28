"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Zap, Terminal } from "lucide-react";

export const CodePreview = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const toastRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial Appearance
        tl.from(containerRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
        })
            .from(".window-controls div", {
                scale: 0,
                stagger: 0.1,
                ease: "back.out(1.7)",
                duration: 0.5
            }, "-=0.8")
            .from(codeRef.current?.children || [], {
                x: -20,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.6");

        // Floating Animation (Continuous)
        gsap.to(containerRef.current, {
            y: "-=15",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Toast Notification Pop-in
        gsap.fromTo(toastRef.current,
            { x: 50, opacity: 0, scale: 0.8 },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 2.5,
                ease: "elastic.out(1, 0.75)"
            }
        );

    }, { scope: containerRef });

    const codeLines = [
        { line: 1, content: <><span className="text-purple-400">def</span> <span className="text-blue-400 pl-2">calculate_complexity</span><span className="text-gray-300">(code):</span></> },
        { line: 2, content: <span className="pl-4 text-gray-500"># AI Analysis </span> },
        { line: 3, content: <><span className="pl-4 text-purple-400">if</span> <span className="text-gray-300 pl-2">complexity &gt; O(n^2):</span></> },
        { line: 4, content: <><span className="pl-8 text-blue-400">return</span> <span className="text-green-400 pl-2">"Optimize Loop"</span></> },
        { line: 5, content: null },
        { line: 6, content: <><span className="pl-4 text-blue-400">return</span> <span className="text-green-400 pl-2">"Good Job!"</span></> },
        { line: 7, content: null },
        { line: 8, content: <span className="text-gray-300">result = analyze(user_code)</span> },
    ];

    return (
        <div ref={containerRef} className="relative w-full max-w-xl lg:ml-auto">
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl shadow-blue-900/20 backdrop-blur-xl">
                {/* Window Controls */}
                <div className="window-controls flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                        <Terminal className="h-3 w-3" />
                        <span>main.py</span>
                    </div>
                </div>

                {/* Code Content */}
                <div ref={codeRef} className="p-6 font-mono text-sm leading-relaxed">
                    {codeLines.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <span className="w-8 select-none text-gray-700 text-right pr-4 font-thin text-xs">{item.line}</span>
                            <div className="h-6 flex items-center">
                                {item.content || <span className="h-4 block" />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating AI Toast */}
                <div
                    ref={toastRef}
                    className="absolute bottom-20 right-6 z-20 flex items-center gap-3 rounded-lg border border-white/10 bg-[#151515]/90 px-4 py-3 shadow-xl backdrop-blur-md ring-1 ring-white/5"
                >
                    <div className="rounded-full bg-blue-500/20 p-2 text-blue-400">
                        <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">AI Insight</span>
                        <span className="text-sm font-semibold text-white">Optimize nested loops</span>
                    </div>
                    <div className="ml-2 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
                </div>

                {/* Search Bar Visual at bottom */}
                <div className="mx-6 mb-6 mt-2 flex items-center gap-2 rounded-lg bg-[#0f0f0f] px-4 py-3 border border-white/5 transition-colors hover:border-white/10 group cursor-pointer">
                    <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">Ask generic AI to refactor...</span>
                    <div className="ml-auto rounded-md bg-blue-600/20 p-1.5 transition-colors group-hover:bg-blue-600/40">
                        <Zap className="h-3 w-3 text-blue-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};
