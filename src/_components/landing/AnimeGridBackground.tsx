"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const AnimeGridBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [gridState, setGridState] = useState({ rows: 0, cols: 0, count: 0 });

    // 1. Calculate grid strictly on client-side to avoid hydration mismatches
    useEffect(() => {
        const calculateGrid = () => {
            if (!containerRef.current) return;
            const size = 60; // Larger cells for better visibility
            const cols = Math.ceil(window.innerWidth / size);
            const rows = Math.ceil(window.innerHeight / size);
            setGridState({ rows, cols, count: rows * cols });
        };

        calculateGrid();
        window.addEventListener("resize", calculateGrid);
        return () => window.removeEventListener("resize", calculateGrid);
    }, []);

    const cells = useMemo(() => Array.from({ length: gridState.count }), [gridState.count]);

    // 2. The Core Anime.js Animation
    useGSAP(() => {
        if (gridState.count === 0) return;

        // Reset state
        gsap.set(".grid-item", {
            scale: 0.1,
            backgroundColor: "transparent",
            borderColor: "rgba(255,255,255,0.05)"
        });

        const tl = gsap.timeline({
            defaults: { ease: "easeInOut" } // "easeInOut" for that smooth specific anime.js feel
        });

        // The "Intro" Ripple
        tl.to(".grid-item", {
            scale: 0.9,
            backgroundColor: "#1a1a1a",
            duration: 0.5,
            stagger: {
                amount: 1.5,
                grid: [gridState.rows, gridState.cols],
                from: "center",
            }
        })
            // The "Color Wave"
            .to(".grid-item", {
                backgroundColor: "#4f46e5", // Indigo-600
                scale: 0.5,
                duration: 0.8,
                stagger: {
                    amount: 1.5,
                    grid: [gridState.rows, gridState.cols],
                    from: "center",
                    yoyo: true,
                    repeat: 3
                }
            })
            // The "Breathing" State
            .to(".grid-item", {
                scale: 0.8,
                backgroundColor: "#111",
                borderColor: "rgba(255,255,255,0.1)",
                duration: 2,
                stagger: {
                    amount: 4,
                    grid: [gridState.rows, gridState.cols],
                    from: "random",
                    repeat: -1,
                    yoyo: true
                }
            });

    }, { scope: containerRef, dependencies: [gridState.count] });

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 -z-50 overflow-hidden bg-[#050505]" // Very dark base
        >
            <div
                className="w-full h-full grid"
                style={{
                    gridTemplateColumns: `repeat(${gridState.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${gridState.rows}, 1fr)`,
                }}
            >
                {cells.map((_, i) => (
                    <div
                        key={i}
                        className="grid-item w-full h-full border border-white/5 relative"
                    >
                        {/* Dot in center for extra detail */}
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full" />
                    </div>
                ))}
            </div>

            {/* Radial Vignette to focus attention on center content */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none" />
        </div>
    );
};
