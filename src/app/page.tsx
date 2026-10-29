import { Hero } from "@/components/sections/hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { MilestonesSection } from "@/components/sections/milestones-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsGrid />
      <SkillsGrid />
      <MilestonesSection />

      <section className="py-20 px-6 border-t border-surface-border bg-surface/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Let's build something meaningful.
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            I'm interested in connecting with developers, teams, and technical mentors working on useful software products and intelligent backend systems.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Reach Out Directly
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}