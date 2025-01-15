  "use client";
  import ServerCreationWizard from "@/Components/ServerCreationWizard/ServerCreationWizard";
  import { ServerProvider } from "../Utils/ServerContext";
  import type { AppProps } from "next/app";
  import Image from "next/image";
  import Header from "@/Components/Header";
  import TravelAgency from "@/Components/TravelAgency";
  import PorQueElegirnos from "@/Components/PorQueElegirnos";
  import CircleMenu from "@/Components/queEsBlockServer";
  import Lanzamiento from "@/Components/Lanzamiento";
  import Footer from "@/Components/Footer";
  import DescargarHostLocal from "@/Components/DescargarHostLocal";
  export default function Home({ Component, pageProps }: AppProps) {
    return (
      <ServerProvider>
        <Header/>
        <TravelAgency/>
        <div className="bg-gray-950 min-h-screen flex flex-col justify-center items-center">
        <DescargarHostLocal/>
        <PorQueElegirnos/>
        </div>
        <CircleMenu/>
        <Lanzamiento/>
        <Footer/>
      </ServerProvider>
    );
  }
