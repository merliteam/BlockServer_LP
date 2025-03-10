import Link from "next/link";

export default function BotonDescargar(){
    return(
        <Link href={"/comenzar"}>
            <button className=" px-5 py-2 bg-gradient-to-r from-purpleStart to-purpleEnd rounded-md font-semibold text-white transition-all hover:from-[#683ec2] hover:to-[#8f6edc]">
            Descargar
        </button>
        </Link>
    
    )
}