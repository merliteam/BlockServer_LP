"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderMobile from "@/Components/HeaderMobile"; // Asegurate de la ruta correcta

export default function TravelAgency() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative min-h-[800px] md:min-h-screen w-full flex flex-col text-white overflow-hidden">
      {/* ==== Imagen de fondo DESKTOP ==== */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/fondo-travel-agency.svg"
          alt="Travel Agency Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ==== Imagen de fondo MOBILE ==== */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <Image
          src="/bg-mobile.svg"
          alt="Travel Agency Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ==== Capa de oscurecimiento SOLO en mobile ==== */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none md:hidden z-0" />

      {/* ==== HEADER MOBILE (componente separado) ==== */}

      {/* ==== Menú desplegable para MOBILE ==== */}
    

      {/* CONTENIDO PARA MOBILE */}
      <div className="md:hidden mt-20 flex flex-col items-center justify-center px-2 gap-10 relative z-20">
        <h2 className="text-[40px] text-center font-extrabold text-[#FFFFFF]">
          ¡Pronto podrás tener tu propio servidor de Minecraft!
        </h2>
        <p className="text-[24px] text-center font-normal leading-relaxed px-6">
          Block Server es la plataforma definitiva de hosting diseñada
          especialmente para amantes de Minecraft.
        </p>
      </div>

      {/* CONTENIDO PARA DESKTOP */}
      <div className="hidden md:block relative z-10 w-full">
        <div className="max-w-3xl px-6 ml-16 mt-40">
          <h2 className="text-[48px] font-extrabold" style={{ fontFamily: "Montserrat, sans-serif" }}>
            ¡Pronto podrás <br />
            tener tu propio <br />
            servidor de <br />
            Minecraft!
          </h2>
          <p className="text-[18px] font-bold leading-relaxed mt-4">
            Block Server es la plataforma definitiva de <br />
            hosting diseñada especialmente para <br />
            amantes de Minecraft.
          </p>
        </div>
      </div>
    </div>
  );
}
