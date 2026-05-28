const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://media.db.com/images/public/69ff7d727cc00baea69de533/55b49abe7_generated_80ce73a1.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Structural steel framework of a large construction project at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-24 max-w-[1600px] mx-auto">
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-heading font-bold text-white text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
            MANTA
          </h1>
          <span className="font-body text-white/40 text-xs tracking-[0.4em] uppercase ml-1">
            Specialised Construction
          </span>
        </motion.div>

        {/* Center Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-12 md:gap-20 justify-center"
        >
          {[
            { value: "250+", label: "Projects Delivered" },
            { value: "18", label: "Years of Excellence" },
            { value: "£2.1B", label: "Portfolio Value" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-white text-3xl md:text-5xl">
                {stat.value}
              </div>
              <div className="font-body text-white/50 text-xs tracking-[0.2em] uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Right + Scroll Indicator */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-white/40 text-[10px] tracking-[0.3em] uppercase">
              Scroll to Survey
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-white/40" size={20} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-white text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-right"
          >
            RAY
          </motion.h1>
        </div>
      </div>
    </section>
  );
}