"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateInView from "../Animaciones/animate-in-view";

export default function QueEsBlockServer() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Datos de los 5 botones con posiciones definidas
  const items = [
    {
      id: 1,
      titulo: "Estabilidad y Seguridad",
      descripcion: "Asegura un rendimiento del servidor confiable y seguro",
      svgUrl: "/bubble-red.svg",
      fondo: "/bubble-red-fondo.svg",
      angle: 0,
      top: "top-[-74px]",
      left: "left-[-142px]",
      textTop: "top-[-70px]",
      textLeft: "left-[-235px]",
      titleColor: "text-[#E15E5A]",
      bgClor: "bg-red-400"
    },
    {
      id: 2,
      titulo: "Soporte de Plataforma",
      descripcion: "Soporta tanto las ediciones Java como Bedrock para versatilidad",
      svgUrl: "/bubble-blue.svg",
      fondo: "/bubble-blue-fondo.svg",
      angle: 72,
      top: "top-[-170px]",
      left: "left-[158px]",
      textTop: "top-[-90px]",
      textLeft: "left-[170px]",
      titleColor: "text-[#17B0E3]",
      bgClor: "bg-blue-400"
    },
    {
      id: 3,
      titulo: "Opciones de Personalización",
      descripcion: "Permite la personalización detallada de la configuración del juego",
      svgUrl: "/bubble-green.svg",
      fondo: "/bubble-green-fondo.svg",
      angle: 144,
      top: "top-[78px]",
      left: "right-[-178px]",
      textTop: "top-[-50px]",
      textLeft: "left-[180px]",
      titleColor: "text-[#3BC482]",
      bgClor: "bg-green-400"
    },
    {
      id: 4,
      titulo: "Herramientas Intuitivas",
      descripcion: "Proporciona herramientas fáciles de usar para la gestión del servidor",
      svgUrl: "/bubble-lime.svg",
      fondo: "/bubble-greenLight-fondo.svg",
      angle: 216,
      top: "bottom-[-150px]",
      left: "right-[-6px]",
      textTop: "top-[160px]",
      textLeft: "left-[-10px]",
      titleColor: "text-[#93C131]",
      bgClor: "bg-lime-400"
    },
    {
      id: 5,
      titulo: "Rendimiento Óptimo",
      descripcion: "Ofrece una experiencia de juego fluida y eficiente",
      svgUrl: "/bubble-yellow.svg",
      fondo: "/bubble-orange-fondo.svg",
      angle: 288,
      top: "bottom-[-83px]",
      left: "left-[-125px]",
      textTop: "top-[-20px]",
      textLeft: "left-[-300px]",
      titleColor: "text-[#DD8433]",
      bgClor: "bg-yellow-400"
    },
  ];

  // Distancia de la burbuja al punto central
  const normalRadius = 105;
  const hoverRadius = 100;

  return (

    <div>

        {/*Desktop*/}

      <div className="hidden p-80 pt-52 md:flex flex-col gap-10 justify-center items-center">
      {/* Contenedor relativo para el círculo + botones */}

      <AnimateInView animation="slide-up" duration={0.8} delay={0.2}>

    




      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Imagen circular de fondo */}
        <Image
          src={"/circle.svg"}
          alt="circle"
          fill
          className="object-contain"
        />

        {/* Imagen central (world) */}
        <div
          className="absolute top-1/2 left-1/2 w-[100px] h-[100px]
                     -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src={"/world.svg"}
            alt="world"
            fill
            className="object-contain"
          />
        </div>

        {/* Botones alrededor en círculo */}
        {items.map((item) => {
          const isHovered = hoveredId === item.id;

          // Transformaciones al hacer hover: mover y escalar
          const defaultTransform = `rotate(${item.angle}deg) translate(${normalRadius}px) rotate(-${item.angle}deg) scale(1)`;
          const hoverTransform = `rotate(${item.angle}deg) translate(${hoverRadius}px) rotate(-${item.angle}deg) scale(1.1)`;

          return (
            <div
              key={item.id}
              className={`absolute ${item.top} ${item.left}`}
            >
              <div
                className="relative"
                style={{
                  transform: isHovered ? hoverTransform : defaultTransform,
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Botón (la burbuja) */}
                <button className="relative w-36 h-36 flex items-center justify-center">
                  {/* SVG de la burbuja detrás */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.svgUrl}
                      alt="bubble shape"
                      fill
                      className="object-contain pointer-events-none"
                    />
                  </div>
                  {/* Fondo encima, centrado */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <Image
                      src={item.fondo}
                      alt="bubble shape"
                      width={70}
                      height={70}
                      className="object-contain pointer-events-none"
                    />
                  </div>
                </button>

                {/* Contenedor del texto con ancho fijo */}
                <div
                  className={`absolute ${item.textTop} ${item.textLeft} w-[250px]`}
                >
                  <h6
                    className={`
                      font-bold ${item.titleColor}
                      transition-colors duration-500 text-left
                      ${isHovered ? "text-3xl" : "text-2xl"}
                    `}
                  >
                    {item.titulo}
                  </h6>
                  <br />
                  <p
                    className={`
                      text-lg text-gray-700 leading-tight
                      transition-colors duration-500
                      ${isHovered ? "font-bold" : "font-normal"}
                    `}
                  >
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      </AnimateInView>
      </div>

        {/*Mobile*/}

        <div className="md:hidden flex relative justify-center items-center flex-col gap-12 p-32">

        <AnimateInView animation="slide-up" duration={0.8} delay={0.2}>


  {items.map((item) => (
    <div className="flex flex-col items-center justify-center gap-4 mt-10" key={item.id}>
      {/* Contenedor circular con fondo */}
      <div
        className={`
          w-24 h-24
          flex items-center justify-center
          rounded-full
          ${item.bgClor}
        `}
      >
        <Image
          src={item.fondo}
          alt="bubble shape"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h6 className={`font-bold ${item.titleColor} text-2xl text-center`}>
          {item.titulo}
        </h6>
        <p className="text-lg text-gray-700 leading-tight font-normal max-w-52 text-center">
          {item.descripcion}
        </p>
      </div>
    </div>
  ))}

</AnimateInView>

</div>




    </div>



   
  );
}
