import React, { useEffect,  useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Slider=()=> {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const data = await fetch("https://fakestoreapi.com/products")
                const response = await data.json();
                // console.log(response)
                setProducts(response)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])
    console.log(products)
  return (
    <>
      <Swiper
    slidesPerView={4}
    spaceBetween={30}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    modules={[Autoplay,  Navigation]}
    className="mySwiper"
>
    {products.map((item, index) =>{
        return(
            <SwiperSlide className=' gap-5' key={index}>
                <img className='w-[300px] h-[300px] ' src={item.image} alt={item.title} />
                <p>${item.price}</p>
                <p>{item.title}</p>
            </SwiperSlide>
        )
    })}
</Swiper>

    </>
  );
}


export default Slider