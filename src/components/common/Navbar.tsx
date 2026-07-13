"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Learn Law", href: "/learn" },
    { name: "Legal Updates", href: "/updates" },
    { name: "For Students", href: "/students" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full py-3 px-4 md:px-6">
            {/* Pill-shaped navbar container */}
            <div className="max-w-6xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-full px-6 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-serif text-xl font-bold text-white group-hover:text-secondary transition-colors">
                            LegalE Made
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isHome = link.name === "Home";
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                                        isHome
                                            ? "text-white"
                                            : "text-white/50 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                    {isHome && (
                                        <span className="block h-0.5 w-4 bg-secondary rounded-full mx-auto mt-0.5" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="glass-button px-5 py-2 text-sm font-medium flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5" />
                            Contact
                        </Link>
                        <Link href="/learn" className="gold-button px-5 py-2 text-sm font-medium">
                            Start Learning
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col gap-1 p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium py-3 px-4 text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-3 mt-3 pt-3 border-t border-white/[0.06]">
                            <Link href="/contact" className="glass-button px-4 py-2.5 text-sm font-medium flex-1 text-center" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                            <Link href="/learn" className="gold-button px-4 py-2.5 text-sm font-medium flex-1 text-center" onClick={() => setIsOpen(false)}>
                                Start Learning
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
