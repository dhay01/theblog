import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image"
import Related from "../../components/_child/related";
import Link from "next/link";
import getPost from '../../lib/helper';
import fetcher from '../../lib/fetcher'
import Spinner from "../../components/_child/spinner";
import Error from "../../components/_child/spinner";
import {useRouter} from "next/router";
import {SWRConfig} from "swr";

export default function Page({fallback}) {
    const router = useRouter()
    const {postId} = router.query;
    const {data, isLoading, isError} = fetcher(`api/posts/${postId}`)

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>

    return (
        <SWRConfig value={{fallback}}>
            <Article {...data}></Article>
        </SWRConfig>

    )
}

export function Article({subtitle, category, img, published, author, title, description}) {


    return (
        <Format>
            <div className="bg-zinc-900">
                <section className="container mx-auto md:px-2 py-16 w-1/2">
                    <div className="flex flex-col items-center">
                        {author ? <Author/> : <></>}
                        <div className="post py-10">
                            <h1 className="text-4xl font-bold text-center pb-5">
                                {title} </h1>
                            <p className="text-gray-300 text-lg text-center">
                                {subtitle}
                            </p>
                            <p className="text-gray-600 text-sm text-center">
                                {published}
                            </p>
                            <div className="py-10">
                                <Image src={"/images/articles/02.png"} width={900} height={600} className=""></Image>
                            </div>
                            <div className="content text-gray-300 text-lg gap-4 flex flex-col">
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Related></Related>
                </section>
            </div>
        </Format>
    );
}

export async function getStaticProps({params}) {
    const posts = await getPost(params.postId)
    return {
        props: {
            fallback:{
                '/api/posts':posts
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })
    return {
        paths, fallback: false
    }
}

function Post() {
    return (
        <div className="flex gap-5">

            <div className="image flex flex-col justify-start">
                <a><Image src={"/images/articles/03.png"} className="rounded" width={200} height={150}/></a>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-purple-300 hover:text-purple-300">health</a></Link>
                    <Link href={"/"}><a className="text-gray-400 hover:text-gray-500"> - september 20, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-200 hover:text-gray-600">How Health-care
                        waste can be hazardous</a></Link>
                </div>
                <Author></Author>
            </div>
        </div>

    )


}