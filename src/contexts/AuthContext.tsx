"use client"; // Si usás el App Router de Next 13

import { useRouter } from "next/navigation"; // Cambiado a useRouter de next/navigation
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthContextProps = {
  user: User | null;
  login: (identifier: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  // Obtener perfil del usuario logueado desde el token
  async function fetchUserProfile(token: string) {
    try {
      const res = await fetch("http://localhost:4000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data); // { id, username, email, ... }
      } else {
        console.error("No se pudo obtener el perfil:", res.status);
      }
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  }

  // Registro
  async function register(username: string, email: string, password: string) {
    try {
      const res = await fetch("http://localhost:4000/api/auth/local/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error en registro:", errorData);
        throw new Error(errorData?.error?.message || "Error al registrarse.");
      }

      const data = await res.json();
      console.log("Registro exitoso:", data);
      // Si querés autologuear aquí, podrías hacer:
      // localStorage.setItem("jwt", data.jwt);
      // setUser(data.user);
    } catch (error) {
      console.error("Error de red:", error);
      throw error; // Para que el componente pueda capturar el mensaje
    }
  }

  // Login
  async function login(identifier: string, password: string) {
    try {
      const res = await fetch("http://localhost:4000/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error en login:", errorData);
        throw new Error(errorData?.error?.message || "Error al iniciar sesión.");
      }

      const data = await res.json();
      // data = { jwt, user: { id, username, email, ... } }

      localStorage.setItem("jwt", data.jwt);
      setUser(data.user);
    } catch (error) {
      console.error("Error de red en login:", error);
      throw error; // Para que el componente maneje el error
    }
  }


 const router = useRouter(); // Si estás usando el router de Next.js

  // Logout
  function logout() {
    localStorage.removeItem("jwt");
    setUser(null);
    // Redirigir a la página de inicio o donde quieras
    router.push("/"); // Si estás usando el router de Next.js  
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para consumir nuestro contexto
export function useAuth() {
  return useContext(AuthContext);
}
