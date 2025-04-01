"use client";
import Image from "next/image";
import BotonDescargar from "../BotonDescargar";
import ComingSoonTimer from "../coming-soon-timer/coming-soon";
import Link from "next/link";
export default function DescargarHostLocal() {
  return (
    <div>
      {/* ========== DESKTOP ========== */}
      <div
        className="
          hidden
          md:flex
          relative
          z-50
          rounded-xl
          flex-col
          items-start
          justify-start
          gap-2
          px-12
          py-12
          text-white
          shadow-lg
          w-[1200px]
          mx-auto
          mt-12
          overflow-hidden
        "
      >
        {/* Imagen de Fondo con Overlay Oscuro */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/machine.png"
            alt="Host Local Background"
            fill
            className="object-cover object-center"
          />
          {/* Overlay oscuro encima de la imagen */}
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>

        {/* Contenido Desktop */}
        <h4 className="font-semibold text-3xl">Descargar Host Local!</h4>
        <p className="text-lg text-[#F2F2F2] leading-relaxed">
        Con nuestro Host Local, tendrás todo lo que necesitas para configurar tu propio servidor Minecraft directamente en tu computadora. ¡Es rápido, seguro y completamente gratuito! Descubre la libertad de personalizar y controlar cada detalle de tu experiencia de juego.

Además, si te registrás antes de la fecha de lanzamiento, tendrás acceso gratuito desde el primer día. ¡No te lo pierdas!
        </p>
       {/* <BotonDescargar /> */}
      <ComingSoonTimer />
      <Link href={'/auth'}>

       <button className="px-3 py-3 bg-gray-800 text-white rounded-lg mt-4 hover:bg-[#FFFFFF] hover:text-black transition duration-500 ease-in-out">
        Regístrate ahora
       </button>
       </Link>

      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden relative min-h-[600px] w-full bg-[#292226] overflow-hidden">
        {/* Imagen de fondo en mobile (a pantalla completa) */}
        <div className="rounded-xl overflow-hidden relative z-1 mt-10 mx-6">

          {/*Contenedor de imagen y texto*/}

          <div className="absolute inset-0 z-10">
          <Image
            src="/machine.png"
            alt="Host Local Background"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Overlay adicional para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black/75 z-20" />

        {/* Contenido Mobile, centrado */}
        <div className="relative z-30 flex flex-col items-center justify-center px-6 py-12 mt-20 h-full text-white gap-6">
          <h4 className="font-normal text-[48px] text-center">
            Descargar Host Local!
          </h4>
          <p className="text-[20px] text-center leading-relaxed">
          Con nuestro Host Local, tendrás todo lo que necesitas para configurar tu propio servidor Minecraft directamente en tu computadora. ¡Es rápido, seguro y completamente gratuito! Descubre la libertad de personalizar y controlar cada detalle de tu experiencia de juego.

Además, si te registrás antes de la fecha de lanzamiento, tendrás acceso gratuito desde el primer día. ¡No te lo pierdas!
          </p>
          {/*<BotonDescargar /> */}
          <ComingSoonTimer />
          <Link href={'/auth'}>

<button className="px-3 py-3 bg-gray-800 text-white rounded-lg mt-2 hover:bg-[#FFFFFF] hover:text-black transition duration-500 ease-in-out">
 Regístrate ahora
</button>
</Link>
        </div>

        </div>
       
      </div>
    </div>
  );
}
