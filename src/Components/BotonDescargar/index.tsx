import Link from "next/link";

export default function BotonDescargar(){
    return(
        <Link href={"/auth"}>
        <button className=" px-5 py-2 bg-gradient-to-r from-slate-500 to-slate-800 rounded-md font-semibold text-white transition-all hover:from-slate-700 hover:to-slate-950">
            Descargar
        </button>
        </Link>
    
    )
}