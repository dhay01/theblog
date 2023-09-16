import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";

export default function Section2() {
    return (
        <section className="container mx-auto md:px-20 py-10">

            <h1 className="text-4xl py-12 text-left text-white">
                Trending
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                { Post() }
                { Post() }
                { Post() }
                { Post() }
                { Post() }
                { Post() }

            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="images group relative">
                <Link href={"/"}>
                    <a className="block rounded overflow-hidden group-hover:shadow-lg transform transition-transform hover:scale-110">
                        <Image src={"/images/articles/01.png"} className="rounded" width={500} height={350} />
                    </a>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}><a className="text-purple-300 hover:text-purple-300">health</a></Link>
                    <Link href={"/"}><a className="text-gray-400 hover:text-gray-500"> - september 20, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-200 hover:text-gray-600">How Health-care waste can be hazardous </a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Healthcare waste can contain hazardous chemicals, such as disinfectants, pharmaceuticals, and solvents, which can pose a risk of harmful exposure to healthcare workers and the public
                </p>
                <Author></Author>
            </div>
        </div>

    )

}