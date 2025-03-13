"use client";
import BlogCard from "@/Components/BlogCard";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { blogsConfig } from "@/config/config";
import Image from "next/image";
import { useState } from "react";

export default function Blog(){
    
    const [hayBlogs, setHayBlogs] = useState(false);


    return(

        <div className=" min-h-screen">
            <Header />
            {
                hayBlogs ?         <div className="flex flex-col justify-center items-center gap-8 p-20 mt-9 bg-black">
           
                {/* Noticia en primera plana */}
                    <div className="bg-gray-600 h-[600px] w-[1000px] justify-center items-center flex">
                            NOTICIA EN PRIMERA PLANA
                    </div>
                
                {/* Blogs */}
                <div className="grid grid-cols-3 gap-12">
                {blogsConfig.map(blog => (
                    <BlogCard {...blog} key={blog.date}/>
                ))}
                </div>
    
        </div>
        :

        <div className="flex flex-col justify-center items-center gap-8 p-36 bg-black">
                <Image src={'/happy_creeper_head.babdbc4478f5ffbe44d9.png'} alt="Creeper" width={400} height={400} />
                <p className="text-3xl text-white text-center">Aún no hay blogs disponibles <br />Vuelve pronto!</p>
        </div>

            }
   
            

            <Footer />
        </div>
    )
}