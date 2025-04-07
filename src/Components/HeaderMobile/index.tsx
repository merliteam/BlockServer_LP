"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";



export default function HeaderMobile() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="md:hidden  flex justify-between items-center p-5 w-full z-50 bg-transparent absolute top-0">
      {/* Logo */}
      <Link href={'/'} >
      <Image src="/block-server.svg" alt="Logo" width={192} height={30} />
      </Link>
      {/* Botón de menú/desplegable */}
      <button onClick={toggleMenu}>
        <Image src="/deslizar.svg" alt="Menu" width={26} height={16} />
      </button>

      <div
        className={`md:hidden fixed inset-0 bg-white text-black z-50 flex flex-col transition-all duration-500 ease-in-out ${
          openMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Botón de cerrar */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpenMenu(false)} className="transition-transform duration-300 hover:rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Enlaces de navegación centrados */}
        <div className="flex flex-col items-center justify-center gap-8">
          <a
            href="/blog"
            className={`text-black font-medium text-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-full text-center py-6 ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Blog
          </a>
          <a
            href="/guias"
            className={`text-black font-medium text-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-full text-center py-6 ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Guías
          </a>
          <a
            href="/auth"
            className={`text-black font-medium text-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-full text-center py-6 ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            Ingresar
          </a>
        </div>
      </div>
    </div>
  );
}
