import { profile } from "@/data/profile";
import { GraduationCap, Code, Terminal, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        <section>
          <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">About Me</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">{profile.name}</h1>
          <p className="text-muted text-lg mt-2">{profile.positioning}</p>
        </section>

        <section className="space-y-6 text-muted leading-relaxed">
          <p>{profile.bio}</p>
          <div className="p-6 rounded-xl bg-surface border border-surface-border text-foreground font-mono text-sm italic">
            "{profile.philosophy}"
          </div>
        </section>

        <section className="p-8 rounded-2xl bg-surface border border-surface-border space-y-4">
          <div className="flex items-center gap-3 text-accent font-mono text-sm">
            <GraduationCap className="w-5 h-5" /> Education History
          </div>
          <h2 className="text-xl font-bold text-foreground">{profile.degree}</h2>
          <p className="text-muted text-sm">{profile.college}</p>
          <p className="text-xs font-mono text-muted">Field of Study: Computer Science & Engineering</p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-3">
            <h3 className="text-foreground font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" /> Core Focus Areas
            </h3>
            <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
              <li>Backend Systems & REST APIs</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Machine Learning Classification</li>
              <li>Full-Stack Web Engineering</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-3">
            <h3 className="text-foreground font-bold flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent" /> Engineering Approach
            </h3>
            <ul className="text-sm text-muted space-y-1.5 list-disc list-inside">
              <li>Learn by building practical products</li>
              <li>Emphasis on clean code architecture</li>
              <li>Focus on practical problem solving</li>
              <li>Iterative evaluation & improvement</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}