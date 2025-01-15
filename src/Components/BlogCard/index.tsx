import Image from "next/image";

type Props = {
    title: string;
    description: string;
    image: string;
    date: string;
};

export default function BlogCard({ title, description, image, date }: Props) {
    return (
        <div className="relative rounded-xl w-76 h-72 mt-20 flex flex-col justify-start items-center bg-gray-400 p-5">
            <div className="">
                <Image
                    src={image}
                    alt="blog"
                    objectFit="cover"
                    className="rounded-xl"
                    layout="fill"
                    objectPosition="center"

                />
            </div>
            <div className="bg-white  p-4 text-center w-full mt-60 z-10">
                <h1 className="text-sm font-bold">{title}</h1>
                <p className="mt-2 text-xs">{description}</p>
                
            </div>
        </div>
    );
}
