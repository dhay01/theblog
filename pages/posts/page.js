import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image"
import Related from "../../components/_child/related";
import Link from "next/link";

export default function Page() {
    return (
        <Format>
            <div className="bg-zinc-900">
                <section className="container mx-auto md:px-2 py-16 w-1/2">
                    <div className="flex flex-col items-center">
                        <Author></Author>
                        <div className="post py-10">
                            <h1 className="text-4xl font-bold text-center pb-5">
                                How Health-care waste can be hazardous </h1>
                            <p className="text-gray-300 text-lg text-center">
                                Healthcare waste can contain hazardous chemicals, such as disinfectants,
                                pharmaceuticals, and solvents, which can pose a risk of harmful exposure to healthcare
                                workers and the public
                            </p>
                            <div className="py-10">
                                <Image src={"/images/articles/02.png"} width={900} height={600} className=""></Image>
                            </div>
                            <div className="content text-gray-300 text-lg gap-4 flex flex-col">
                                <p>
                                    Healthcare waste (HCW) is generated in different healthcare facilities (HCFs), such as
                                    hospitals, laboratories, veterinary clinics, research centres and nursing homes. It has
                                    been assessed that the majority of medical waste does not pose a risk to humans. It is
                                    estimated that 15% of the total amount of produced HCW is hazardous and can be
                                    infectious, toxic or radioactive. Hazardous waste is a special type of waste which, if
                                    not properly treated, can pose a risk to human health and to the environment. HCW
                                    contains potentially harmful microorganisms that can be spread among healthcare
                                    personnel, hospital patients and the general public, causing serious illnesses.
                                    Healthcare personnel are the specialists especially exposed to this risk. The most
                                    common medical procedure, which pose the highest risk, is injection (i.e, intramuscular,
                                    subcutaneous, intravenous, taking blood samples). The World Health Organization (WHO)
                                    estimates that around 16 billion injections are administered worldwide each year.
                                    However, if safety precautions are not followed, and needles and syringes are not
                                    properly disposed of, the risk of sharps injuries increases among medical staff, waste
                                    handlers and waste collectors. What is more, sharps injuries increase the risk of human
                                    immunodeficiency virus (HIV), hepatitis B and C viruses (HBV/HCV), tuberculosis (TB),
                                    diphtheria, malaria, syphilis, brucellosis and other transmissions. Disposing of medical
                                    waste in a landfill without segregation and processing will result in the entry of
                                    harmful microorganisms, chemicals or pharmaceuticals into soil and groundwater, causing
                                    their contamination. Open burning or incinerator malfunctioning will result in the
                                    emission of toxic substances, such as dioxins and furans, into the air. In order to
                                    reduce the negative impact of medical waste, waste management principles should be
                                    formulated. To minimize health risks, it is also important to build awareness among
                                    health professionals and the general public through various communication and
                                    educational methods. The aim of this paper is to present a general overwiev of medical
                                    waste, its categories, the principles of its management and the risks to human health
                                    and the environment resulting from inappropriate waste management.
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