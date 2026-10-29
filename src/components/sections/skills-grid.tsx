import { skills } from "@/data/skills";
import { SkillCategory } from "@/types";

export const SkillsGrid = () => {
  const categories: SkillCategory[] = [
    "Programming",
    "Backend Development",
    "AI & Machine Learning",
    "Natural Language Processing",
    "Frontend Development",
    "Data & Storage",
    "Developer Tools",
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-surface-border">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Inventory</h2>
        <p className="text-muted mt-2">Tools, frameworks, and technologies applied across software projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="p-6 rounded-xl bg-surface border border-surface-border">
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {categorySkills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-[10px] font-mono text-muted bg-background px-2 py-0.5 rounded border border-surface-border">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};