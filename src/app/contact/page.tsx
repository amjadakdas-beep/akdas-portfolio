import { profile } from "@/data/profile";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <div>
          <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Let's build something meaningful.</h1>
          <p className="text-muted text-lg mt-2 max-w-xl">
            I'm interested in connecting with developers, teams, and people working on useful software products and technical problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Direct Email Card */}
          <a
            href={`mailto:${profile.email}`}
            className="p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-background text-accent border border-surface-border group-hover:border-accent/40 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted">Direct Email</p>
                <p className="text-foreground font-semibold mt-0.5 group-hover:text-accent transition-colors">{profile.email}</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-background text-[#0A66C2] border border-surface-border group-hover:border-accent/40 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted">LinkedIn Profile</p>
                <p className="text-foreground font-semibold mt-0.5 group-hover:text-accent transition-colors">Akdas Amjad</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
          </a>

          {/* GitHub Card */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-background text-foreground border border-surface-border group-hover:border-accent/40 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono text-muted">GitHub Repositories</p>
                <p className="text-foreground font-semibold mt-0.5 group-hover:text-accent transition-colors">github.com/amjadakdas-beep</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
          </a>

          {/* Location Card */}
          <div className="p-6 rounded-xl bg-surface border border-surface-border flex items-center gap-4">
            <div className="p-3 rounded-lg bg-background text-accent border border-surface-border">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-muted">Location</p>
              <p className="text-foreground font-semibold mt-0.5">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}