import { useState } from "react";
import {
  Car,
  Cloud,
  Compass,
  FileSpreadsheet,
  Heart,
  Languages,
  ListChecks,
  MessagesSquare,
  Palette,
  Share2,
  Target,
  Users,
  Warehouse,
} from "lucide-react";
import { cn } from "../Lib/utils";

// Les pourcentages n'existent que pour les langues : ce sont les seuls
// niveaux chiffrés figurant sur le CV.
const skills = [
  // Compétences techniques
  {
    name: "Pack Google Workspace",
    detail: "Forms, Sheets, Slides, Docs",
    category: "techniques",
    icon: FileSpreadsheet,
  },
  {
    name: "Outils collaboratifs",
    detail: "Slack, Google Chat, Teams, WhatsApp",
    category: "techniques",
    icon: MessagesSquare,
  },
  {
    name: "ERP Odoo V17",
    detail: "Employés, Achats, Ventes, Parc automobile",
    category: "techniques",
    icon: Warehouse,
  },
  {
    name: "Réseaux sociaux",
    detail: "LinkedIn, Facebook, Instagram, TikTok",
    category: "techniques",
    icon: Share2,
  },
  {
    name: "Design",
    detail: "Canva",
    category: "techniques",
    icon: Palette,
  },
  {
    name: "Next Cloud",
    detail: "Partage et archivage de documents",
    category: "techniques",
    icon: Cloud,
  },
  {
    name: "Permis de conduire",
    detail: "Catégorie B",
    category: "techniques",
    icon: Car,
  },

  // Savoir-être
  {
    name: "Esprit d'équipe",
    category: "savoir-etre",
    icon: Users,
  },
  {
    name: "Empathie",
    category: "savoir-etre",
    icon: Heart,
  },
  {
    name: "Autonome",
    category: "savoir-etre",
    icon: Compass,
  },
  {
    name: "Pragmatique",
    category: "savoir-etre",
    icon: Target,
  },
  {
    name: "Méthodique",
    category: "savoir-etre",
    icon: ListChecks,
  },

  // Langues
  {
    name: "Malgache",
    level: 75,
    category: "langues",
    icon: Languages,
  },
  {
    name: "Français",
    level: 80,
    category: "langues",
    icon: Languages,
  },
  {
    name: "Anglais",
    level: 50,
    category: "langues",
    icon: Languages,
  },
];

const categories = ["all", "techniques", "savoir-etre", "langues"];

const categoryLabels = {
  all: "Toutes",
  techniques: "Compétences techniques",
  "savoir-etre": "Savoir-être",
  langues: "Langues",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={category}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90 hover:shadow-sm"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300 border border-border/50 hover:border-primary/20 flex flex-col"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {skill.detail || categoryLabels[skill.category]}
                    </span>
                  </div>
                </div>

                {skill.level !== undefined && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">
                        Niveau
                      </span>
                      <span className="text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
