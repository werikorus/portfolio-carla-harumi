"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HomeSection from "@/components/Sections/HomeSection/HomeSection";
import Portifolio from "@/components/Sections/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Sections/Contact/Contact";

export const runtime = 'edge';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden pt-24">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 2px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 2px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */} 
      <header className={`fixed top-0 left-0 w-full z-50 bg-slate-900 px-6 py-6 lg:px-12 flex items-center justify-between transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""}`}
      >
        <a href="#home">
          <div className="text-2xl font-bold text-pink-500 neon-text-pink bruno-ace-regular"
            style={{ cursor: "pointer" }}
          >
            Carla Harumi
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 bruno-ace-regular">
          <a
            href="#home"
            className="text-white transition-colors hover:text-pink-500"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Portfólio
          </a>
          <Button
            variant="outline"
            className="bg-pink-600 border-pink-500 text-white hover:bg-pink-500 hover:text-white transition-colors"
            onClick={() =>
              document
                .getElementById("contato")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            CONTATO
          </Button>
        </nav>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <select
            onChange={(e) =>
              document
                .getElementById(e.target.value)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-slate-800 text-white border border-pink-500 neon-text-pink rounded px-3 py-1"
          >
            <option value="">Menu</option>
            <option value="sobre">Home</option>
            <option value="portfolio">Portfólio</option>
            <option value="contato">Contato</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">      
        <HomeSection />
        <Portifolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
