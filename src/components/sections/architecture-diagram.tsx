import { ChevronRight } from "lucide-react";

interface ArchitectureDiagramProps {
  steps?: string[];
}

export const ArchitectureDiagram = ({ steps }: ArchitectureDiagramProps) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="p-6 rounded-2xl bg-surface border border-surface-border my-8">
      <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
        Conceptual Processing Pipeline
      </p>
      
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 overflow-x-auto pb-2">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-3 flex-shrink-0">
            <div className="p-3 rounded-lg bg-background border border-surface-border text-xs font-mono text-foreground">
              <span className="text-accent mr-2">{idx + 1}.</span>
              {step}
            </div>
            {idx < steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-muted hidden md:block flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-muted mt-4 italic">
        * Model outputs support safety professionals and do not replace qualified site assessments.
      </p>
    </div>
  );
};