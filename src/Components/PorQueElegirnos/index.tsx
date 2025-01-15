import Image from "next/image";
import { porQueElegirnosCards } from "../../config/config";
import PorQueElegirnosCard from "../PorQueElegirnosCard";

export default function PorQueElegirnos() {
  return (
    <div className="flex flex-col items-center bg-gray-950 py-24 pb-52 px-6 ">
      {/* Título */}
      <h1 className="font-bold text-white text-[36px] text-center mb-4">
        ¿Por qué elegirnos?
      </h1>
      <p className="text-white text-lg text-center mb-12">
        Aquí te contaremos sobre nosotros
      </p>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
  {porQueElegirnosCards.map((card, index) => (
        PorQueElegirnosCard({card})
  ))}
</div>


    </div>
  );
}
