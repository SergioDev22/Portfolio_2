import {
  Building2,
  CalendarHeart,
  ClipboardList,
  ReceiptText,
  Truck,
  UserCog,
} from "lucide-react";
import { motion as Motion } from "framer-motion";

const domaines = [
  {
    id: 1,
    icon: Building2,
    title: "Services Généraux & Travaux",
    items: [
      "Suivi des travaux de rénovation des bureaux",
      "Gestion des bureaux et des fournitures",
      "Gestion des achats",
      "Abonnements Internet et télécom de l'entreprise",
    ],
  },
  {
    id: 2,
    icon: Truck,
    title: "Logistique & Flotte automobile",
    items: [
      "Suivi des dossiers et entretien de la flotte automobile",
      "Organisation et suivi du planning du coursier",
      "Réception, tri et distribution des courriers",
      "Suivi des stocks et des approvisionnements",
    ],
  },
  {
    id: 3,
    icon: CalendarHeart,
    title: "Événementiel & Accueil clients",
    items: [
      "Team building, salons et foires",
      "Organisation des séjours des clients à Madagascar",
      "Interviews, presses et rencontres clients",
      "Accueil et support en présentiel, par téléphone et par mail",
    ],
  },
  {
    id: 4,
    icon: UserCog,
    title: "Ressources Humaines",
    items: [
      "Contrats de travail et avenants du personnel",
      "Dossiers relatifs aux sanctions disciplinaires",
      "Contrôle des temps de présence et des absences",
      "Encadrement et intégration des stagiaires RH",
    ],
  },
  {
    id: 5,
    icon: ClipboardList,
    title: "Assistanat de Direction",
    items: [
      "Coordination entre les départements et la Direction Générale",
      "Organisation des voyages et déplacements",
      "Autorisations d'emploi et visas long séjour des expatriés",
      "Gestion des documents administratifs et du registre du personnel",
    ],
  },
  {
    id: 6,
    icon: ReceiptText,
    title: "Administration des ventes",
    items: [
      "Traitement et émission des factures clients",
      "Assistance commerciale",
      "Mise à jour des bases de données RH et de l'ERP Odoo",
    ],
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes domaines
          <span className="text-primary"> d'expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Les champs sur lesquels j'interviens au quotidien, de la coordination
          administrative à la logistique, en passant par les ressources
          humaines et l'événementiel interne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domaines.map((domaine, index) => {
            const Icon = domaine.icon;
            return (
              <Motion.div
                key={domaine.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-card rounded-lg shadow-xs card-hover p-6 flex flex-col h-full border border-border"
              >
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{domaine.title}</h3>
                <ul className="space-y-2">
                  {domaine.items.map((item, key) => (
                    <li
                      key={key}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
