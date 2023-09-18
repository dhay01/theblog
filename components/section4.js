import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/spinner";

export default function Section4() {
    const { data, isLoading, isError } = fetcher('api/posts');

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>;

    return (
        <section className="container mx-auto md:px-20 py-10">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h2 className="font-bold text-3xl py-12 text-left text-purple-300">
                        Health
                    </h2>
                    <div className="flex flex-col gap-6">
                        {data[1] ? <Post data={data[1]}></Post> : <></>}
                        {data[2] ? <Post data={data[2]}></Post> : <></>}
                        {data[3] ? <Post data={data[3]}></Post> : <></>}
                    </div>
                </div>
                <div className="item">
                    <h2 className="font-bold text-3xl py-12 text-left text-purple-300">
                        Technology
                    </h2>
                    <div className="flex flex-col gap-6">
                        {data[4] ? <Post data={data[4]}></Post> : <></>}
                        {data[5] ? <Post data={data[5]}></Post> : <></>}
                        {data[2] ? <Post data={data[2]}></Post> : <></>}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Post({ data }) {
    const { id, category, img, published, author, title, description } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <a>
                    <Image src={"/images/articles/03.png"} className="rounded" width={200} height={150} />
                </a>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}>
                        <a className="text-purple-300 hover:text-purple-300">{category}</a>
                    </Link>
                    <Link href={"/"}>
                        <a className="text-gray-400 hover:text-gray-500"> - {published}</a>
                    </Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <a className="text-xl font-bold  text-gray-200 hover:text-gray-600 line-clamp-2">{title}</a>
                    </Link>
                </div>
                {author ? <Author /> : <></>}
            </div>
        </div>
    );
}
