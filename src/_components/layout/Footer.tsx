"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, Code2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(".footer-col",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        )
            .fromTo(".footer-bottom",
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.out" },
                "-=0.4"
            );

    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="footer-col lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                                    <Code2 className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">CODIGO</span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            Our platform empowers developers of all levels to master code, tackle challenges and innovate on the future.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
                            <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
                            <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-col">
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-400">Features</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Changelog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="font-bold text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-400">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Community</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Guides</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Legal</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-xs text-gray-600">
                        © 2026 CodiGo Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link href={href} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-blue-600 hover:text-white">
        {icon}
    </Link>
);
