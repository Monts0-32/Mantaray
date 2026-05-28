import React from "react";
import { motion } from "framer-motion";
import p1 from "./ui/canobbio.png"; // Relative to the current file
const canobbio = p1;
import p2 from "./ui/carl.png"; // Relative to the current file
const carl = p2;
import p3 from "./ui/sarna-logo.png"; // Relative to the current file
const sarna = p3;
import p4 from "./ui/sika.png"; // Relative to the current file
const sika = p4;
import p5 from "./ui/space.png"; // Relative to the current file
const space = p5;
// ─── EDIT PARTNERS HERE ───────────────────────────────────────────────────────
// Add or remove partners by editing this list.
// Each entry needs a "name" and an "logo" image URL.
const partners = [
  { name: "Canobbio", logo: canobbio },
  { name: "Carl", logo: carl },
  { name: "Sarna", logo: sarna },
  { name: "Sika", logo: sika },
  { name: "Space", logo: space },
];
// ─────────────────────────────────────────────────────────────────────────────

// Duplicate for seamless looping
const marqueeItems = [...partners, ...partners];

function PartnerLogo({ partner }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center mx-12">
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-10 object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="font-body text-accent text-xs tracking-[0.4em] uppercase">
            Trusted By
          </span>
          <h2 className="font-heading font-bold text-primary text-4xl md:text-5xl mt-3">
            Our Partners
          </h2>
          <p className="font-body text-muted-foreground text-base mt-4 max-w-xl mx-auto leading-relaxed">
            We work alongside the UK's most respected construction and engineering firms.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((partner, i) => (
            <PartnerLogo key={i} partner={partner} />
          ))}
        </motion.div>
      </div>

      <p className="font-body text-muted-foreground text-xs text-center mt-12 tracking-wide">
        Interested in partnering with Mantaray Ltd?{" "}
        <a href="#contact" className="text-accent hover:underline">
          Get in touch
        </a>
      </p>
    </section>
  );
}
