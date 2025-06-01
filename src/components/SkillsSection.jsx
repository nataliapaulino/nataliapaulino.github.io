import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", category: "front-end" },
  { name: "JavaScript", category: "front-end" },
  { name: "React", category: "front-end" },
  { name: "TypeScript", category: "front-end" },
  { name: "Tailwind CSS", category: "front-end" },
  { name: "Bootstrap", category: "front-end" },
  { name: "Next.js", category: "front-end" },

  { name: "C#", category: "back-end" },
  { name: ".NET", category: "back-end" },
  { name: "PostgreSQL", category: "back-end" },
  { name: "MySQL", category: "back-end" },


  { name: "Git", category: "ferramentas" },
  { name: "GitHub", category: "ferramentas" },
  { name: "Docker", category: "ferramentas" },
  { name: "Figma", category: "ferramentas" },
];

const categories = ["full-stack", "front-end", "back-end", "ferramentas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("full-stack");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "full-stack" || skill.category === activeCategory
  );
  return (
    <section id="habilidades" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};