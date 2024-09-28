import React from 'react'
import { NavLink } from 'react-router-dom'

const Section = () => {
  return (
    <div className=" border-[3px] border-green-500">
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12  h-3/4   lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

      {/* <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          width={800}
          height={800}
          src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png"
          className="absolute inset-0 h-full w-full  rounded-3xl object-cover"
          />
      </div> */}

<div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
  <img
    className="absolute inset-0 h-full w-full rounded-md object-contain"
    alt=""
    src="https://cdn.pixabay.com/photo/2024/08/13/11/53/ai-generated-8965813_1280.png"

  />
</div>



      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className="text-sky-400">Appoitments</span> with your Fav <span className='text-sky-500'>Doctors</span></h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

       <NavLink to='/login'>
          <button
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Login 
        </button>

        </NavLink>

      </div>
    </div>
  </div>
</section>


      
    </div>
  )
}

export default Section
