"use client";
import { useState } from "react";
import { useServer } from "../../Utils/ServerContext";

interface ServerNameStepProps {
  onNext: () => void;
}

const ServerNameStep = ({ onNext }: ServerNameStepProps) => {
  const { serverConfig, setServerConfig } = useServer();
  const [name, setName] = useState(serverConfig.name || "");
  const [status, setStatus] = useState<"OK" | "KO" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateName = async () => {
    setIsLoading(true);
    setStatus(null);

    try {
      const token = localStorage.getItem("access_token"); // Obtener el token
    /*  const response = await fetch("/api/validate-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      const result = await response.json(); */
      setIsLoading(false);

      if (true) {
        setStatus("OK");
        setErrorMessage("");
        setServerConfig((prev: any) => ({ ...prev, name })); // Guardar el nombre en el contexto
        onNext(); // Avanzar al siguiente paso
      } else {
        setStatus("KO");
       // setErrorMessage(result.message);
      }
    } catch (error) {
      setIsLoading(false);
      setStatus("KO");
      setErrorMessage("Error validating the name.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="serverName" className="text-lg font-medium text-gray-700">
        Server Name:
      </label>
      <input
        id="serverName"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setStatus(null); // Resetear el estado mientras escribe
        }}
        placeholder="Enter server name"
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      {status === "OK" && (
        <p className="text-green-600 font-medium">Name is available!</p>
      )}
      {status === "KO" && (
        <p className="text-red-600 font-medium">{errorMessage}</p>
      )}
      {isLoading && <p className="text-gray-500">Validating...</p>}
      <button
        onClick={validateName}
        disabled={!name || isLoading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
      >
        Confirm and Continue
      </button>
    </div>
  );
};

export default ServerNameStep;
