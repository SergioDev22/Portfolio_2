import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // ← Déplacez cette partie à la racine (hors de `extend`)
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      serif: ["Montserrat", ...defaultTheme.fontFamily.serif], // Optionnel
      mono: [...defaultTheme.fontFamily.mono], // Conserve les polices monospace
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
    },
  },
  plugins: [],
};
