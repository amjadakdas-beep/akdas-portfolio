"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = 
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400/50 disabled:opacity-50 btn-shimmer active:scale-95 cursor-pointer";
    
    const variants = {
      primary: 
        "bg-gradient-to-r from-lime-400 via-lime-300 to-cyan-400 text-black font-semibold shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40 hover:scale-[1.02]",
      cyan: 
        "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]",
      secondary: 
        "bg-surface text-foreground hover:bg-surface-hover border border-surface-border hover:border-lime-400/40 hover:scale-[1.01]",
      outline: 
        "border border-white/15 bg-surface/50 backdrop-blur-md text-foreground hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 hover:scale-[1.01]",
      ghost: 
        "text-muted hover:text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";