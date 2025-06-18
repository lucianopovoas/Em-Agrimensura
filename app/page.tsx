import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Differentials from "@/components/differentials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "EM Agrimensura | Engenharia, Topografia e Geotecnologia com Precisão",
  description:
    "Soluções técnicas em topografia, mapeamento e geotecnologia com precisão e agilidade. EM Agrimensura: referência em dados confiáveis e engenharia de alto nível.",
  keywords:
    "agrimensura, topografia, mapeamento, geotecnologia, drones, GIS, engenharia, levantamento planialtimétrico",
  authors: [{ name: "EM Agrimensura" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
