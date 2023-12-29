import React from "react";
import {FiChevronsRight } from 'react-icons/fi'
import Slider from './Carosal'
import Catigories from './Catigories'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <section class="body-font bg-[#fff7ed] ">
        <div class=" gap-0 lg:grid grid-cols-2  ">
            <div className="flex flex-col items-start justify-center gap-5 py-5 w-[80%] mx-auto">
              <h1 class="title-font font-serif sm:text-4xl text-3xl font-bold text-[#072963] ">
                BROWSE OUR PREMIUM <br />
                PRODUCTS
              </h1>
              <h2 class="title-font  font-[Merriweather] sm:text-4xl text-5xl mb-4 font-lg text-[#b91c1c] md:text-[80px] my-5">
                Upto 50% off
              </h2>
              <p class="mb-8 mt-5 leading-relaxed text-black text-lg">
                Introducing our finest selection of premium products,
                meticulously crafted to enhance your lifestyle and cater to your
                most exquisite tastes. At Purchasers, we take pride in offering
                you only the best..
              </p>

              <button class="w-40 h-40 rounded-full border-2 border-black text-black flex items-center justify-center  hover:bg-blue-950  hover:text-white" >
                Broswe More 
                <FiChevronsRight size={16} />
              </button>
            </div>
          <div class="col-span-1 md:w-100 ">
            <img
              class="object-cover object-center rounded w-[100%] "
              alt="hero"
              src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/Hero1.744483dbf76037d30e91.jpg"
            />
          </div>
        </div>
      </section>

{/* Section 2 */}

<div className="bg-[#cce6e2] flex relative ">
  <div className="bg-[#1d7889]">
     {/* text */}
     <div className="container w-[70%] mx-auto my-10   ">
              <h1 class="title-font font-serif sm:text-4xl text-3xl font-bold text-white ">
                FIND BEST QUALITY <br />
                PRODUCTS
              </h1>
              <h2 class="title-font font-[Merriweather] sm:text-4xl text-5xl mb-4 font-lg text-[#facc49] md:text-[80px] my-5">
                Upto 30% off
              </h2>
              <p class="mb-8 mt-5 leading-relaxed text-white text-lg">
              Discovering the best quality products ensures lasting satisfaction and value for your investment.
              </p>

              <button class="w-40 h-40 rounded-full border-2 border-[#facc49] text-white flex items-center justify-center hover:bg-white hover:text-black">
                Broswe More 
                <FiChevronsRight size={16} />
              </button>
            </div>
  </div>
  <div className=" "></div>

  <div className="hidden md:flex gap-3   md:absolute left-[48%] top-[13%] ">
    <div className=""> <img className="h-[380px]" src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/womenbag.fc659ad1ffd8c6e008a2.jpg" alt="" />
     </div>
    <div className=""> 
      <img className="h-[380px]" src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/men.f237c97534ef1f311358.jpg" alt="" />
     </div>
  </div>
</div>
            {/* Sellers section */}
<div className="bg-[#e5f3fd] px-10 py-10">
    <h1 className=" text-blue-950 font-mono py-4 text-lg xl:text-[3.5rem] flex justify-center items-center" >BEST SELLERS</h1> 
    <p className=" text-end xl:py-4 py-2 xl:text-lg ">
      <span className="  underline underline-offset-4 hover:text-sky-400">
      <Link to="/Products">SEE ALL</Link>
      </span>
    </p>
    <Slider/>
</div>

              {/*Catigories Section */}
         <div py-10 >
         <Catigories/>
        </div>     
    
    </div>
  );
};

export default Home;
