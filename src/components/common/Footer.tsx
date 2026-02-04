import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 mt-auto">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-bold">LegalE Made</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Simplifying Indian laws for students, aspirants, and citizens. Making justice understandable for everyone.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/learn" className="hover:text-secondary transition-colors">Learn Law</Link></li>
                            <li><Link href="/updates" className="hover:text-secondary transition-colors">Legal Updates</Link></li>
                            <li><Link href="/students" className="hover:text-secondary transition-colors">For Students</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary">Connect</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="https://instagram.com/legalemade" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram</a></li>
                            <li><a href="mailto:biswaskalyan072@gmail.com" className="hover:text-secondary transition-colors">Email Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-secondary">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} LegalE Made. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
