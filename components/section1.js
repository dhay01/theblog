import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Spline from '@splinetool/react-spline';
import Author from './_child/author'
export default function Section1() {
    useEffect(() => {
        new Typewriter('#typewriter', {
            autoStart: true,
            loop: true,
        })
            .pauseFor(2500)
            .typeString('technology')
            .deleteChars(10)
            .typeString(' <span style="color: #9f61de;">art</span> ')
            .deleteChars(26)
            .typeString(' <span style="color: #ff65e8;">science</span> ')
            .deleteChars(23)
            .typeString(' <span style="color: #c97fbd;">philosophy</span> ')
            .deleteChars(23)
            .start();
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex justify-center items-center">
                        <div className="info flex flex-col ">
                            <div className="title">
                                <h1 className="text-3xl md:text-6xl font-bold text-fuchsia-600 ">
                                    boost your knowledge in <br/>
                                    <span id="typewriter"></span>
                                </h1>
                            </div>
                            <p className="text-zinc-500 py-3 sm:w-2/3 md:text-lg lg:text-xl">
                                Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life One day however a small line of blind
                                text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                            </p>
                            <Author></Author>


                        </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                        <div className="spline-container">
                            <Spline scene="https://prod.spline.design/ilzZFB3YLsqwAowq/scene.splinecode"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
