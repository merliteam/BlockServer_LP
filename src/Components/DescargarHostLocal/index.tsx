"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BotonDescargar from "../BotonDescargar";
import ComingSoonTimer from "../coming-soon-timer/coming-soon";
import Link from "next/link";
import AnimateInView from "../Animaciones/animate-in-view";

export default function DescargarHostLocal() {
  const [diasRestantes, setDiasRestantes] = useState<number | null>(null);

  useEffect(() => {
    const hoy = new Date();
    const fechaObjetivo = new Date("2025-05-03");
    
    // Resetear horas para comparar solo fechas
    hoy.setHours(0, 0, 0, 0);
    fechaObjetivo.setHours(0, 0, 0, 0);

    const diferencia = fechaObjetivo.getTime() - hoy.getTime();
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    setDiasRestantes(dias >= 0 ? dias : 0);
  }, []);

  const mensaje = `Se de los primeros en registrarte para probar nuestro servidor local, que estará disponible gratis en ${diasRestantes ?? "N"} días. Además, recibirás importantes beneficios cuando este disponible la versión premium en la nube, por acompañarnos desde el principio!`;

  return (
    <div>
      {/* ========== DESKTOP ========== */}
      <div className="hidden md:flex relative z-50 rounded-xl flex-col items-start justify-start gap-2 px-12 py-12 text-white shadow-lg w-[1200px] mx-auto mt-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/machine.png" alt="Host Local Background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>

            <AnimateInView animation="zoom">


        <h4 className="font-semibold text-3xl">Descargar Host Local!</h4>
        <p className="text-lg text-[#F2F2F2] leading-relaxed">{mensaje}</p>
        <ComingSoonTimer />
        <Link href={"/auth"}>
          <button className="px-3 py-3 bg-gray-800 text-white rounded-lg mt-4 hover:bg-[#FFFFFF] hover:text-black transition duration-500 ease-in-out">
            Regístrate ahora
          </button>
        </Link>

        </AnimateInView>

      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden relative min-h-[600px] w-full bg-[#292226] overflow-hidden">
        <div className="rounded-xl overflow-hidden relative z-1 mt-10 mx-6">
          <div className="absolute inset-0 z-10">
            <Image src="/machine.png" alt="Host Local Background" fill className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-black/75 z-20" />
          <div className="relative z-30 flex flex-col items-center justify-center px-6 py-12 mt-20 h-full text-white gap-6">
          <AnimateInView animation="zoom">

           
            <h4 className="font-normal text-[48px] text-center">Descargar Host Local!</h4>
            <p className="text-[20px] text-center leading-relaxed">{mensaje}</p>
            <ComingSoonTimer />
            <Link href={"/auth"}>
              <button className="px-3 py-3 bg-gray-800 text-white rounded-lg mt-2 hover:bg-[#FFFFFF] hover:text-black transition duration-500 ease-in-out">
                Regístrate ahora
              </button>
            </Link>

          </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  );
}
