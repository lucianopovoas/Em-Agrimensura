"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contato");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(31) 9 9279-8003",
      link: "tel:+5531992798003",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "erik@emagrimensura.com.br",
      link: "mailto:erik@emagrimensura.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 8h às 18h",
      link: "#",
    },
  ];

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-[#011B8B] to-[#2F81BF]"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
              Entre em <span className="text-[#68FFFF]">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-[#68FFFF] mx-auto mb-6"></div>
            <p className="text-lg text-[#FFFFFF]/90 max-w-3xl mx-auto">
              Pronto para transformar seu projeto em realidade? Fale conosco e
              receba um orçamento personalizado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#011B8B] mb-6">
                  Solicite seu Orçamento Gratuito
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#353535] font-medium mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="border-[#011B8B]/20 focus:border-[#011B8B]"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-[#353535] font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="border-[#011B8B]/20 focus:border-[#011B8B]"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#353535] font-medium mb-2">
                        Tipo de Projeto *
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("projectType", value)
                        }
                      >
                        <SelectTrigger className="border-[#011B8B]/20 focus:border-[#011B8B]">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mapeamento">
                            Mapeamento Topográfico
                          </SelectItem>
                          <SelectItem value="levantamento">
                            Levantamento Planialtimétrico
                          </SelectItem>
                          <SelectItem value="engenharia">
                            Engenharia Aplicada
                          </SelectItem>
                          <SelectItem value="geotecnologia">
                            Geotecnologia com Drones
                          </SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-[#353535] font-medium mb-2">
                        Localização do Projeto
                      </label>
                      <Input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className="border-[#011B8B]/20 focus:border-[#011B8B]"
                        placeholder="Cidade, Estado"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#353535] font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="border-[#011B8B]/20 focus:border-[#011B8B] min-h-[120px]"
                      placeholder="Descreva seu projeto e suas necessidades..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#011B8B] hover:bg-[#2F81BF] text-[#FFFFFF] font-bold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Solicitação
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Contact Info */}
              <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#68FFFF]/20">
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#68FFFF] rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-[#011B8B]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#FFFFFF]">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-[#FFFFFF]/80 hover:text-[#68FFFF] transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-[#68FFFF]/10 backdrop-blur-sm rounded-xl p-6 mt-6 border border-[#68FFFF]/30">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-[#68FFFF] mx-auto mb-2" />
                  <h4 className="font-bold text-[#FFFFFF] mb-2">
                    Resposta Rápida Garantida
                  </h4>
                  <p className="text-[#FFFFFF]/80 text-sm">
                    Retornamos seu contato em até 2 horas úteis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
