import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "gold";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export function Button({
    className = "",
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-white/[0.06] backdrop-blur-sm text-white border border-white/[0.1] rounded-full hover:bg-white/[0.1] hover:border-white/[0.15]",
        secondary: "bg-secondary text-[#080808] rounded-full hover:bg-[#c9a432] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]",
        outline: "border border-white/[0.12] bg-transparent text-white/80 rounded-full hover:bg-white/[0.05] hover:border-white/[0.2]",
        ghost: "text-white/60 rounded-full hover:bg-white/[0.05] hover:text-white",
        glass: "glass-button",
        gold: "gold-button",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 py-2",
        lg: "h-12 px-8 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
}
