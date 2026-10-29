import { milestones } from "@/data/milestones";
import { Award } from "lucide-react";

export const MilestonesSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-surface-border">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Milestones & Journey</h2>
        <p className="text-muted mt-2">Key academic and technical benchmarks.</p>
      </div>

      <div className="space-y-6">
        {milestones.map((item, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-surface border border-surface-border flex flex-col md:flex-row gap-6 items-start">
            <span className="px-3 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
              {item.year}
            </span>
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" /> {item.title}
              </h3>
              <p className="text-xs font-mono text-muted mt-1">{item.organization}</p>
              <p className="text-sm text-muted mt-3 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};