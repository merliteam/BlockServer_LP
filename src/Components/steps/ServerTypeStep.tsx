"use client";
import { useState, useEffect } from "react";
import { useServer } from "../../Utils/ServerContext";
import Image from "next/image";

interface ServerTypeStepProps {
  onNext: () => void;
  onBack: () => void;
}

const ServerTypeStep = ({ onNext, onBack }: ServerTypeStepProps) => {
  const { serverConfig, setServerConfig } = useServer();
  const [technology, setTechnology] = useState<string | null>(null);


  
  // Simulación de una solicitud al endpoint
  useEffect(() => {
    // Simulando datos del JSON que aparece en la imagen
    
   // let Servers = fetchServerData()
    //setServerSelecteds(Servers);
  }, []);






  const handleTechnologySelect = (tech: string) => {
    setTechnology(tech);
    handleNext(); 
  };


  const handleNext = () => {
    if (technology === "bedrock" || technology === "java") {
      setServerConfig((prev: any) => ({
        ...prev,
        type: technology,
      }));
      onNext(); // Avanzar al siguiente paso
    }
  };

 
    



    


  return (
    <div className="flex flex-col gap-4 max-h-96 overflow-hidden overflow-y-auto">
      {/* Título */}
      <h2 className="text-xl font-bold">Step 2: Choose Server Type</h2>

        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={() => handleTechnologySelect("bedrock")}
            
            className="p-8 border border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none"
          >
            <Image
              width={30}
              height={30}
              src="/bedrock.webp" // URL de prueba
              alt="Bedrock"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-center mt-2">Bedrock</p>
          </button>
          <button
            onClick={() => handleTechnologySelect("java")}
            className="p-8 border border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none"
          >
            <Image
              src="/java.jpg" // URL de prueba
              alt="java"
              className="w-16 h-16 mx-auto"
              width={30}
              height={30}
              //priority // Optimización para cargar más rápido
              priority
              //mantener la relación de aspecto
              objectFit="contain"   // "cover" también funciona, depende de tu caso
              />
            <p className="text-center mt-2">Java</p>
          </button>
        </div>
      

      

      {/* Botones de navegación */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`py-2 px-4 rounded-lg ${
            technology !== null
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-800 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServerTypeStep;
