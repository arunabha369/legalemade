import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white/[0.02] border-t border-white/[0.06] py-12 mt-auto">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-bold text-white">LegalE Made</h3>
                        <p className="text-sm text-white/35 leading-relaxed">
                            Simplifying Indian laws for students, aspirants, and citizens. Making justice understandable for everyone.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-white/40">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/learn" className="hover:text-secondary transition-colors">Learn Law</Link></li>
                            <li><Link href="/updates" className="hover:text-secondary transition-colors">Legal Updates</Link></li>
                            <li><Link href="/students" className="hover:text-secondary transition-colors">For Students</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary text-sm uppercase tracking-wider">Connect</h4>
                        <ul className="space-y-2 text-sm text-white/40">
                            <li><a href="https://instagram.com/legalemade" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram</a></li>
                            <li><a href="mailto:biswaskalyan072@gmail.com" className="hover:text-secondary transition-colors">Email Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/40">
                            <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.06] text-center text-sm text-white/25">
                    © {new Date().getFullYear()} LegalE Made. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
