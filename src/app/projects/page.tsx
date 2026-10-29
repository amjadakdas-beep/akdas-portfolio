import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Projects</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">All Software Projects</h1>
        <p className="text-muted mt-2">A complete archive of real engineering work, AI tools, and full-stack applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="p-8 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between hover:border-accent/40 transition-all"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <Badge variant={project.slug === "sif-engine" ? "accent" : "surface"}>
                  {project.status}
                </Badge>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors p-1"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">
                <Link href={`/projects/${project.slug}`} className="hover:text-accent flex items-center gap-2 transition-colors">
                  {project.title} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </h2>

              <p className="text-xs font-mono text-accent/90 mb-4">{project.tagline}</p>
              <p className="text-muted text-sm leading-relaxed mb-6">{project.shortDescription}</p>
            </div>

            <div className="pt-4 border-t border-surface-border flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[11px] font-mono text-muted bg-background px-2.5 py-1 rounded border border-surface-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}