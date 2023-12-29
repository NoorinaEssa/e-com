import React, { useState } from 'react'
import {FiChevronsRight } from 'react-icons/fi'

const Catigories = () => {
    const [hover, setHover] = useState(false)
  return (
    <div>

      <div className='bg-[#e5f3fd] grid lg:grid-cols-12 sm:grid-cols-1 gap-5 '>

       <div className='col-span-6'>
       <div className="flex flex-col items-start justify-center gap-5 py-5 w-[80%] mx-auto">
              <h1 class="title-font font-serif sm:text-4xl text-3xl font-bold text-[#072963] ">
              TOP  <br />
              CATEGORIES
              </h1>
              <h2 class="title-font  font-[Merriweather] sm:text-4xl text-5xl mb-4 font-lg text-[#b91c1c] md:text-[80px] my-5">
                Upto 50% off
              </h2>
              <p class="mb-8 mt-5 leading-relaxed text-black text-lg">
              Our curated top categories feature a wide range of choices, ensuring there's something for everyone.
              </p>

              <button class="w-40 h-40 rounded-full border-2 border-black text-black flex items-center justify-center  hover:bg-blue-950  hover:text-white" >
                Broswe More 
                <FiChevronsRight size={16} />
              </button>
            </div>
        </div>

        <div className='flex justify-center items-center col-span-6  transition-all ease-in duration-300 bg' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {/* bg-image */}
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/fragrences.583ad57311574a9ec764.jpg')" }}>
        <div className={`${hover ? "flex": "hidden"} justify-center items-center bg-blue-600 h-[150px] w-[150px]  transition-all ease-in duration-500 `}>
                hover me
            </div>
    </div>            
        </div>
        
        
        <div className='col-span-3'>
            <img className='w-[100%] h-[350px]'
             src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/jwellery.4f5940afcb086d23125d.jpg" alt="" />
        </div>
        <div className='  col-span-6'>
            <img className='w-[100%] h-[350px]'
            src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/shoes.713db7a4b7edb5dd65e2.jpg" alt="" />
        </div>
        <div className='  col-span-3'>
            <img className='w-[100%] h-[350px]'
            src="https://655a31978ad8c548f422dc40--statuesque-snickerdoodle-84cd34.netlify.app/static/media/watches.f2b1476e83259edc3f8d.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Catigories
