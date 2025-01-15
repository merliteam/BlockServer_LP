import Image from "next/image"
import ServerCreationWizard from "../ServerCreationWizard/ServerCreationWizard"
import { AppProps } from "next/app"
export default function FormsParaCrearServer({pageProps}:AppProps) {
    return(
      
      <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/minecraft-fondo.webp"
        layout="fill"
        objectFit="cover"
        alt="minecraft-logo"
        className="absolute inset-0 z-0 blur-md"
      />
      {/* Contenido principal */}
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <ServerCreationWizard {...pageProps} />
      </div>
    </div>
    )
}