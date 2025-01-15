import BlogCard from "@/Components/BlogCard";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { blogsConfig } from "@/config/config";

export default function Blog(){
    
    return(

        <div className=" min-h-screen">
            <Header />
            <div className="flex flex-col justify-center items-center gap-8 p-20 mt-9 bg-black">
           
                    {/* Noticia en primera plana */}
                        <div className="bg-gray-600 h-[600px] w-[1000px] justify-center items-center flex">
                                NOTICIA EN PRIMERA PLANA
                        </div>
                    
                    {/* Blogs */}
                    <div className="grid grid-cols-3 gap-12">
                    {blogsConfig.map(blog => (
                        <BlogCard {...blog}/>
                    ))}
                    </div>
        
            </div>
            

            <Footer />
        </div>
    )
}