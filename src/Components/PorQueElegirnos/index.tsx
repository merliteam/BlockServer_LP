import Image from "next/image";
import { porQueElegirnosCards } from "../../config/config";
import PorQueElegirnosCard from "../PorQueElegirnosCard";

export default function PorQueElegirnos() {
  return (
    <div className="flex flex-col items-center bg-[#292226] md:bg-gray-950 py-24 pb-32 md:pb-52 px-20 gap-14 md:gap-1">
      {/* Título */}
      <h1 className="font-normal text-white text-[36px] text-center mb-10">
        ¿Por qué<br/>elegirnos?
      </h1>
  

      {/* Contenedor de tarjetas */}
      <div className="flex flex-col items-center justify-center  md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 md:items-start">
  {porQueElegirnosCards.map((card, index) => (
        PorQueElegirnosCard({card})
    ))}
</div>


    </div>
  );
}
