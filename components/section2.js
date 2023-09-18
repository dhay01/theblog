import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/spinner"

export default function Section2() {
    const {data, isLoading, isError} = fetcher('api/posts')

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>


    return (
        <section className="container mx-auto md:px-20 py-10">

            <h1 className="text-4xl py-12 text-left text-white">
                Trending
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map((value, index) => (
                        <Post data={value} key={index}></Post>
                    ))
                }

            </div>
        </section>
    )

}

function Post({ data }) {
    const { id, category, img, published, author, title, description } = data;

    // Truncate the description to 100 characters
    const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

    return (
        <div className="item">
            <div className="images group relative">
                <Link href={`/posts/${id}`}>
                    <a className="block rounded overflow-hidden group-hover:shadow-lg transform transition-transform hover:scale-110">
                        <Image
                            src={"/images/articles/03.png"}
                            className="rounded"
                            width={500}
                            height={350}
                            onError={(e) => {
                                console.error("Error loading image:", e);
                            }}
                        />
                    </a>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <a className="text-purple-300 hover:text-purple-300">{category}</a>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <a className="text-gray-400 hover:text-gray-500"> - {published}</a>
                    </Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}>
                        <a className="text-xl font-bold text-gray-200 hover:text-gray-600">
                            {title}
                        </a>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">{truncatedDescription}</p>
                {author ? <Author/> : <></>}
            </div>
        </div>
    );
}


