import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/spinner";
export default function Section2() {
    const { data, isLoading, isError } = fetcher('api/popular')

    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>
    return (
        <section className="container mx-auto md:px-20 py-10">

            <h1 className="text-4xl py-12 text-left text-white">
                most popular
            </h1>
        {/*    swiper*/}
            <Swiper
                slidesPerView={2}
            >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

function Post({data}) {
    const {id, category, img, published, author, title, description} = data;

    return (
        <div className="grid">
            <a className="block rounded overflow-hidden group-hover:shadow-lg transform transition-transform hover:scale-110">
                <Image src={"/images/articles/03.png"} className="rounded" width={600} height={400} />
            </a>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-purple-300 hover:text-purple-300"></a></Link>
                    {category}
                    <Link href={`/posts/${id}`}><a className="text-gray-400 hover:text-gray-500"> - {published}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-3xl md:text-4xl font-bold text-gray-200 hover:text-gray-600">{title} </a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description}
                </p>
                <Author></Author>
            </div>
        </div>

    )


}