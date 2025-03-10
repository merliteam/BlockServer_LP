import Image from "next/image";
import Link from "next/link";
import BotonDescargar from "../BotonDescargar";

export default function Header(){
    return (
        <header>
            <div className="hidden md:flex justify-between items-center absolute top-0 w-full p-4 bg-black z-50">
                    <div className="ml-9">
                                { /* Logo */}
                                <Link href="/">
                                <Image src="/block-server.svg" alt="Logo" width={360} height={44} />
                                </Link>
                    </div>
                    <div className="flex gap-8 justify-center mr-4 items-center">
                                { /* Navigation */}
                            <Link href="/blog" className="text-white">Blog</Link>
                             <Link href="/guias" className="text-white">Guías</Link>
                             <BotonDescargar />
                             <Link href="/auth" className="rounded-lg text-white bg-gradient-to-r bg-blue-500 px-5 py-2 transition-all hover:bg-blue-700 hover:to-[#8f6edc]">Ingresar</Link>

                    </div>
            </div>
        </header>
    )
}