import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <span
              className={`font-heading font-bold text-xl tracking-tight transition-colors duration-500 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              MANTARAY
            </span>
            <span
              className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                scrolled ? "text-muted-foreground" : "text-white/60"
              }`}
            >
              Ltd
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-300 hover:opacity-100 ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-body text-sm tracking-wide bg-accent text-accent-foreground px-6 py-2.5 rounded-sm hover:bg-accent/90 transition-colors"
            >
              Start a Build
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-body text-base text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block font-body text-sm tracking-wide bg-accent text-accent-foreground px-6 py-3 rounded-sm text-center mt-4"
              >
                Start a Build
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}