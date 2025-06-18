"use client";

import { useEffect, useState } from "react";
import { Map, Mountain, Cog, DrillIcon as Drone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("servicos");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Cog,
      title: "Georreferenciamento de Imóveis Rurais",
      description:
        "Elaboração de memorial descritivo e planta georreferenciada conforme as exigências do INCRA, com precisão e confiabilidade para regularização fundiária.",
      color: "from-[#011B8B] to-[#2F81BF]",
    },
    {
      icon: Cog,
      title: "Levantamentos Topográficos",
      description:
        "Levantamento planialtimétrico cadastral com estação total, GNSS e drone, atendendo às necessidades de obras civis, projetos de infraestrutura e loteamentos.",
      color: "from-[#2F81BF] to-[#011B8B]",
    },
    {
      icon: Cog,
      title: "Levantamento Topográfico com LiDAR",
      description:
        "Mapeamento 3D de alta densidade e precisão utilizando tecnologia lidar embarcada no sensor DJI Zenmuse L2. Ideal para áreas com vegetação densa ou difícil acesso, gerando nuvens de pontos, modelos digitais de terreno e ortomosaicos com excelente acurácia.",
      color: "from-[#011B8B] to-[#2F81BF]",
    },
    {
      icon: Cog,
      title: "Batimetria",
      description:
        "Levantamento do relevo subaquático de rios, lagos e reservatórios, fundamental para estudos ambientais, cálculos de volume e planejamento de obras hidráulicas e dragagem.",
      color: "from-[#2F81BF] to-[#011B8B]",
    },
    {
      icon: Cog,
      title: "Locação de Obra",
      description:
        "Marcação em campo de eixos, fundações, estruturas e níveis conforme projeto executivo, garantindo a correta implantação das etapas construtivas.",
      color: "from-[#2F81BF] to-[#011B8B]",
    },
    {
      icon: Cog,
      title: "Monitoramento Topográfico em Tempo Real",
      description:
        "Acompanhamento contínuo de estruturas e encostas com sensores geotécnicos e estações robóticas, proporcionando dados precisos para controle de deformações e segurança.",
      color: "from-[#2F81BF] to-[#011B8B]",
    },
    {
      icon: Cog,
      title: "Inspeção de Barragens",
      description:
        "Levantamentos e análises técnicas para avaliar a integridade estrutural de barragens, com foco em estabilidade, segurança operacional e atendimento às normas legais.",
      color: "from-[#2F81BF] to-[#011B8B]",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-[#FFFFFF] to-[#011B8B]/5"
    >
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
              Nossos <span className="text-[#2F81BF]">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-[#68FFFF] mx-auto mb-6"></div>
            <p className="text-lg text-[#353535] max-w-3xl mx-auto">
              Soluções completas em agrimensura e geotecnologia com a precisão
              que seu projeto exige
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="group bg-[#FFFFFF] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#011B8B]/10">
                  {/* Card Header */}
                  <div
                    className={`bg-gradient-to-r ${service.color} p-6 text-[#FFFFFF]`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#68FFFF] rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-[#011B8B]" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-[#353535] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#011B8B] text-[#011B8B] hover:bg-[#011B8B] hover:text-[#FFFFFF] transition-all duration-300"
                    >
                      <Link href="#contato">Solicitar Orçamento</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gradient-to-r from-[#011B8B] to-[#2F81BF] p-8 rounded-2xl text-[#FFFFFF]">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de uma Solução Personalizada?
              </h3>
              <p className="text-[#FFFFFF]/90 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para desenvolver a solução ideal para
                seu projeto específico
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#68FFFF] text-[#011B8B] hover:bg-[#FFFFFF] hover:text-[#011B8B] font-bold"
              >
                <Link href="#contato">Fale com Nossos Especialistas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
