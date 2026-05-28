import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectGallery from "../components/ProjectGallery";
import Specializations from "../components/Specializations";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <Specializations />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}