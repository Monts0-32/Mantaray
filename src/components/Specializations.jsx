const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Layers, Shield, Ruler, Wrench } from "lucide-react";

const SPEC_BG = "https://media.db.com/images/public/69ff7d727cc00baea69de533/c0391f449_generated_95e2352d.png";
const DETAIL_IMG = "https://media.db.com/images/public/69ff7d727cc00baea69de533/a8e944fd0_generated_92e46b57.png";

const specs = [
  {
    icon: Layers,
    title: "Structural Engineering",
    description:
      "Advanced load-bearing framework design using reinforced concrete and structural steel for commercial and industrial buildings.",
    metric: "50,000t+",
    metricLabel: "Steel Erected",
  },
  {
    icon: Shield,
    title: "Foundation Systems",
    description:
      "Deep foundation solutions including piling, underpinning, and ground improvement for complex soil conditions.",
    metric: "1,200+",
    metricLabel: "Piles Driven",
  },
  {
    icon: Ruler,
    title: "Precision Formwork",
    description:
      "Bespoke formwork and falsework systems engineered for architectural concrete finishes of the highest standard.",
    metric: "180,000m²",
    metricLabel: "Formwork Installed",
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    description:
      "In-house CNC steel fabrication and erection capabilities delivering complex geometries with millimetre precision.",
    metric: "Grade S355",
    metricLabel: "Standard Steel",
  },
];

export default function Specializations() {
  return (
    <section id="expertise" className="py-24 md:py-32">
      {/* Full-width image banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-20">
        <img
          src={SPEC_BG}
          alt="Geometric rebar reinforcement patterns at construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-6"
          >
            <span className="font-body text-white/50 text-xs tracking-[0.4em] uppercase">
              Our Specialisations
            </span>
            <h2 className="font-heading font-bold text-white text-4xl md:text-6xl mt-3">
              Built with Precision
            </h2>
            <p className="font-body text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Every structure we build is engineered to exceed the demands of
              modern construction.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-card rounded-sm p-7 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <spec.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">
                  {spec.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                  {spec.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="font-heading font-bold text-accent text-2xl">
                    {spec.metric}
                  </div>
                  <div className="font-body text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1">
                    {spec.metricLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <img
              src={DETAIL_IMG}
              alt="Close-up of precision steel bolt connections"
              className="w-full h-[600px] object-cover rounded-sm"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-sm p-6 border border-border">
              <div className="font-body text-accent text-[10px] tracking-[0.3em] uppercase mb-2">
                Technical Standard
              </div>
              <div className="font-heading font-bold text-primary text-lg">
                ISO 9001:2015 Certified
              </div>
              <p className="font-body text-muted-foreground text-sm mt-1">
                All structural works comply with BS EN 1090 Execution Class 3
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}