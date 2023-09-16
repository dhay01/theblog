import Image from "next/image";
import Link from "next/link";
import Author from "./author";

export default function Related(){
    return(
  <section className="pt-20">
      <h2 className="font-bold text-3xl py-10 text-left text-purple-300">
          related
      </h2>
      <div className="flex flex-col gap-10">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
      </div>
  </section>


    )
}
function Post() {
    return (
        <div className="flex gap-5">

            <div className="image flex flex-col justify-start">
                <a><Image src={"/images/articles/03.png"} className="rounded" width={200} height={150} /></a>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-purple-300 hover:text-purple-300">health</a></Link>
                    <Link href={"/"}><a className="text-gray-400 hover:text-gray-500"> - september 20, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-200 hover:text-gray-600">How Health-care waste can be hazardous</a></Link>
                </div>
                <Author></Author>
            </div>
        </div>

    )


}