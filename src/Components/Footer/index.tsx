import Image from "next/image";

export default function Footer(){
    return(
        <footer className="p-8 w-full flex flex-col justify-center items-center gap-5 border-t-2 py-12">
                        <Image src="/block-server.svg" alt="Logo" width={360} height={44} />
                        <p className="text-[#9DA7B0]">
                        © 2024 Blockserver. All Rights Reserved.
                        </p>
        </footer>
    )
}