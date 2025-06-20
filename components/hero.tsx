"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#011B8B] via-[#2F81BF] to-[#011B8B] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#68FFFF] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#68FFFF] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#68FFFF] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
              Precisão que Transforma{" "}
              <span className="text-[#68FFFF] relative">Territórios</span> em
              Resultados Reais
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#FFFFFF]/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Engenharia, topografia e geotecnologia com alto rigor técnico para
              quem exige{" "}
              <strong className="text-[#68FFFF]">
                confiança, segurança e agilidade
              </strong>
              .
            </p>
          </div>

          {/* Key Points */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center space-x-2 text-[#FFFFFF]">
                <Target className="w-5 h-5 text-[#68FFFF]" />
                <span className="font-medium">Precisão Técnica</span>
              </div>
              <div className="flex items-center space-x-2 text-[#FFFFFF]">
                <Zap className="w-5 h-5 text-[#68FFFF]" />
                <span className="font-medium">Agilidade Comprovada</span>
              </div>
              <div className="flex items-center space-x-2 text-[#FFFFFF]">
                <MapPin className="w-5 h-5 text-[#68FFFF]" />
                <span className="font-medium">Tecnologia de Ponta</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#68FFFF] text-[#011B8B] hover:bg-[#FFFFFF] hover:text-[#011B8B] font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Link href="#contato" className="flex items-center space-x-2">
                <span>Solicite um Orçamento Gratuito</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#FFFFFF]/70 text-sm mt-6">
              ✓ Décadas de experiência • ✓ Tecnologia de ponta • ✓ Resultados
              garantidos
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#sobre">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-[#68FFFF] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#68FFFF] rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="mt-2 text-[#68FFFF] text-sm font-medium">Ver mais</p>
        </div>
      </a>
    </section>
  );
}
