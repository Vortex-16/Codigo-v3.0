"use client";

import { useRef } from "react";
import { Star, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const testimonials = [
    {
        name: "Alex Dan",
        role: "Software Engineer",
        content: "Coding used to be a chaos. CodiGo turned it into a streamlined process. The best choice for our team!",
        avatar: "AD",
        color: "bg-blue-500",
    },
    {
        name: "Sarah Lee",
        role: "Product Manager",
        content: "The AI features are unmatched. It feels like having a senior engineer pair programming with you.",
        avatar: "SL",
        color: "bg-purple-500",
    },
    {
        name: "James Wilson",
        role: "Tech Lead",
        content: "I've used many platforms but CodiGo stands out. The analytics help me understand where to improve.",
        avatar: "JW",
        color: "bg-orange-500",
    },
];

export const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(".test-header",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
            .fromTo(".testimonial-card",
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "back.out(1.2)" },
                "-=0.4"
            );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="testimonials" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="test-header mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <h2 className="text-4xl font-bold text-white">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Developers</span> <br />
                        Love CodiGo
                    </h2>
                    <div className="max-w-sm text-right">
                        <p className="text-gray-400 mb-4 text-sm">
                            From startups to Fortune 500s, developers are switching to CodiGo for a better coding experience.
                        </p>
                        <button className="rounded-full bg-purple-600/10 px-6 py-2.5 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-600/20 hover:scale-105 active:scale-95 duration-200 flex items-center ml-auto">
                            Join Them <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] p-8 transition-all hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/10"
                        >
                            <div className="mb-4 flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="mb-6 text-gray-300 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} font-bold text-white shadow-lg`}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
