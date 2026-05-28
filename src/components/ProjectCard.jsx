import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex-shrink-0 w-[300px] md:w-[380px] h-[480px] md:h-[560px] overflow-hidden rounded-sm cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          hovered
            ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            : "bg-gradient-to-t from-black/50 via-transparent to-transparent"
        }`}
      />

      {/* Project Number */}
      <div className="absolute top-5 left-5 font-heading text-white/20 text-6xl font-bold">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="font-body text-white/50 text-[10px] tracking-[0.3em] uppercase mb-1">
          {project.category}
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">
          {project.title}
        </h3>

        <motion.div
          initial={false}
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-white/20 mt-3 grid grid-cols-3 gap-3">
            <div>
              <div className="font-body text-white/40 text-[9px] tracking-widest uppercase">
                Location
              </div>
              <div className="font-body text-white text-xs mt-0.5">
                {project.location}
              </div>
            </div>
            <div>
              <div className="font-body text-white/40 text-[9px] tracking-widest uppercase">
                Value
              </div>
              <div className="font-body text-white text-xs mt-0.5">
                {project.value}
              </div>
            </div>
            <div>
              <div className="font-body text-white/40 text-[9px] tracking-widest uppercase">
                Year
              </div>
              <div className="font-body text-white text-xs mt-0.5">
                {project.year}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}