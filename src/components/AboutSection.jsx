import { Briefcase, Truck, Users } from "lucide-react";
import { motion as Motion } from "framer-motion";

const highlights = [
  {
    id: 1,
    icon: Truck,
    title: "Services Généraux & Logistique",
    desc: "Suivi des travaux, gestion des bureaux et des fournitures, achats, flotte automobile et abonnements Internet et télécom.",
    duration: 1,
  },
  {
    id: 2,
    icon: Users,
    title: "Ressources Humaines",
    desc: "Contrats et avenants, dossiers disciplinaires, suivi des temps de présence, registre du personnel et encadrement des stagiaires.",
    duration: 1.25,
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Assistanat de Direction",
    desc: "Point de coordination entre les départements et la Direction Générale, organisation des voyages, des événements et de l'accueil des clients.",
    duration: 1.5,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          A propos
          <span className="text-primary"> de moi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left max-md:mx-4">
            <h3 className="text-2xl font-semibold">
              Coordinatrice polyvalente
            </h3>
            <p className="text-muted-foreground text-left">
              Évoluant depuis plus de 4 ans entre l'assistanat de Direction, les
              Ressources Humaines, les Services Généraux et la Logistique, j'ai
              développé un véritable sens de l'organisation et de la
              coordination. Mon objectif est de contribuer à un environnement de
              travail structuré, favorisant à la fois le bien-être des
              collaborateurs et la performance de l'entreprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a
                href="https://drive.google.com/file/d/13p9HE3l6x6BdGXBqv4sogCG6_PCHtlp-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:br-primary/10 hover:scale-x-105 transition duration-300 text-center"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 max-md:mx-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="gradient-border p-6 card-hover">
                  <Motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: item.duration }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </Motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
