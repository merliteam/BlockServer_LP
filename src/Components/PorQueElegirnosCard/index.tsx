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
    <div
      key={card.title}
      className={`relative z-0 flex flex-col justify-start items-start gap-4 p-6 bg-white ${
        isOpen ? "rounded-t-xl" : "rounded-xl"
      } shadow-lg  transition-all`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Contenedor de imagen superior */}
      <div className="flex justify-center items-center gap-7">
        <Image
          src="/cubo.svg"
          width={80}
          height={80}
          alt="Por qué elegirnos"
        />
        <Image src={"free.svg"} alt="freeimage" width={40} height={40} />
      </div>

      {/* Título */}
      <h2 className="font-semibold text-black text-xl text-center">
        {card.title} 
      </h2>

      {/* Lista de puntos como menú deslizable */}
      <ul
  className={`absolute flex flex-col gap-3 z-10 left-0 right-0  top-[100%] bg-white p-4 rounded-b-xl m-0 border-none shadow-md transform transition-transform duration-[600ms] ${
    isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
  }`}
      >
        {card.items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4 mb-2">
            {/* Contenedor del ícono */}
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
            <span className="text-black text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
