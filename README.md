# Portfolio — Gaëlle Rabeninary

Portfolio personnel de Gaëlle Rabeninary, coordinatrice polyvalente
(assistanat de Direction, Ressources Humaines, Services Généraux et Logistique).

Basé sur React + Vite + Tailwind CSS, avec Framer Motion pour les animations
et un thème clair/sombre.

## Démarrer

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production dans `dist/`
- `npm run preview` — prévisualiser le build
- `npm run lint` — ESLint

## À compléter

Deux fichiers doivent être déposés dans `public/` :

- `public/profile.jpeg` — photo de profil affichée dans le hero
- `public/cv-gaelle-rabeninary.pdf` — CV téléchargeable depuis la section « À propos »

## Structure du contenu

Tout le contenu est en dur dans les composants, en haut de chaque fichier :

| Section | Fichier |
| --- | --- |
| Accueil | `src/components/HeroSection.jsx` |
| À propos | `src/components/AboutSection.jsx` |
| Compétences | `src/components/SkillsSection.jsx` |
| Domaines d'expertise | `src/components/ExpertiseSection.jsx` |
| Expériences | `src/components/Experiences.jsx` |
| Formation | `src/components/Formation.jsx` |
| Centres d'intérêt | `src/components/Interests.jsx` |
| Contact (non affichée) | `src/components/ContactSection.jsx` |

La section Contact existe mais n'est pas montée dans `src/pages/Home.jsx`.
Pour l'afficher, l'importer et l'ajouter dans le `<main>`, puis décommenter
l'entrée « Contact » dans `src/components/Navbar.jsx`.

La couleur d'accent se règle via la variable `--primary` dans `src/App.css`.
