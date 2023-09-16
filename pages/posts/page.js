
import Format from "../../layout/format"
import Author from "../../components/_child/author";
export default function Page(){
    return(
        <Format >
            <div className="bg-zinc-900">
             <section className="container mx-auto md:px-2 py-16 w-1/2">
                 <div className="justify-center flex">
                     <Author></Author>
                     <div className="post py-10">
                         <h1>

                         </h1>

                     </div>
                 </div>
             </section>
            </div>
        </Format>
    )
}