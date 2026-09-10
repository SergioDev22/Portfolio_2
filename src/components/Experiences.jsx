import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Chargée des Services Généraux et de la Logistique",
    entreprise: "OCTET SARL",
    lieu: "Antananarivo",
    date: "Mars 2025 - Présent",
    current: true,
    groups: [
      {
        nom: "Service Logistique, Travaux et Moyens Généraux",
        items: [
          "Suivre les travaux de rénovation des bureaux",
          "Assurer le suivi des dossiers et l'entretien de la flotte automobile",
          "Gérer les bureaux et les fournitures",
          "Organiser les événements internes (team building, séjours clients, salons, foires, etc.)",
          "Organiser les séjours des clients à Madagascar",
          "Organiser et suivre le planning du coursier",
          "Réceptionner, trier et distribuer les courriers",
          "Gérer les achats",
          "Gérer les abonnements Internet et télécom de l'entreprise",
        ],
      },
      {
        nom: "Administration des ventes",
        items: ["Traiter et émettre les factures clients OCTET"],
      },
      {
        nom: "Service Ressources Humaines (back-up)",
        items: ["Contrôler les temps de présence et des absences"],
      },
      {
        nom: "Service Commercial chez Tana PC Store By OCTET (back-up)",
        items: ["Apporter une assistance commerciale pour Tana PC Store"],
      },
    ],
  },
  {
    id: 2,
    title: "Chargée Administration du Personnel",
    entreprise: "Ankarana Groupe",
    lieu: "Ambohidratrimo",
    date: "Novembre 2024 - Janvier 2025",
    desc: [
      "Régulariser les avenants et contrats de travail du personnel",
      "Traiter les dossiers relatifs aux sanctions disciplinaires",
      "Planifier quotidiennement le décaissement des repas des cantiniers sur les 2 sites à Tana",
      "Superviser l'équipe d'entretien et de nettoyage sur site",
      "Assurer le suivi des stocks et des approvisionnements des produits d'entretien pour le ménage",
      "Encadrer et intégrer les stagiaires du département RH",
    ],
  },
  {
    id: 3,
    title: "Assistante Administration du Personnel · Assistante de Direction",
    entreprise: "SmartOne.ai",
    lieu: "Antananarivo",
    date: "Novembre 2021 - Novembre 2024",
    roles: [
      {
        nom: "Assistante Administration du Personnel",
        date: "Mars 2023 - Novembre 2024",
      },
      { nom: "Assistante de Direction", date: "Novembre 2021 - Mars 2023" },
    ],
    desc: [
      "Assister la Direction Générale dans tous ses besoins au quotidien",
      "Organiser les événements internes (team building de la direction, interviews & presses, rencontres avec les clients, anniversaires surprises, remise des condoléances, etc.)",
      "Organiser les voyages et déplacements de la Direction et de leurs clients",
      "Être le centre de coordination des différents départements et la Direction Générale",
      "Assurer l'accueil et le support des clients en présentiel, par téléphone et par mail",
      "Accomplir les démarches nécessaires pour l'obtention de l'autorisation d'emploi et du visa long séjour des expatriés salariés et de leurs familles",
      "Assurer la gestion et la bonne tenue des documents administratifs et du registre du personnel",
      "Mettre à jour les bases de données RH et l'outil ERP Odoo",
    ],
  },
];

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2">
    <ArrowRight size={16} className="mt-1 flex-shrink-0 text-primary" />
    <span>{children}</span>
  </li>
);

export const Experiences = () => {
  return (
    <section id="experiences" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Expériences Professionnelles</span>
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="font-medium">{exp.entreprise}</span>
                    {exp.lieu && (
                      <span className="text-muted-foreground text-sm">
                        · {exp.lieu}
                      </span>
                    )}
                  </div>

                  {exp.roles && (
                    <ul className="mb-4 space-y-1">
                      {exp.roles.map((role, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          <span className="font-medium text-foreground">
                            {role.nom}
                          </span>{" "}
                          — {role.date}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.groups && (
                    <div className="space-y-4 mt-4">
                      {exp.groups.map((group, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-2">{group.nom}</h4>
                          <ul className="space-y-2">
                            {group.items.map((item, key) => (
                              <Bullet key={key}>{item}</Bullet>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.desc && (
                    <ul className="space-y-2 mt-4">
                      {exp.desc.map((item, index) => (
                        <Bullet key={index}>{item}</Bullet>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="md:text-right">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.date}
                  </span>
                  {exp.current && (
                    <span className="mt-2 md:justify-end flex items-center gap-2 text-xs font-medium text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      En poste
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
