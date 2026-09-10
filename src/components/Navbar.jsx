import { cn } from "../Lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Acceuil", href: "#hero" },
  { name: "A propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Expertise", href: "#expertise" },
  { name: "Expériences", href: "#experiences" },
  { name: "Formation", href: "#formation" },
  { name: "Centres d'intérêt", href: "#interets" },
  // { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 max-sm:mb-5",
        isScrolled ? "py-3 bg-background/80  shadow-xs" : "py-5 "
      )}
    >
      <div className="container flex items-center justify-around">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span
            className={cn(
              isMenuOpen
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            )}
          >
            <span className="text-glow text-foreground">Gaëlle</span>{" "}
            Rabeninary
          </span>
        </a>

        {/* Desktop NavBar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu />}
        </button>

        {/* NavBar Mobile */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center p-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
