import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Award, Code2, Sparkles, Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 px-6 bg-grid-pattern border-b border-surface-border overflow-hidden">
      
      {/* Soft Ambient Floating Light Orbs */}
      <div className="ambient-orb orb-lime -top-20 -left-20" />
      <div className="ambient-orb orb-cyan top-1/3 -right-20" />
      <div className="ambient-orb orb-purple -bottom-20 left-1/3" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-lime-400/30 text-lime-400 text-xs font-mono backdrop-blur-md shadow-lg shadow-lime-400/5">
          <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
          <span>FULL-STACK DEVELOPER · AI/ML ENTHUSIAST · IITM JANAKPURI</span>
        </div>

        {/* BADA BADA ANIMATED NAME DISPLAY */}
        <div className="space-y-4">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none hero-name-gradient select-none">
            AKDAS AMJAD
          </h1>
          <p className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground/90">
            Building intelligent software. <span className="text-gradient-sub">Solving real problems.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-2">
          
          {/* Left Column Text & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
              {profile.bio}
            </p>

            {/* Unique Animated Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/projects">
                <Button variant="primary" size="lg">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </Button>
              </a>

              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column Technical Visual Card with Soft Glow */}
          <div className="lg:col-span-5">
            <div className="glow-border-card p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border font-mono text-xs text-muted">
                <span className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-lime-400" /> hackathon_track_record.json
                </span>
                <span className="text-lime-400 font-semibold px-2 py-0.5 rounded bg-lime-400/10 border border-lime-400/20">
                  Verified
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-background/80 border border-surface-border flex items-center justify-between">
                  <span className="text-muted flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-lime-400" /> Total Built
                  </span>
                  <span className="text-lime-400 font-bold text-sm">20+ Hackathons</span>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-surface-border flex items-center justify-between">
                  <span className="text-muted flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400" /> Top Ranks
                  </span>
                  <span className="text-foreground font-bold">Top 5 in 4 Hackathons</span>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-surface-border flex items-center justify-between">
                  <span className="text-muted flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" /> Major Events
                  </span>
                  <span className="text-xs text-gradient-sub font-bold">Microsoft · Paytm · IIITD</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border flex justify-between items-center text-[11px] text-muted font-mono">
                <span>IITM College of Eng.</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline flex items-center gap-1">
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Hackathon Stats Bar with Neon Glowing Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-surface-border/60">
          <div className="glow-border-card p-5">
            <p className="text-3xl font-extrabold font-mono text-lime-400">20+</p>
            <p className="text-xs text-muted mt-1 font-medium">Hackathons Participated</p>
          </div>
          <div className="glow-border-card p-5">
            <p className="text-3xl font-extrabold font-mono text-cyan-400">Top 5</p>
            <p className="text-xs text-muted mt-1 font-medium">Secured in 4 Hackathons</p>
          </div>
          <div className="glow-border-card p-5">
            <p className="text-sm font-extrabold font-mono text-purple-400">Microsoft · Paytm · IIITD</p>
            <p className="text-xs text-muted mt-1 font-medium">Major Hackathon Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
};