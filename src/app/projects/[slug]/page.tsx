import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to projects
      </Link>

      <header className="space-y-4 mb-12">
        <div className="flex items-center gap-3">
          <Badge variant="accent">{project.status}</Badge>
          <span className="text-xs font-mono text-muted">{project.technologies[0]}</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{project.title}</h1>
        <p className="text-lg text-accent font-mono">{project.tagline}</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Project Overview</h2>
          <p className="text-muted leading-relaxed">{project.overview}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-2">
            <h3 className="font-bold text-foreground text-sm font-mono text-accent">Problem Statement</h3>
            <p className="text-muted text-sm leading-relaxed">{project.problemStatement}</p>
          </div>
          <div className="p-6 rounded-xl bg-surface border border-surface-border space-y-2">
            <h3 className="font-bold text-foreground text-sm font-mono text-accent">Solution Approach</h3>
            <p className="text-muted text-sm leading-relaxed">{project.solutionApproach}</p>
          </div>
        </div>

        {project.architectureDiagram && (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">System Architecture</h2>
            <ArchitectureDiagram steps={project.architectureDiagram} />
          </section>
        )}

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Implemented Features</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-muted text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Technical Decisions</h2>
          <ul className="space-y-2.5">
            {project.technicalDecisions.map((decision, idx) => (
              <li key={idx} className="p-4 rounded-lg bg-surface border border-surface-border text-muted text-sm">
                {decision}
              </li>
            ))}
          </ul>
        </section>

        {project.limitations && project.limitations.length > 0 && (
          <section className="p-6 rounded-xl bg-surface border border-surface-border space-y-3">
            <h2 className="text-sm font-bold font-mono text-muted flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-accent" /> Known Limitations
            </h2>
            <ul className="list-disc list-inside text-sm text-muted space-y-1">
              {project.limitations.map((lim, idx) => (
                <li key={idx}>{lim}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="pt-8 border-t border-surface-border flex flex-wrap gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                Inspect Code on GitHub
              </Button>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Button>
            </a>
          )}
        </section>
      </div>
    </main>
  );
}