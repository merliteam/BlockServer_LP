"use client";
import { useState } from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="relative p-8 md:p-32 flex flex-col justify-center items-center min-h-screen w-full">
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

        <div className="relative z-10 shadow-xl rounded-xl border  border-black px-6 py-6 md:px-20 md:py-10 bg-white bg-opacity-90">
          <h2 className="font-bold text-3xl text-center mb-4">
            {isLogin ? "Login" : "Registro"}
          </h2>
          <form className="p-4 flex flex-col max-w-lg justify-center items-center gap-4 mx-auto">
            {isLogin ? (
              <>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="email" className="text-lg font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="password" className="text-lg font-medium text-gray-700">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
                >
                  Iniciar Sesión
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="nombre" className="text-lg font-medium text-gray-700">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu nombre"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
           
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="email" className="text-lg font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="password" className="text-lg font-medium text-gray-700">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-700">
                    Confirmar Contraseña:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirma tu contraseña"
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 w-full"
                >
                  Registrarse
                </button>
              </>
            )}
          </form>
          <div className="text-center mt-4">
            <button onClick={toggleMode} className="text-blue-500 underline text-sm">
              {isLogin
                ? "¿No tienes cuenta? Regístrate aquí"
                : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
