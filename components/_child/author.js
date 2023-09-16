import Image from "next/image"
import Link from "next/link"

export default function Author() {
    return (
        <div className="author flex py-5">
            <Image src={"/images/author/author1.jpeg"} width={60} height={60} className="rounded-full" />
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"}>
                    <a className="text-md font-bold text-zinc-600 hover:text-purple-300">dhay salih</a>

                </Link>
                <span className="text-sm text-gray-400">
       author
                    </span>
            </div>
        </div>
    )
}
