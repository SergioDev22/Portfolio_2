import { Church, Footprints, Scissors } from "lucide-react";
import { motion as Motion } from "framer-motion";

const interets = [
  {
    id: 1,
    title: "Randonnée pédestre",
    icon: <Footprints className="text-primary" />,
  },
  {
    id: 2,
    title: "Création de modèle de vêtement",
    icon: <Scissors className="text-primary" />,
  },
  {
    id: 3,
    title: "Club « Mpanentana »",
    detail: "EEM Trinité Masina Avaratranjoma",
    icon: <Church className="text-primary" />,
  },
];

export const Interests = () => {
  return (
    <section id="interets" className="py-24 px-4 relative bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Centres d'intérêt</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interets.map((item, index) => (
            <Motion.div
              key={item.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-border flex items-start gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-full">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                {item.detail && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.detail}
                  </p>
                )}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
