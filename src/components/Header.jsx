import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#cce6e2] md:sticky z-auto top-0'>
        <div className='max-w-[1200]  p-5 flex justify-between items-center '>
        {
              toggle ?
              <AiOutlineClose onClick={()=>setToggle(!toggle)} className= 'text-[#072963] text-2xl md:hidden block'/>
                :
              <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-[#072963] text-2xl md:hidden block'/>
            }
           
            
                <ul className='hidden md:flex gap-5 text-[#072963] '>
                   <li>
                      <Link to="/">Home</Link>
                   </li>
                   <li>
                      <Link to="/about">About</Link>
                   </li>
                   <li>
                      <Link to="/products">Product</Link>
                   </li>
                </ul>
                <div>
                  <ul className='flex align-baseline gap-5'>
                    <li><FiShoppingCart className='h-7' /></li>
                    <li> <Link to="/signin" className='text-[#072963] hover:font-bold'>SignIn</Link> </li>
                    <li> <Link to="/signup" className='text-[#072963] hover:font-bold'>SignUp</Link> </li>

                  </ul> 
                </div>
                </div>
                
      <div>
                {/* Responsive */}
               

                <ul className = {` md:hidden text-[#cce6e2] bg-[#072963]  top-[76px] w-full z-0 ${toggle ? 'left-[0]' : 'hidden'}
                `}> 
                    <li className='p-3'> <Link to="/Home">Home</Link> </li> 
                    <li className='p-3'> <Link to="/About">About</Link> </li>
                    <li className='p-3'> <Link to="/Products">Products</Link> </li>
                </ul>

        </div>
    </div>
  )
}
