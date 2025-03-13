"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useState } from "react";
import Image from "next/image";
export default function Guias(){

    const [hayBlogs, setHayBlogs] = useState(false);



    return(
        <div className="bg-black min-h-screen">
            <Header />
                        {
                            hayBlogs ?
                            <div>

                            </div>

                            :

                               <div className="flex flex-col justify-center items-center gap-8 p-36 bg-black">
                                            <Image src={'/happy_creeper_head.babdbc4478f5ffbe44d9.png'} alt="Creeper" width={400} height={400} />
                                            <p className="text-3xl text-white text-center">Aún no hay guias disponibles <br />Vuelve pronto!</p>
                                    </div>
}
            <Footer />
        </div>
    )
}