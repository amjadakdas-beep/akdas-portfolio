import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "outline";
  className?: string;
}

export const Badge = ({ children, variant = "surface", className }: BadgeProps) => {
  const variants = {
    accent: "bg-accent/15 text-accent border-accent/30",
    surface: "bg-surface text-muted border-surface-border",
    outline: "bg-transparent text-muted border-surface-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};