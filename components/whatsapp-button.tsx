"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const whatsappNumber = "5531992798003"; // Substitua pelo número real
  const message =
    "Olá! Gostaria de solicitar um orçamento para serviços de agrimensura.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-[#FFFFFF] w-38 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      size="lg"
    >
      <MessageCircle className="w-6 h-6" />
      <span>Fale no WhatsApp</span>
    </Button>
  );
}
