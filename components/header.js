import { BsStars } from 'react-icons/bs';
import { FaBehanceSquare, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-zinc-900">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input
                        type="text"
                        className="input-text "
                        placeholder="Search..."
                    />
                </div>
                <div className="shrink w-80 sm:order-2 flex items-center justify-center">
                    <Link href={"/"}>
                        <a> <BsStars color="#ffffff" size="3em" /></a>
                    </Link>

                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href={"https://www.behance.net/dhaysalih"}>
                            <a><FaBehanceSquare color="#ffffff" /></a>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/dhay-salih-66ba6618a/"}>
                            <a><FaLinkedin color="#ffffff" /></a>
                        </Link>


                    </div>
                </div>
            </div>
        </header>
    );
}
