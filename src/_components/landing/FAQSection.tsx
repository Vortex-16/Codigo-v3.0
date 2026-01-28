"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const faqs = [
    {
        question: "What specific coding difficulties do?",
        answer: "Our platform covers algorithmic challenges, system design, frontend, and backend tasks tailored to your role."
    },
    {
        question: "How does the AI provide customized feedback?",
        answer: "It analyzes your code structure, time complexity, and style to offer personalized tips and refactoring suggestions."
    },
    {
        question: "Is there a free tier available?",
        answer: "Yes, we offer a generous free tier for individuals to practice and compete in community challenges."
    },
    {
        question: "Can I use this platform for hiring?",
        answer: "Absolutely! We provide enterprise solutions for technical assessments and live coding interviews."
    },
    {
        question: "How do I get started with the platform?",
        answer: "Sign up for free, choose your language, and start solving your first challenge in under 2 minutes."
    },
];

export const FAQSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(".faq-left",
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(".faq-item",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );

    }, { scope: sectionRef });

    // GSAP accordion expansion
    const toggleFAQ = (index: number) => {
        if (openIndex === index) {
            // Close
            gsap.to(`#faq-content-${index}`, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => setOpenIndex(null)
            });
        } else {
            // If there's an open one, close it first
            if (openIndex !== null) {
                gsap.to(`#faq-content-${openIndex}`, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
            setOpenIndex(index);
            // Use setTimeout to allow render before animating height
            setTimeout(() => {
                gsap.fromTo(`#faq-content-${index}`,
                    { height: 0, opacity: 0 },
                    { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
                );
            }, 10);
        }
    };

    return (
        <section ref={sectionRef} id="faqs" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-12">
                <div className="faq-left lg:col-span-5">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Frequently Asked <br />
                        Questions <span className="text-blue-500">(FAQs)</span>
                    </h2>
                    <p className="mb-8 text-gray-400">
                        Still have questions? More detail? Feel free to browse our help center.
                    </p>
                    <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 hover:scale-105 active:scale-95 duration-200">
                        Contact Us
                    </button>
                </div>

                <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
                            >
                                <span className="font-medium text-gray-200">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                id={`faq-content-${index}`}
                                className="overflow-hidden"
                                style={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                            >
                                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
