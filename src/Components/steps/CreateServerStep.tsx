"use client";
import { useState } from "react";
import { useServer } from "../../Utils/ServerContext";

interface CreateServerStepProps {
  onBack: () => void;
  onFinish: () => void;
}

const CreateServerStep = ({ onBack, onFinish }: CreateServerStepProps) => {
  const { serverConfig } = useServer();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCreateServer = async () => {
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const token = localStorage.getItem("access_token"); // Obtener el token
      const response = await fetch("/api/create-server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(serverConfig), // Enviar datos recolectados
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || "Server created successfully!");
        onFinish(); // Avanzar al paso de finalización
      } else {
        throw new Error(result.message || "Failed to create the server.");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Título */}
      <h2 className="text-xl font-bold">Step 4: Create Server</h2>

      {/* Resumen de la configuración del servidor */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-medium">Server Configuration</h3>
        <p><strong>Name:</strong> {serverConfig.name}</p>
        <p><strong>Type:</strong> {serverConfig.serverName}</p>
        <p><strong>Version:</strong> {serverConfig.version}</p>
      </div>

      {/* Mensajes de éxito o error */}
      {successMessage && <p className="text-green-600 font-medium">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 font-medium">{errorMessage}</p>}

      {/* Botones */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleCreateServer}
          disabled={isSubmitting}
          className={`py-2 px-4 rounded-lg ${
            isSubmitting
              ? "bg-gray-300 text-gray-800 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isSubmitting ? "Creating..." : "Create Server"}
        </button>
      </div>
    </div>
  );
};

export default CreateServerStep;
