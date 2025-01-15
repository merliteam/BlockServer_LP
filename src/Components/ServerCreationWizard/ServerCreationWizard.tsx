"use client";
import { useState } from "react";
import ServerNameStep from "../steps/ServerNameStep";
import ServerTypeStep from "../steps/ServerTypeStep";
import { useServer } from "../../Utils/ServerContext";
import Image from "next/image";
import ServerVersionStep from "../steps/ServerVersionStep";
import CreateServerStep from "../steps/CreateServerStep";

const ServerCreationWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { serverConfig, setServerConfig } = useServer();

  // Función para avanzar al siguiente paso
  const nextStep = () => setCurrentStep((prev) => prev + 1);

  // Función para retroceder al paso anterior
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Renderizar el paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ServerNameStep onNext={nextStep} />;
      case 2:
        return <ServerTypeStep onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <ServerVersionStep onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <CreateServerStep onBack={prevStep} onFinish={nextStep} />;
      default:
        return <ServerNameStep onNext={nextStep} />;
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-[800px] bg-transparent p-12 sm:p-28">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/video.mp4"
      >
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* Contenedor principal */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Server Creation Wizard
        </h1>
        {renderStep()}
      </div>

      {/* Información adicional (si existe serverName) */}
      {serverConfig.serverName && (
        <div className="absolute bottom-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-lg flex items-center space-x-2">
          <p className="text-sm text-gray-800">{serverConfig.serverName}</p>
          <Image
            src="/png-transparent-brown-and-green-minecraft-cube-minecraft-logo-video-game-minecraft-skeleton-s-angle-grass-wood.png"
            alt="Minecraft Cubo"
            width={40}
            height={40}
            className="rounded-xl"
            priority // Optimización para cargar más rápido
          />
        </div>
      )}
    </div>
  );
};

export default ServerCreationWizard;
