import { GraduationCap } from "lucide-react";
import { motion as Motion } from "framer-motion";

const formations = [
  {
    id: 1,
    diplome: "Master en Management du Tourisme et d'Hôtellerie",
    ecole: "Institut National de Tourisme et d'Hôtellerie, Antananarivo",
    date: "2021",
  },
  {
    id: 2,
    diplome: "Advanced 2 Certificate en Anglais Américain",
    ecole: "English Teaching Program, Antananarivo",
    date: "2019",
  },
  {
    id: 3,
    diplome: "Licence en Tourisme Durable",
    ecole: "Institut National de Tourisme et d'Hôtellerie, Antananarivo",
    date: "2019",
  },
  {
    id: 4,
    diplome: "DTS en Tourisme",
    ecole: "Institut National de Tourisme et d'Hôtellerie, Antananarivo",
    date: "2018",
  },
];

export const Formation = () => {
  return (
    <section id="formation" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Ma <span className="text-primary">Formation</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map((item, index) => (
            <Motion.div
              key={item.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-border flex flex-col gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.diplome}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.ecole}
                </p>
              </div>
              <span className="inline-block w-fit px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mt-auto">
                {item.date}
              </span>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
