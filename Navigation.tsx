import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import avatarLogo from "@/assets/avatar.gif";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", path: "/" },
    { name: "Gaming Specs", path: "/gaming-specs" },
    { name: "Spotify Playlist", path: "/spotify" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5" : "bg-background/80 backdrop-blur-lg"
      } border-b border-border`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:scale-105 transition-smooth">
              <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-smooth">
                <img src={avatarLogo} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-smooth group ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button - Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span className={`bg-current h-0.5 w-6 rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`} />
                <span className={`bg-current h-0.5 w-6 rounded transition-all duration-300 my-1 ${
                  isOpen ? "opacity-0" : ""
                }`} />
                <span className={`bg-current h-0.5 w-6 rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`} />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[73px] left-0 right-0 bg-gradient-to-b from-card/95 to-background/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10">
            <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`text-lg font-medium transition-smooth hover:text-primary p-4 rounded-lg hover:bg-primary/10 animate-slide-up ${
                    isActive(link.path) 
                      ? "text-primary bg-primary/10 border-l-4 border-primary" 
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
