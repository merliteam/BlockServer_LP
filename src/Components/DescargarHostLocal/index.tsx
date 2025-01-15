import Image from "next/image";
import BotonDescargar from "../BotonDescargar";

export default function DescargarHostLocal() {
  return (
    <div className="relative z-50 rounded-xl flex flex-col items-start justify-start  gap-2 px-12 py-12 text-white shadow-lg w-[1200px] mx-auto mt-12 overflow-hidden">
      {/* Imagen de Fondo con Overlay Oscuro */}
      <div className="absolute inset-0 -z-10">
        {/* Imagen de fondo */}
        <Image
          src="/machine.png"
          alt="Host Local Background"
          layout="fill" // La imagen ocupa todo el contenedor
          objectFit="cover" // Ajusta la imagen para cubrir el fondo
          objectPosition="center" // Centra la imagen en el fondo
        />
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      {/* Contenido */}
      <h4 className="font-semibold text-3xl text-left">
        Descargar Host Local!
      </h4>
      <p className="text-lg text-left text-[#F2F2F2] leading-relaxed">
        Con nuestro Host Local, tendrás todo lo que necesitas para configurar
        tu propio servidor Minecraft directamente en tu <br/>computadora. ¡Es rápido,
        seguro y completamente gratuito! Descubre la libertad de personalizar y
        controlar cada detalle de tu <br/>experiencia de juego.
      </p>
      <BotonDescargar />
    </div>
  );
}
