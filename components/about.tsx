"use client";

import { useEffect, useState } from "react";
import { Award, Users, Clock, Shield } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("sobre");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="py-20 bg-[#FFFFFF] bg-cover bg-center relative"
    >
      {/* Overlay para escurecer a imagem de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none"></div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bgTopografia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4, // ajuste a opacidade conforme desejar
        }}
      ></div>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011B8B] mb-4">
              Sobre a <span className="text-[#2F81BF]">EM Agrimensura</span>
            </h2>
            <div className="w-24 h-1 bg-[#68FFFF] mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-r from-[#011B8B]/10 to-[#2F81BF]/10 p-8 rounded-2xl">
                <div className="space-y-6">
                  <p className="text-lg text-[#353535] leading-relaxed">
                    A <strong className="text-[#011B8B]">EM Agrimensura</strong>{" "}
                    nasceu da expertise de profissionais com décadas de atuação.
                    Não oferecemos apenas medições — entregamos{" "}
                    <strong className="text-[#2F81BF]">
                      inteligência técnica, clareza e precisão
                    </strong>{" "}
                    para decisões seguras.
                  </p>

                  <p className="text-lg text-[#353535] leading-relaxed">
                    Atuamos com{" "}
                    <strong className="text-[#011B8B]">
                      tecnologia de ponta
                    </strong>
                    , métodos consolidados e um atendimento consultivo, sempre
                    com foco em{" "}
                    <strong className="text-[#2F81BF]">
                      resultados confiáveis e ágeis
                    </strong>
                  </p>

                  <p className="text-[#011B8B] font-semibold italic">
                    "Nossa missão é transformar dados técnicos em soluções
                    práticas que geram valor real para nossos clientes."
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-[#011B8B] mt-10 mb-6 text-center">
                  Nossos Valores Fundamentais
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#68FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-[#011B8B]" />
                    </div>
                    <h4 className="font-bold text-[#011B8B] mb-2">
                      Excelência Técnica
                    </h4>
                    <p className="text-[#353535] text-sm">
                      Padrões rigorosos em cada projeto
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#68FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-[#011B8B]" />
                    </div>
                    <h4 className="font-bold text-[#011B8B] mb-2">
                      Confiabilidade
                    </h4>
                    <p className="text-[#353535] text-sm">
                      Dados precisos e entregas pontuais
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#68FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#011B8B]" />
                    </div>
                    <h4 className="font-bold text-[#011B8B] mb-2">
                      Atendimento Consultivo
                    </h4>
                    <p className="text-[#353535] text-sm">
                      Suporte especializado em cada etapa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
}
