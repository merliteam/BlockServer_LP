"use client";

import { porQueElegirnosCard } from "@/config/models";
import Image from "next/image";
import { useState } from "react";

type Props = {
  card: porQueElegirnosCard;
};

export default function PorQueElegirnosCard({ card }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div key={card.title}
      className={`
        flex flex-col justify-start 
        gap-8  md:gap-4  md:p-6 bg-white
        rounded-xl shadow-lg pb-10 md:pb-1 w-[300px] md:max-w-max
        transition-all
      `}
      // Puedes cambiar a onClick si prefieres expandir al hacer click
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Contenedor de imagen superior */}
      <div className="flex gap-7 px-7 pt-7 md:p-1">
        <Image
          src="/cubo.svg"
          width={80}
          height={80}
          alt="Por qué elegirnos"
        />
        <Image src="/free.svg" alt="freeimage" width={40} height={40} />
      </div>

      {/* Título */}
      <h2 className="font-semibold text-black text-[29px] md:text-xl items-center px-7 md:p-1">
        {card.title}
      </h2>

      {/* Sección colapsable: al expandirse, empuja las demás tarjetas */}
      <div
        className={`
          w-full
          overflow-hidden
          transition-[max-height] duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="bg-white px-7 md:p-4 rounded-b-xl m-0 border-none ">
          {card.items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-9 md:gap-4 mb-2">
              {/* Ícono */}
              <div className="flex items-center justify-center w-8 h-8 bg-[rgba(251,94,64,0.1)] rounded-full shrink-0">
                <Image
                  src="/checkImage.svg"
                  alt="Check"
                  width={14}
                  height={14}
                  className="w-4 h-4"
                />
              </div>
              {/* Texto del ítem */}
              <span className="text-black text-[16px] md:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
