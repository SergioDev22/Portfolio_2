import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeContext } from "../utils/context";
import { Interests } from "../components/Interests";
import { Formation } from "../components/Formation";
import { Experiences } from "../components/Experiences";
import { ThemeToggle } from "../components/ThemeToogle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import ParticlesComponent from "../components/Particlesjs";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ExpertiseSection } from "../components/ExpertiseSection";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {theme === "light" && <ParticlesComponent id="particles" />}
      <ThemeToggle className="fixed top-5 right-5 max-md:hidden" />
      <StarBackground />
      <Navbar />

      <main className="max-md:mt-15">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExpertiseSection />
        <Experiences />
        <Formation />
        <Interests />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Home;
