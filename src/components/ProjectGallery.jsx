const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Meridian Tower",
    category: "Commercial High-Rise",
    location: "London, UK",
    value: "£48M",
    year: "2025",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/9acbca3de_generated_ac418c0c.png",
  },
  {
    title: "Harbour Bridge Expansion",
    category: "Infrastructure",
    location: "Bristol, UK",
    value: "£125M",
    year: "2024",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/32dbac785_generated_5ddf3418.png",
  },
  {
    title: "Nova Steel Complex",
    category: "Industrial",
    location: "Manchester, UK",
    value: "£32M",
    year: "2024",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/6a325cf65_generated_5129ab98.png",
  },
  {
    title: "Silverstone Logistics Hub",
    category: "Commercial",
    location: "Birmingham, UK",
    value: "£67M",
    year: "2023",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/c0cb34669_generated_3a0f98d0.png",
  },
  {
    title: "Apex Residential Quarter",
    category: "Residential",
    location: "Edinburgh, UK",
    value: "£89M",
    year: "2023",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/0684cd698_generated_e644ba7e.png",
  },
  {
    title: "Pacific Gateway Terminal",
    category: "Infrastructure",
    location: "Cardiff, UK",
    value: "£210M",
    year: "2022",
    image: "https://media.db.com/images/public/69ff7d727cc00baea69de533/02f32a591_generated_32f920dd.png",
  },
];

export default function ProjectGallery() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-accent text-xs tracking-[0.4em] uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-primary text-4xl md:text-6xl mt-3"
            >
              Featured Projects
            </motion.h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center border border-border rounded-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-20 pb-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}