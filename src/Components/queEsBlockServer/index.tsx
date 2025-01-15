  "use client";
  import { useState } from "react";
  import Image from "next/image";

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
        // Posición del contenedor global
        top: "top-[-80px]",
        left: "left-[-142px]",
        // Posición del texto relativo a la burbuja
        textTop: "top-[-70px]",
        textLeft: "left-[-200px]", // ejemplo: a la derecha de la burbuja
        titleColor: "text-[#E15E5A]",
      },
      {
        id: 2,
        titulo: "Soporte de Plataforma",
        descripcion: "Soporta tanto las ediciones Java como Bedrock",
        svgUrl: "/bubble-blue.svg",
        fondo: "/bubble-blue-fondo.svg",
        angle: 72,
        top: "top-[-180px]",
        left: "left-[222px]",
        textTop: "top-[-90px]",
        textLeft: "left-[210px]",
        titleColor: "text-[#17B0E3]",

      },
      {
        id: 3,
        titulo: "Opciones de Personalización",
        descripcion: "Permite la personalización detallada de la configuración del juego",
        svgUrl: "/bubble-green.svg",
        fondo: "/bubble-green-fondo.svg",
        angle: 144,
        top: "top-[131px]",
        left: "right-[-193px]",
        textTop: "top-[-50px]",
        textLeft: "left-[220px]",
        titleColor: "text-[#3BC482]",

      },
      {
        id: 4,
        titulo: "Herramientas Intuitivas",
        descripcion: "Herramientas fáciles de usar para administrar el servidor",
        svgUrl: "/bubble-lime.svg",
        fondo: "/bubble-greenLight-fondo.svg",
        angle: 216,
        top: "bottom-[-168px]",
        left: "right-[28px]",
        textTop: "top-[190px]",
        textLeft: "left-[20px]",
        titleColor: "text-[#93C131]",

      },
      {
        id: 5,
        titulo: "Rendimiento Óptimo",
        descripcion: "Ofrece una experiencia de juego fluida y eficiente",
        svgUrl: "/bubble-yellow.svg",
        fondo: "/bubble-orange-fondo.svg",
        angle: 288,
        top: "bottom-[-75px]",
        left: "left-[-122px]",
        textTop: "top-[-20px]",
        textLeft: "left-[-230px]",
        titleColor: "text-[#DD8433]",

      },
    ];

    // Distancia de la burbuja al punto central (con rotate + translate)
    const normalRadius = 105;
    const hoverRadius = 125;

    return (
      <div className="p-96 flex flex-col gap-10 justify-center items-center">
        {/* Contenedor relativo para el círculo + botones */}
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          {/* Imagen circular de fondo */}
          <Image
            src={"/circle.svg"}
            alt="circle"
            fill
            className="object-contain"
          />
          {/* Imagen central (world) */}
          <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] 
                          -translate-x-1/2 -translate-y-1/2">
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
            // Transformaciones al hacer hover (se aleja un poco más)
            const defaultTransform = `rotate(${item.angle}deg) translate(${normalRadius}px) rotate(-${item.angle}deg)`;
            const hoverTransform = `rotate(${item.angle}deg) translate(${hoverRadius}px) rotate(-${item.angle}deg)`;

            return (
              // Contenedor global, posicionado según top/left
              <div
                key={item.id}
                className={`absolute ${item.top} ${item.left}`}
              >
                {/* Contenedor para la burbuja, con transform */}
                <div
                  className="relative" // Para posicionar el texto con top/left absolutos
                  style={{
                    transform: isHovered ? hoverTransform : defaultTransform,
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Botón (la burbuja) */}
                  <button
                    className="relative w-44 h-44 flex items-center justify-center"
                  >
                    {/* 1) SVG de la burbuja detrás */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={item.svgUrl}
                        alt="bubble shape"
                        fill
                        className="object-contain pointer-events-none"
                      />
                    </div>
                    {/* 2) Fondo encima, centrado */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <Image
                        src={item.fondo}
                        alt="bubble shape"
                        width={90}
                        height={90}
                        className="object-contain pointer-events-none"
                      />
                    </div>
                  </button>

                  {/* Bloque de texto (posicionado según textTop y textLeft) */}
                  <div
                    className={`absolute ${item.textTop} ${item.textLeft} max-w-[200px]`}
                  >
                    <h6 className={`text-2xl font-bold ${item.titleColor}`}>
                      {item.titulo}
                    </h6>
                    <br />
                    <p className="text-lg text-gray-700 leading-tight">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
