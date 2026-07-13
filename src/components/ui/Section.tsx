import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    variant?: "default" | "alternate";
}

export function Section({ className = "", variant = "default", children, ...props }: SectionProps) {
    return (
        <section className={`py-16 md:py-24 ${className}`} {...props}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}

export function Container({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`container mx-auto px-4 md:px-6 ${className}`} {...props}>
            {children}
        </div>
    )
}
