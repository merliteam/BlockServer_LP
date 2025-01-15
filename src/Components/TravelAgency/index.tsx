import Image from "next/image";
import BotonDescargar from "../BotonDescargar";

export default function TravelAgency() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-start text-white overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo-travel-agency.svg" // Ruta de la imagen
          alt="Travel Agency Background"
          layout="fill"
          //objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-6 ml-16">
        <h2 className="text-[48px] leading-tight uppercase font-minecraft">
          Pronto podras <br/>tener tu propio <br/> servidor de <br/> Minecraft!
        </h2>
        <p className="text-[18px] font-bold leading-relaxed mt-4">
          Block Server es la plataforma definitiva de <br/> hosting diseñada
          especialmente para <br/> amantes de Minecraft.
        </p>
       
      </div>
    </div>
  );
}
