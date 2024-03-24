import React from "react";
import { Link } from "react-router-dom";
import justice from "../Assets/Image/justiceBackground.png";

export default function LandingPage() {
    return (
        <body className="flex flex-col justify-center items-center">
            <section id="services" className="h-screen w-full flex justify-center items-start px-10 set-image flex-col ">
                <div className="bg-transparent  font-mono">
                    <h1 className="bg-transparent mb-10 text-3xl md:mb-40 md:text-7xl">Solving your problems head-on</h1>
                </div>
                <div className="bg-transparent flex justify-center items-center">
                    <h3 className="bg-transparent text-3xl font-mono text-neutral-200">We provide you with direct and expert legal care so that you can resolve issues early and amicably.</h3>
                    <Link to='/Login' className="bg-transparent"><button className="mx-10 bg-blue-900 border-2 border-blue-900 h-12 md:h-[40px] w-36 md:w-[150px] rounded-2xl text-white">SEE SERVICES</button></Link>
                </div>
            </section>

            <section id="cases" className="grid grid-cols-1 md:h-screen md:grid-cols-3">
                <div className="col-span-1 flex items-center justify-center text-xl md:text-5xl text-white font-mono">What we<i className="px-2"> Focus </i>on!</div>
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center overflow-hidden mb-10 mx-5 py-16">
                    <div className="set-bg-divorce border-2 border-black flex justify-start flex-col items-start p-10 hover:-translate-y-10 duration-500 h-full">
                        <h3 className="text-3xl font-serif text-white bg-transparent">Divorce</h3>
                        <p className="  text-white">Going through a divorce is never easy, but you're not alone. We're here to help you navigate this challenging time with empathy and expertise. Our team is committed to finding peaceful resolutions tailored to your needs, guiding you toward a brighter tomorrow.</p>
                    </div>
                    <div className="set-bg-property border-2 border-black flex justify-start flex-col items-start p-10 hover:-translate-y-10 duration-500 h-full">
                        <h3 className="text-3xl font-serif text-white bg-transparent">Property Dispute</h3>
                        <p className="  text-white">Dealing with a property dispute can be overwhelming, but there's hope for resolution. Our team is here to provide compassionate support and expert guidance as you navigate this complex situation. We're dedicated to finding peaceful solutions that protect your interests and pave the way for a positive outcome.</p>
                    </div>
                    <div className="set-bg-criminal border-2 border-black flex justify-start flex-col items-start p-10 hover:-translate-y-10 duration-500 h-full">
                        <h3 className="text-3xl font-serif text-white bg-transparent">Criminal Cases</h3>
                        <p className="  text-white">Facing criminal charges can be daunting, but we're here to offer unwavering support and formidable defense. With our expertise and dedication, we'll protect your rights and strive for the best outcome.</p>
                    </div>
                    <div className="set-bg-custody border-2 border-black flex justify-start flex-col items-start p-10 hover:-translate-y-10 duration-500 h-full">
                        <h3 className="text-3xl font-serif text-white bg-transparent">Child Custody</h3>
                        <p className="  text-white">In child custody battles, emotions run high, but there's hope for resolution. Our team offers compassionate guidance and unwavering advocacy. With your child's best interests at heart, we'll work tirelessly to secure a stable and nurturing custody arrangement.</p>
                    </div>
                </div>
            </section>






            <section id="client" className="bg-[#E3DFD6] w-full grid grid-cols-1 lg:h-screen">
                <div className="flex flex-row justify-center items-center bg-transparent m-16">
                    <h2 className="text-4xl bg-transparent font-mono">Testimonials from Clients</h2>
                </div>
                <br />
                <div className="bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 mx-5">
                    <div className="border-2 border-black hover:bg-[#B7B3A5] bg-slate-700 p-10 text-white hover:-translate-y-10 duration-500">
                        <p className="bg-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit ab totam quibusdam? Debitis, eum. Quis officia ut placeat in debitis natus nam? Eveniet esse corporis, nemo rem hic voluptatem.</p>
                        <hr className="my-5" />
                        <h3 className="bg-transparent">Heading 1</h3>
                    </div>
                    <div className="border-2 border-black hover:bg-[#B7B3A5] bg-slate-700 p-10 text-white hover:-translate-y-10 duration-500">
                        <p className="bg-transparent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus dolore rem commodi asperiores. Explicabo commodi modi ipsa consequuntur dolor, itaque totam pariatur repellat libero fugit eaque at laboriosam quam.</p>
                        <hr className="my-5" />
                        <h3 className="bg-transparent">Heading 2</h3>
                    </div>
                    <div className="border-2 border-black hover:bg-[#B7B3A5] bg-slate-700 p-10 text-white hover:-translate-y-10 duration-500">
                        <p className="bg-transparent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe necessitatibus dolore rem commodi asperiores. Explicabo commodi modi ipsa consequuntur dolor, itaque totam pariatur repellat libero fugit eaque at laboriosam quam.</p>
                        <hr className="my-5" />
                        <h3 className="bg-transparent">Heading 3</h3>
                    </div>
                </div>
            </section>


        </body>
    )
}




