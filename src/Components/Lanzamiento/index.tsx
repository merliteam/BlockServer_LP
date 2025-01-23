import Image from "next/image";

export default function Lanzamiento(){
    return(
        <div className="flex flex-col gap-6  md:p-16 min-h-screen bg-[#252B42] md:bg-gray-950 justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center px-14 md:px-48">
                    <h3 className="text-white font-semibold text-[45px] text-center">
                        Lanzamiento Global en 2025
                    </h3>
                    <p className="hidden md:block text-gray-300 leading-relaxed text-justify">
                    Block Server estará disponible en todo el mundo a partir de 2025. Podrás acceder a tu <br/>servidor desde cualquier lugar, en cualquier momento, con tan solo un clic. Ya sea que <br/> <span className="block text-center">estés en casa, en el trabajo o de viaje, llevar tu experiencia de Minecraft al siguiente </span> <span className="block text-center">nivel nunca será tan fácil. ¡Prepárate para descubrir una nueva forma de jugar sin </span>  <span className="block text-center">fronteras!</span> 
                    </p>
            </div>
            <div className="py-10 hidden md:block">
                <Image src={'/planetaLanzamiento.svg'} alt="lanzamiento" width={800} height={800}/>
            </div>
            <div className="md:hidden py-10">
                <Image src={'/planetaLanzamiento.svg'} alt="lanzamiento" width={350} height={350}/>
            </div>
        </div>
    )
}