import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ];

  const services = [
    {
      href: "#servicos",
      label: "Georreferenciamento de Imóveis Rurais",
    },
    { href: "#servicos", label: "Levantamentos Topográficos" },
    { href: "#servicos", label: "Inspeção de Barragens" },
    { href: "#servicos", label: "Batimetria" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#353535] text-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-[#68FFFF]">EM</span> Agrimensura
              </h3>
              <p className="text-[#FFFFFF]/80 text-sm leading-relaxed">
                Engenharia, topografia e geotecnologia com precisão técnica e
                compromisso com resultados reais.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#68FFFF]" />
                <a
                  href="tel:+5531992798003"
                  className="text-sm text-[#FFFFFF]/80 hover:text-[#68FFFF] transition-colors"
                >
                  (31) 9 9279-8003
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#68FFFF]" />
                <a
                  href="mailto:erik@emagrimensura.com.br"
                  className="text-sm text-[#FFFFFF]/80 hover:text-[#68FFFF] transition-colors"
                >
                  erik@emagrimensura.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#68FFFF]">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF]/80 hover:text-[#68FFFF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#68FFFF]">
              Nossos Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-[#FFFFFF]/80 hover:text-[#68FFFF] transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#68FFFF]">
              Conecte-se Conosco
            </h4>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[#011B8B] rounded-full flex items-center justify-center hover:bg-[#2F81BF] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#FFFFFF]" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="text-xs text-[#FFFFFF]/60">
                ✓ Empresa certificada
              </div>
              <div className="text-xs text-[#FFFFFF]/60">
                ✓ Profissionais habilitados
              </div>
              <div className="text-xs text-[#FFFFFF]/60">
                ✓ Tecnologia de ponta
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFFFF]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#FFFFFF]/60">
              © {currentYear} EM Agrimensura - Engenharia e Mapeamento. Todos os
              direitos reservados.
            </div>
            <div className="flex space-x-6 text-xs text-[#FFFFFF]/60"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
