import Link from "next/link";
import { profile } from "@/data/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-surface-border bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-foreground">{profile.name}</p>
          <p className="text-xs text-muted mt-1">{profile.degree} · {profile.college}</p>
        </div>

        <div className="flex gap-6 text-xs text-muted">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Akdas Amjad. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
};                      