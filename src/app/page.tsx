
import Image from "next/image"
import next1 from "./images/next1.png"
import next2 from "./images/next2.png"
import next3 from "./images/next3.png"
import next4 from "./images/next4.png"
import next5 from "./images/next5.png"
import next6 from "./images/next6.png"
import next7 from "./images/next7.png"
// import card1 from "./images/card1.png"
import card2 from "./images/card2.png"
import arrow from "./images/arrow.jpg"
import sidePic from "./images/sidePic.png"
// import bg2 from "./images/bg2.jpg"

export default function MainSection() {
  return (

    <main className="mx-auto">

      {/* ----------------- Hero Section ------------------ -- */}

      <div className="w-[100%] mt-10 bg-gradient-to-r from-white via-cyan-200 to-white p-6 pt-2 pb-10">

        <div className="mt-10 flex-col-reverse sm:flex-row flex justify-between items-center md:ml-16 ml-5">

          <div className="w-[80%] md:w-1/2 lg:md:w-1/3 h-max py-3.5">
            <h2 className=" font-extrabold text-xl md:text-4xl font-mono	sm:leading-10 ">Navigation the digital landscape for success</h2>
            <p className="tabular-nums py-7 text-sm sm:text-lg font-sans italic text-fuchsia-700">Our digital marketing agency helps business grow and succeed online through a range of services
              including SEO, PPC, social media marketing, and content creation</p>
            <button className="border border-black rounded-lg py-[7px] px-[13px] w-30	h-9 my-1.5 text-xs text-white bg-black hover:bg-lime-500 hover:text-black ">Book a consultation</button>
          </div>

          <div className="mr-5 w-[70%] sm:w-[50%] md:[75%]"> <Image src={next1} alt={"Band Pics"} width={420} height={430} /> </div>
        </div>
      </div>

      {/*  ------------------- Images Section----------------  */}

      <div className="w-11/12 mx-auto ">
        <div className="flex gap-[7%] ml-4 mt-24 flex-wrap">

          <Image src={next2} alt={" Amazon Pics"} width={120} height={50} />
          <Image src={next3} alt={"Dribble Pics"} width={90} height={60} />
          <Image src={next4} alt={"HubSpot Pics"} width={110} height={5} />
          <Image src={next5} alt={"Notion Pics"} width={110} height={50} />
          <Image src={next6} alt={"Netflix Pics"} width={100} />
          <Image src={next7} alt={"Zoom Pics"} width={110} height={5} />

        </div>

        <div className="w-4/5 sm:w-3/4 md:w-3/5 flex gap-10 flex-col sm:flex-row mt-20 items-center ml-8">

          <h2 ><span className="bg-lime-500 p-2 font-mono font-semibold text-xl sm:text-2xl rounded">Services</span></h2>

          <p className="leading-5 font-semibold italic text-xs sm:text-[17px]">
            At our digital marketing agency , we offer a range of
            services to help business grow and succeed online.These
            services include:
          </p>

        </div>

        {/* ---------------------- CARDS ------------------- */}

        <div className="flex gap-6 justify-around mt-20 flex-col sm:flex-row mx-auto">

          <div className=" shadow-gray-600 shadow-xl w-[65%] sm:[45%] md:w-[37%] border border-black border-b-4 flex h-44 sm:h-52 items-center	rounded-[26px] justify-around bg-gray-300 mx-auto">
            <div className="grid gap-14">
              <p ><span className=" bg-lime-500 font-semibold  text-[10px] p-2">Search engine</span> <br /> <span className=" pb-2 px-2 font-semibold bg-lime-500 text-[10px] ">optimization</span></p>
              <p className="font-semibold text-[10px]"> Learn more </p>
            </div >

            <Image src={card2} alt={"cycle Pics"} width={150} height={5} className="rounded-xl w-[50%]"/>
          </div>

          <div className="shadow-gray-600 shadow-xl w-[65%] sm:[45%] md:w-[37%] border border-black border-b-4 flex h-44 sm:h-52 items-center	rounded-[26px] justify-around bg-lime-500 z-0 mx-auto">

            <div className="grid gap-14">
              <p><span className=" bg-slate-100 font-semibold p-2 text-[10px] ">Pay-per-click</span> <br /><span className="pb-2 px-2 font-semibold bg-slate-100 leading-none text-[10px] ">advertising</span></p>
              <p className="font-semibold text-[10px]">Learn more</p>
            </div>

            <Image src={arrow} alt={"Arrow Pics"} width={150} height={5} className="rounded-xl w-[50%]"/>
            {/* <Image src={card1} alt={"Arrow Pics"} width={150} height={5} /> */}
          </div>

        </div>

        {/* ------------------------------------ */}

        <div className="w-4/5 sm:w-3/4 md:w-2/3 flex gap-10 flex-col sm:flex-row mt-20 items-center ml-10 ">  

          <h3 className="bg-cyan-300 p-2 font-mono font-semibold text-[16px] sm:text-lg rounded">Our Working Process</h3>

          <p className="leading-5 font-semibold text-[16px] sm:text-lg italic text-fuchsia-700">
            Step-by-Step to Achieving Your Business Goals .
          </p>

        </div>

        {/* ------------------------------------- */}

        <section className=" grid gap-6 mt-20 ">

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-300 duration-300 w-11/12 border border-black h-44 mx-auto grid border-b-4 rounded-[26px] bg-lime-500">

            <div className=" w-11/12 ml-5 p-5"> <span className="text-3xl sm:text-4xl font-semibold">01</span> <span className="text-lg font-semibold pl-2 pb-10">Consultation</span></div>

            <div className="">

              <p className="w-11/12 mx-auto border-t-2 border-black py-5 text-[9px] sm:text-sm">Some quick example text to build on the card title and make up the bulk of the cards
                contentSome quick example text to build on the card title the cards contentSome quick example text to build on the card .
              </p>

            </div>

          </div>

          {/* -------- */}

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 w-11/12 h-24 border border-black mx-auto grid  border-b-4 rounded-[26px] bg-gray-300">
            <div className=" w-[74%] ml-5 p-5 flex gap-4 items-center"> <div className="text-3xl sm:text-4xl font-semibold">02</div> <div className="text-[9px] sm:text-lg font-semibold pl-2">Research and Strategy Development</div></div>
          </div>

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 w-11/12 h-24 border border-black h- mx-auto grid   border-b-4 rounded-[26px] bg-gray-300">
            <div className=" w-[74%] ml-5 p-5 flex gap-4 items-center"> <div className="text-3xl sm:text-4xl font-semibold">03</div> <div className="text-[12px] sm:text-lg font-semibold pl-2">Implementation</div></div>
          </div>

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 w-11/12 h-24 border border-black h- mx-auto grid   border-b-4 rounded-[26px] bg-gray-300">
            <div className=" w-[74%] ml-5 p-5 flex gap-4 items-center"> <div className="text-3xl sm:text-4xl font-semibold">04</div> <div className="text-[12px] sm:text-lg font-semibold pl-2">Monitoring and Optimization</div></div>
          </div>

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 w-11/12 h-24 border border-black h- mx-auto grid   border-b-4 rounded-[26px] bg-gray-300">
            <div className=" w-[74%] ml-5 p-5 flex gap-4 items-center"> <div className="text-3xl sm:text-4xl font-semibold">05</div> <div className="text-[12px] sm:text-lg font-semibold pl-2">Reporting and Communication</div></div>
          </div>

          <div className="hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 w-11/12 h-24 border border-black h- mx-auto grid   border-b-4 rounded-[26px] bg-gray-200">
            <div className=" w-[74%] ml-5 p-5 flex gap-4 items-center"> <div className="text-3xl sm:text-4xl font-semibold">06</div> <div className="text-[12px] sm:text-lg font-semibold pl-2">Continual Improvement</div></div>
          </div>

        </section>

        {/* ------------------------------------ */}

        <div className="w-4/5 sm:w-3/4 md:w-2/3 flex gap-10 flex-col sm:flex-row mt-20 items-center ml-10 ">

          <h3 className="bg-fuchsia-400 p-2 font-mono font-semibold text-lg rounded ml-4">Contact Us</h3>

          <p className=" leading-5 font-semibold text-[16px] sm:text-lg italic text-lime-600 ">
            Connect with us. Lets Discuss Your Digital Marketing Needs.
          </p>

        </div>

        {/* --------------- Form Section ------------- */}

        <div className="hover:-translate-y-1 hover:scale-110 duration-300 shadow-sky-600 shadow-xl border w-[85%]  mx-auto h-[450px] bg-sky-300 rounded-[26px] flex justify-between items-center mt-20">

          <form action="/" className="w-[86%] md:w-[36%] max-h-[auto] p-6 grid gap-y-2.5 mx-auto md:ml-20 mt-5">

            <div className="flex gap-5 ">
              <div><input type="radio" name="" value="select" checked /> <span> Say Hi</span></div>
              <div><input type="radio" name="Get a Quote" value="select" checked /> <span>Get a Quote</span></div>
              <br />
            </div>

            <div >
              <label htmlFor="name" className="mt-[10px] mb-[10px]"> Name </label> <br />
              <input type="text" name="username" placeholder=" Name" required className="p-[5px] w-full rounded-[8px] border border-black" />
              <br />
            </div>

            <div>
              <label htmlFor="email"> Email* </label> <br />
              <input type="text" name="email" placeholder=" Email*" required className="p-[5px] w-full rounded-[8px]  border border-black" />
            </div>

            <div>
              <p> Message* </p>
              <textarea name="messeage" id="message" placeholder=" Message*" className=" p-3 w-full rounded-[8px] border border-black"></textarea>
            </div>

            <button className="w-full bg-black text-white p-[8px] rounded-[6px] text-xs">Send Message</button>

          </form>

          <Image src={sidePic} alt={"Design"} width={220} height={20} className="hidden sm:block sm:h-[400px]"/>
        </div>
      </div>
    </main>
  )
}
