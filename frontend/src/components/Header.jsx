import React from 'react'
import img from '../public/image.jpg'
import {Menu} from '../data.js'
import { Link } from 'react-router-dom';


const Header = () => {
    console.log(Menu)
  return (
    <div className='flex items-center justify-between p-6  shadow-sm'>

        <div className='flex items-center  gap-[7.5rem]'>

        <img src={img} alt ='logo'
        width={180} height={80} />

        <ul className='md:flex gap-8 hidden '>

            {Menu.map((item,index)=>{
                return (
                    <li className='hover:text-sky-500 hover:scale-110  cursor-pointer transition-all ease-in-out'>
                        
                        {/* <Link to={item.path}> */}
                       {item.name}

                        {/* </Link> */}
                        
                        </li>

                )
            })}
             
        </ul>

        </div>

        <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
    Get Started
</button>

      
    </div>
  )
}

export default Header
