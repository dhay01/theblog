
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Format from '../layout/format'
import Head from 'next/head'
import Section1 from "../components/section1";
import Section2 from "../components/section2";
export default function Home() {
    return (
        <div className="bg-zinc-900">
            <Format>
<Section1/>
                <Section2/>
            </Format>

        </div>
    )
}
