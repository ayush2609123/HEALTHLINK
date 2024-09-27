// import React from 'react'
// import {specialties} from '../data.js'

// const CategorySearch = () => {
//     // console.log(specialties)
//   return (
//     <div className='mb-10 items-center flex flex-col gap-4 w-full border-[2px]' >
//         <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-sky-300'> Doctors</span>  
//         </h2>

//         <h2 className='text-gray-500 text-2xl'>Search Your Doctor and Book Appoitment in one Click</h2>

//         <div>
            

//         {/* <form class="flex items-center max-w-lg mx-auto">   
//     <label for="voice-search" class="sr-only">Search</label>
//     <div class="relative w-full">
//         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
//             </svg>
//         </div>
//         <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
//         <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
//             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
//             </svg>
//         </button>
//     </div>
//     <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//         </svg>Search
//     </button>
// </form> */}


// <form class="flex items-center max-w-lg mx-auto">   
//     <label for="voice-search" class="sr-only">Search</label>
//     <div className="relative w-full">
//     <input 
//         type="text" 
//         id="voice-search" 
//         className="w-full h-12 p-4 text-lg bg-white border border-gray-300 rounded-lg text-black focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//         placeholder="Search for Doctors..." 
//         required 
//     />
// </div>


//     <button type="submit" 
//         class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//         </svg>Search
//     </button>
// </form>

//         </div>

// {/* 
//         <div>

//            <div>
//             {
//                           specialties.map((data,index)=>{
//                             return(
//                                 <div className="flex flex-col">
//                                     <img src="{data.img}" alt="" />
//                                     <h1>
//                                         {data.speciality}
//                                     </h1>
                                    
//                                 </div>
//                             )
//                         }
            
//                         )

//             }
  

//            </div>



//         </div> */}



// <div className="flex justify-center mt-11 items-center w-full   border-[2px] border-blue-500">
//             <div className="flex sm:justify-center gap-5 w-1/2 overflow-x-scroll  "> {/* Outer div responsive with 60% width */}
//                 {specialties.map((data, index) => {
//                     return (
//                         <div key={index} className="flex flex-col items-center m-4"> 
//                         <img 
//                             src={data.image}  
//                             alt={data.specialty} 
//                             className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover mb-2" 
//                         />
//                         <h1 className="text-lg text-black-800">{data.specialty}</h1> {/* Text color */}
//                     </div>
                    
//                     );
//                 })}
//             </div>
//         </div>













    
      
// //     </div>
// //   )
// // }

// // export default CategorySearch
// // 


import React from 'react';
import { specialties } from '../data.js';

const CategorySearch = () => {
  return (
    <div className='mb-10 flex flex-col items-center gap-4  w-full border-2 border-gray-300 p-4'>
      <h2 className='font-bold text-3xl sm:text-4xl tracking-wide'>
        Search <span className='text-sky-300'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-lg sm:text-xl'>
        Search Your Doctor and Book Appointment in One Click
      </h2>

      <div className="w-full max-w-lg">
        <form className="flex items-center w-full">
          <label htmlFor="voice-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <input 
              type="text" 
              id="voice-search" 
              className="w-full h-12 p-4 text-lg bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search for Doctors..." 
              required 
            />
          </div>
          <button type="submit" 
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            Search
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-11 items-center w-full border-2 p-2 border-blue-500">
        <div className="flex gap-5 w-[80%] border-yellow-950 border-[3px]  overflow-x-auto">
          {specialties.map((data, index) => {
            return (
              <div key={index} className="flex flex-col items-center flex-shrink-0 w-1/5">
                <img 
                  src={data.image}  
                  alt={data.specialty} 
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover mb-2" 
                />
                <h1 className="text-lg sm:text-xl text-black-800 text-center">{data.specialty}</h1> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
