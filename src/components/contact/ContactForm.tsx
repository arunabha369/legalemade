"use client";

import React, { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:biswaskalyan072@gmail.com?subject=${encodeURIComponent(
            subject || "LegalE Made Inquiry"
        )}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="glass-card p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/50">Name</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 glass-input" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/50">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 glass-input" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-white/50">Subject</label>
                    <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 glass-input" placeholder="What is this about?" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/50">Message</label>
                    <textarea id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 glass-input resize-none" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="w-full gold-button py-3 text-sm font-bold">
                    Send Message
                </button>
            </form>
        </div>
    );
}
