"use client"

import { useEffect, useState } from "react"
import { Target, Shield, Zap, FileText, Users, Clock } from "lucide-react"

export default function Differentials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("diferenciais")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const differentials = [
    {
      icon: Target,
      title: "Precisão técnica inigualável",
      description: "Equipamentos de última geração e metodologias consolidadas",
    },
    {
      icon: Shield,
      title: "Compromisso com dados confiáveis",
      description: "Rigor técnico em cada medição e análise realizada",
    },
    {
      icon: Zap,
      title: "Tecnologia de ponta",
      description: "Drones, GPS RTK e software especializado",
    },
    {
      icon: FileText,
      title: "Relatórios claros e objetivos",
      description: "Documentação técnica de fácil compreensão",
    },
    {
      icon: Users,
      title: "Atendimento consultivo",
      description: "Suporte especializado em todas as etapas do projeto",
    },
    {
      icon: Clock,
      title: "Cumprimento rigoroso de prazos",
      description: "Planejamento eficiente e execução pontual",
    },
  ]

  return (
    <section id="diferenciais" className="py-20 bg-[#011B8B]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
              Nossos <span className="text-[#68FFFF]">Diferenciais</span>
            </h2>
            <div className="w-24 h-1 bg-[#68FFFF] mx-auto mb-6"></div>
            <p className="text-lg text-[#FFFFFF]/90 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de agrimensura e geotecnologia
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 150} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="group bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-6 hover:bg-[#FFFFFF]/20 transition-all duration-300 border border-[#68FFFF]/20">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#68FFFF] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <differential.icon className="w-8 h-8 text-[#011B8B]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{differential.title}</h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">{differential.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-[#68FFFF]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#68FFFF]/30">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Experimente a Diferença da EM Agrimensura</h3>
              <p className="text-[#FFFFFF]/90 mb-6 max-w-2xl mx-auto">
                Junte-se aos nossos clientes que já experimentaram a excelência em serviços de agrimensura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center space-x-2 text-[#68FFFF]">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Precisão Garantida</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#68FFFF]">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Entrega no Prazo</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#68FFFF]">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Dados Confiáveis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
