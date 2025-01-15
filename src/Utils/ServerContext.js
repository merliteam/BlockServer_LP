"use client";

import { createContext, useContext, useState } from "react";

// Crear el contexto
const ServerContext = createContext();

// Proveedor del contexto
export const ServerProvider = ({ children }) => {
  const [serverConfig, setServerConfig] = useState({
    name: "", // Nombre del servidor
    serverName: "", // Tipo del servidor (Bedrock o Java)
    version: "", // Versión del servidor
  });

  return (
    <ServerContext.Provider value={{ serverConfig, setServerConfig }}>
      {children}
    </ServerContext.Provider>
  );
};

// Hook para usar el contexto
export const useServer = () => useContext(ServerContext);
