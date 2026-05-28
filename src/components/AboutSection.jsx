const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";

import aboutImg from "./about.png"; // Relative to the current file
const ABOUT_IMG = aboutImg;

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src={ABOUT_IMG}
              alt="Modern glass and steel commercial building at twilight"
              className="w-full h-[400px] md:h-[520px] object-cover rounded-sm"
            />
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-sm hidden md:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body text-accent text-xs tracking-[0.4em] uppercase">
              About Mantaray
            </span>
            <h2 className="font-heading font-bold text-primary text-4xl md:text-5xl mt-3 mb-8">
              Engineering the Future of Construction
            </h2>
            <div className="space-y-5">
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Founded in 2008, Mantaray Ltd has grown from a specialist
                subcontractor into one of the UK's most trusted names in
                structural construction. We operate at the intersection of
                engineering precision and architectural ambition.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Our integrated approach — from foundation design through steel
                erection to concrete finishing — allows us to deliver complex
                structural packages with unmatched quality control and programme
                certainty.
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Every project is managed by chartered engineers and supported by
                our in-house fabrication facility, ensuring the precision our
                clients demand.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { value: "450+", label: "Team Members" },
                { value: "98%", label: "On-Time Delivery" },
                { value: "Zero", label: "Lost Time Incidents" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-heading font-bold text-primary text-2xl md:text-3xl">
                    {item.value}
                  </div>
                  <div className="font-body text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
