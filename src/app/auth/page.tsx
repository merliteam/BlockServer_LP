"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ComingSoonTimer from "@/Components/coming-soon-timer/coming-soon";
import { useAuth } from "@/contexts/AuthContext";

// Importamos framer-motion y el icono
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Si usás componentes UI, importalos. Si no, se usan clases CSS.
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);


  


  // Estados para login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Estados para registro
  const [regNombre, setRegNombre] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  // Estado para manejar errores y mostrarlos en rojo
  const [error, setError] = useState("");
  // Estado para controlar el cartel de éxito
  const [showSuccess, setShowSuccess] = useState(false);
  
  const router = useRouter();
  // Consumimos el AuthContext
  const { user, login: authLogin, register: authRegister, logout } = useAuth();

  useEffect(() => {
    if(user){
      router.push("/"); // Redirigir a la página de inicio si el usuario ya está logueado
    }
  }, [])




  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // LOGIN
      try {
        await authLogin(loginEmail, loginPassword);
        console.log("Sesión iniciada");

        // Mostrar notificación de éxito
        setShowSuccess(true);
        // Ocultar el cartel después de 3 segundos y redirigir
        setTimeout(() => {
          setShowSuccess(false);
          router.push("/");
        }, 3000);
      } catch (err: any) {
        console.error("Error al iniciar sesión:", err);
        setError(err.message || "Error al iniciar sesión.");
      }
    } else {
      // REGISTRO
      if (regPassword !== regConfirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      try {
        await authRegister(regNombre, regEmail, regPassword);
        // Opcional: cambiar a modo login para que el usuario inicie sesión manualmente
        setIsLogin(true);
      } catch (err: any) {
        console.error("Error al registrarse:", err);
        setError(err.message || "Error al registrarse.");
      }
    }
  };

  return (
    <div className="overflow-hidden relative">
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

        <div className="relative z-10 shadow-xl rounded-xl border border-black px-6 py-6 md:px-20 md:py-10 bg-white bg-opacity-90">
          <h2 className="font-bold text-3xl text-center mb-4">
            {isLogin
              ? "Inicia sesión"
              : "Crea una cuenta antes del lanzamiento y obtén acceso gratuito desde el primer día!"}
          </h2>

          {/* Mostrar error en rojo */}
          {error && (
            <div className="text-red-500 font-semibold mb-4 text-center">
              {error}
            </div>
          )}

          <form
            onSubmit={handleAuth}
            className="p-4 flex flex-col max-w-lg justify-center items-center gap-4 mx-auto"
          >
            {isLogin ? (
              <>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="loginEmail" className="text-lg font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    placeholder="Ingresa tu email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="loginPassword" className="text-lg font-medium text-gray-700">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="Ingresa tu contraseña"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    required
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
                <ComingSoonTimer />
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="regNombre" className="text-lg font-medium text-gray-700">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="regNombre"
                    placeholder="Tu nombre"
                    value={regNombre}
                    onChange={(e) => setRegNombre(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="regEmail" className="text-lg font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="regEmail"
                    placeholder="Ingresa tu email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="regPassword" className="text-lg font-medium text-gray-700">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="regPassword"
                    placeholder="Ingresa tu contraseña"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="regConfirmPassword" className="text-lg font-medium text-gray-700">
                    Confirmar Contraseña:
                  </label>
                  <input
                    type="password"
                    id="regConfirmPassword"
                    placeholder="Confirma tu contraseña"
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                    required
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

      {/* Cartel animado de éxito */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white overflow-hidden rounded-lg">
            <div className="p-4 flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="h-6 w-6 mr-3 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="font-medium">Inicio de sesión correcto</h3>
                <p className="text-sm text-white/80">Bienvenido de vuelta a tu cuenta!</p>
              </motion.div>
            </div>
            <motion.div
              className="h-1 bg-white/30"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
