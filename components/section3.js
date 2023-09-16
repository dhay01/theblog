import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
export default function Section2() {

    return (
        <section className="container mx-auto md:px-20 py-10">

            <h1 className="text-4xl py-12 text-left text-white">
                most popular
            </h1>
        {/*    swiper*/}
<Swiper
slidesPerView={2}
loop={true}
autoplay={{
    delay:3000
}}
>
    <SwiperSlide>
        {Post()}
    </SwiperSlide>
    <SwiperSlide>
        {Post()}
    </SwiperSlide>
    <SwiperSlide>
        {Post()}
    </SwiperSlide>
    <SwiperSlide>
        {Post()}
    </SwiperSlide>
</Swiper>

        </section>
    )
}

function Post() {
    return (
        <div className="grid">
            <a className="block rounded overflow-hidden group-hover:shadow-lg transform transition-transform hover:scale-110">
                <Image src={"/images/articles/02.png"} className="rounded" width={600} height={400} />
            </a>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}><a className="text-purple-300 hover:text-purple-300">health</a></Link>
                    <Link href={"/"}><a className="text-gray-400 hover:text-gray-500"> - september 20, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-200 hover:text-gray-600">How Health-care waste can be hazardous </a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Healthcare waste can contain hazardous chemicals, such as disinfectants, pharmaceuticals, and solvents, which can pose a risk of harmful exposure to healthcare workers and the public
                </p>
                <Author></Author>
            </div>
        </div>

    )


}