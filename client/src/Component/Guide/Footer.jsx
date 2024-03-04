import React from "react"
import facebook from "../../Assets/Icon/facebook.png";
import linkedIn from "../../Assets/Icon/linkedin.png";
import instagram from "../../Assets/Icon/instagram.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="contact" className="px-6 md:px-12 lg:px-24">
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 h-auto md:h-[50vh] items-center justify-center">
                <div className="flex flex-col p-4">
                    <h3 className="text-3xl"><b>Contact</b></h3>
                    <br />
                    <p className="font-mono text-lg md:text-xl">Opposite Centaurus Mall, Near High Court, Mall Rd, Lahore</p>
                    <br />
                    <p className="text-lg md:text-xl font-mono">(+92) 331 8803736</p>
                    <br />
                    <p className="text-lg md:text-xl font-mono">legalEase.com</p>
                </div>
                <div className="flex flex-col p-4">
                    <h3 className="text-3xl"><b>Working Hours</b></h3>
                    <br />
                    <p className="font-mono text-lg md:text-xl">In Office <br />Mon - Thur <br /> 8:00am - 5:00pm</p>
                    <br />
                    <p className="text-lg md:text-xl font-mono">In Office <br />Fri - Sat <br /> 8:00am - 2:00pm</p>
                    <br />
                    <p className="text-lg md:text-xl font-mono">Online <br /> 24/7 Services</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="mx-5 mb-5 mt-2"><Link to='/'><img src={facebook} alt="Facebook" className="w-10 h-10" /></Link> </p>
                    <p className="mx-5 mb-5 mt-2"><Link to='/'><img src={linkedIn} alt="LinkedIn" className="w-10 h-10" /></Link> </p>
                    <p className="mx-5 mb-5 mt-2"><Link to='/'><img src={instagram} alt="Instagram" className="w-10 h-10" /></Link> </p>
                </div>
            </div>
        </div>
    )
}




// export default function Footer() {
//     return (
//         <div id="contact">
//             <div className="flex flex-wrap h-[50vh] items-center justify-evenly">
//                 <div className="w-60 h-[45vh] m-6  flex flex-col p-4           ">
//                     <h3 className="text-3xl"><b>Contact</b></h3>
//                     <br />
//                     <p className="font-mono text-2xl"> Opposite Centaurus Mall, Near High Court, Mall Rd, Lahore</p>
//                     <br />
//                     <p className="text-xl font-mono">(+92) 331 8803736</p>
//                     <br />
//                     <p className="text-xl font-mono">legalEase.com</p>
//                 </div>
//                 <div className="w-64 h-[45vh] m-6  flex flex-col p-4  ">
//                     <h3 className="text-3xl"><b>Working Hours</b></h3>
//                     <br />
//                     <p className="font-mono text-xl">In Office <br />Mon - Thur <br /> 8:00am - 5:00pm</p>
//                     <br />
//                     <p className="text-xl font-mono">In Office <br />Fri - Sat <br /> 8:00am - 2:00pm</p>
//                     <br />
//                     <p className="text-xl font-mono">Online <br /> 24/7 Services</p>
//                 </div>
                
//             </div>
//             <div className="flex items-center justify-center ">
//                 <p className="mx-10 mb-10 mt-5"><Link to='/'><img src={facebook} alt="Facebook"   className="w-10 h-10" /></Link> </p>
//                 <p className="mx-10 mb-10 mt-5"><Link to='/'><img src={linkedIn} alt="LinkedIn"   className="w-10 h-10" /></Link> </p>
//                 <p className="mx-10 mb-10 mt-5"><Link to='/'><img src={instagram} alt="Instagram" className="w-10 h-10" /></Link> </p>
//             </div>
            

//         </div>
       
//     )
// }
