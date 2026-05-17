import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const redirect = (path) => {
    navigate(`/${path}`);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { path: "blog", label: "Blog" },
    { id: "achievements", label: "Achievements" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const navBg = isScrolled
    ? "bg-black/95 border-b border-white/10 backdrop-blur-[10px]"
    : "bg-transparent border-b border-transparent backdrop-blur-none";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-[background,border] duration-300 ${navBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="bg-transparent border-none cursor-pointer transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/images/logo.png"
              alt="Fazril Syaveral Hillaby"
              className="hidden md:block h-16 w-auto"
            />
            <img
              src="/images/logo.png"
              alt="Fazril Syaveral Hillaby"
              className="block md:hidden h-14 w-auto"
            />
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => link.path ? redirect(link.path) : scrollToSection(link.id)}
                className="text-base font-normal text-white/70 hover:text-accent bg-transparent border-none cursor-pointer transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

            <a
              href="/curriculum-vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-6 py-3 text-base font-medium cursor-pointer transition-all duration-300 no-underline inline-flex items-center gap-2 hover:bg-accent/10 hover:text-accent"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <button
            className="block md:hidden bg-transparent border-none text-white cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.98)] z-[99] flex flex-col items-center justify-center p-5 animate-[fadeIn_0.3s_ease] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-8 items-center">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => link.path ? redirect(link.path) : scrollToSection(link.id)}
                className="text-[28px] font-medium text-white/80 bg-transparent border-none cursor-pointer opacity-80 translate-y-5 animate-[slideIn_0.3s_ease_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/curriculum-vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-accent text-black px-8 py-4 no-underline font-medium text-lg mt-5 translate-y-5 animate-[slideIn_0.3s_ease_forwards]"
              style={{ animationDelay: "0.5s" }}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
