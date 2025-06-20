"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#ffffff]/95 backdrop-blur-sm shadow-lg"
          : "bg-[#ffffff]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-2">
            <div className="text-[#011a8b] font-bold text-xl tracking-wider">
              <img
                src="/Logo-Colorida.png"
                alt="Logo EM Agrimensura"
                className="h-64 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#011a8b] hover:text-[#2F81BF] transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#68FFFF] text-[#011B8B] hover:bg-[#2F81BF] hover:text-[#FFFFFF] font-bold transition-all duration-300"
            >
              <Link href="#contato">Orçamento Gratuito</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFFFFF] hover:text-[#68FFFF] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#011B8B] border-t border-[#2F81BF]">
            <nav className="flex flex-col space-y-4 py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#FFFFFF] hover:text-[#68FFFF] transition-colors duration-300 font-medium px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-[#68FFFF] text-[#011B8B] hover:bg-[#2F81BF] hover:text-[#FFFFFF] font-bold"
                >
                  <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
                    Orçamento Gratuito
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
