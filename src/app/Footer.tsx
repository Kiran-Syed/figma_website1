
import Link from "next/link";
import Image from "next/image"
import logoos1 from "./images/logoos1.png"


function Footer() {
    return (
        <footer className="border border-black w-[80%] mx-auto h-auto md:h-[400px] rounded-t-3xl bg-gray-900 mt-20">
            <div className=" w-[90%] flex justify-between items-center mx-auto  mt-5">
                <h1 className="font-semibold text-xl text-white">Positivus</h1>

                <ul className="sm:flex items-center gap-3 md:gap-10 text-white hidden">

                    <li className=" text-[12px] hover:text-lime-600 hover:underline "><Link href="/">About us</Link></li>
                    <li className=" text-[12px] hover:text-lime-600 hover:underline"><Link href="/"> Services</Link></li>
                    <li className=" text-[12px] hover:text-lime-600 hover:underline"><Link href="/">Use Cases</Link></li>
                    <li className=" text-[12px] hover:text-lime-600 hover:underline"><Link href="/">Pricing</Link></li>
                    <li className=" text-[12px] hover:text-lime-600 hover:underline"><Link href="/">Blog</Link></li>

                </ul>

                <div className="relative top-0 left-0">
                    <Image src={logoos1} alt={"Social Icons"} width={80} />
                </div>

            </div>

            <div className="flex justify-around flex-col md:flex-row mt-4 rounded-tl-md border-2 border-green-700">

                <div className="text-white text-xs p-4 w-[80%] sm:w-[30%] flex gap-2 sm:gap-4 flex-col">

                    <h4 className="bg-lime-500 text-[10px] sm:text-sm p-1 w-[45%] md:w-[30%]">Contact Us</h4>
                    <p>Email: info@gmail.com</p>
                    <p>Phone No: 999 999 999</p>
                    <p>Address: 1234 st <br />Moonstone City, State 1234.</p>

                </div>

                <div className="flex flex-col sm:flex-row w-[100%] md:w-[50%] sm:h-[120px] bg-slate-800 rounded-xl items-center justify-center gap-5 p-2 sm:p-6 sm:mt-5">

                    <input type="text" name="emain" placeholder="Email" className="p-4 w-[95%] md:w-30 h-10 bg-slate-800 text-white border border-white rounded-lg" />

                    <button className="border border-white rounded-xl bg-lime-500 p-2 w-[50%] sm:w-[35%] md:w-40 h-8 sm:h-10 text-[10px] sm:text-xs">subscribe to news</button>
                </div>

            </div>

            <div className="mt-[10px] sm:mt-[50px] w-[87%] border-solid border-white mx-auto border-t-2 p-3 sm:p-8">

                <p className="text-white text-xs tracking-widest" > © 2023 Positivus. All Rights Reserved.<span className="underline p-4">Privacy Policy</span> </p>

            </div>

        </footer>
    )
}

export default Footer;