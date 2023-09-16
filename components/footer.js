import Link from 'next/link'
import {BsStars} from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="relative mt-16 bg-backgroundPruple">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16  text-purple-400"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="#332F4A"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />

            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">

                            <div className="shrink w-80 sm:order-2 flex ">
                                <Link href={"/"}>
                                    <a> <BsStars color="#ffffff" size="3em"/></a>
                                </Link>

                            </div>

                    </div>
                </div>
                <div
                    className="flex flex-col justify-between pt-5 pb-10  sm:flex-row">

                </div>
            </div>
        </div>
    );


}