"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Video from "@/components/Video/Video";
import SlideImages from "@/components/SlideImages/SlideImages";
import HomeSection from "@/components/Sections/HomeSection/HomeSection";
import About from "@/components/Sections/About/About";
import Portifolio from "@/components/Sections/Portfolio/Portfolio";
import Metricas from "@/components/Sections/Metricas/Metricas";
import Contact from "@/components/Sections/Contact/Contact";
//import { About, Portifolio,  Metricas, Contact } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-2xl font-bold text-pink-500 neon-text-pink">
          Carla Harumi
        </div>
        {/*TODO: Importar fontes corretas para telas pequenas*/}

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#sobre"
            style={{ color: "white" }}
            className="text-white hover:text-pink-500 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#metricas"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Métricas
          </a>
          <Button
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
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
            <option value="home">Home</option>
            <option value="sobre">Sobre</option>
            <option value="portfolio">Portfólio</option>
            <option value="metricas">Métricas</option>
            <option value="contato">Contato</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <HomeSection />
        <About />
        <Portifolio />
        <Metricas />
        <Contact />
      </main>
    </div>
  );
}

