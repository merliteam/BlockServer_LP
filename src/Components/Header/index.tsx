import Image from "next/image";
import Link from "next/link";

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
                             <Link href="/comenzar" className="text-white">Comenzar</Link>
                             <Link href="/" className="rounded-lg text-white bg-gradient-to-r from-purpleStart to-purpleEnd px-5 py-2 transition-all hover:from-[#683ec2] hover:to-[#8f6edc]">Ingresar</Link>

                    </div>
            </div>
            
        </header>
    )
}