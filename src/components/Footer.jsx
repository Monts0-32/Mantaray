import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-primary-foreground text-lg tracking-tight">
              MANTARAY
            </span>
            <span className="font-body text-primary-foreground/40 text-[10px] tracking-[0.3em] uppercase">
              Ltd
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-center">
            {["Projects", "Expertise", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-primary-foreground/50 text-sm hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="font-body text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Mantaray Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}