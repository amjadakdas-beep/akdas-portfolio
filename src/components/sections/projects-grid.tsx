import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

export const ProjectsGrid = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Engineering Projects</h2>
          <p className="text-muted mt-2">Practical systems built to solve real technical problems.</p>
        </div>
        <Link href="/projects" className="text-accent text-sm font-medium hover:underline mt-4 md:mt-0">
          View all project archives →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col justify-between p-8 rounded-2xl bg-surface border border-surface-border hover:border-accent/40 transition-all duration-300"
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

              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </h3>

              <p className="text-sm font-mono text-accent/90 mb-4">{project.tagline}</p>
              <p className="text-muted text-sm leading-relaxed mb-6">{project.shortDescription}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="text-[11px] font-mono text-muted bg-background px-2.5 py-1 rounded border border-surface-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};