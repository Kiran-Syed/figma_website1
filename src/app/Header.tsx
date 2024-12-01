import Link from "next/link";
import Image from "next/image";
import nextLogo from "./images/nextLogo.png";



function Header() {

    return (

      <header>
          <nav className=" w-11/12 mx-auto flex justify-between p-[10px] items-center font-serif mt-10">

            <h1 className="font-semibold text-xl sm:text-3xl text-red-600 flex items-center"> <Image src={nextLogo} alt={"Logo"} width={28} className="h-5 w-5 sm:w-[18%] sm:h-7 m-2"/>Positivus</h1>

            <ul className="md:flex items-center gap-2 lg:gap-7 hidden">

                <li className=" text-[15px] hover:text-lime-600 hover:underline"><Link href="/">About us</Link></li>
                <li className=" text-[15px] hover:text-lime-600 hover:underline"><Link href="/"> Services</Link></li>
                <li className=" text-[15px] hover:text-lime-600 hover:underline"><Link href="/">Use Cases</Link></li>
                <li className=" text-[15px] hover:text-lime-600 hover:underline"><Link href="/">Pricing</Link></li>
                <li className=" text-[15px] hover:text-lime-600 hover:underline"><Link href="/">Blog</Link></li>

                <button className=" border border-black rounded-lg text-[12px]  py-[7px]  md:text-[12px] md:py-[6px] px-[8px] lg:py-[7px] lg:px-[13px] bg-lime-500">Request a quote</button>

            </ul>
            
            {/* for small screen */}
            <button className=" border border-black rounded-lg text-[10px] sm:text-[12px]  py-[7px]  md:text-[12px] md:py-[6px] px-[8px] lg:py-[7px] lg:px-[13px] bg-lime-500 md:hidden">Request a quote</button>
          </nav>
        </header>
    )
}

export default Header;