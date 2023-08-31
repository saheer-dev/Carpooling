import React from 'react'

export default function Traveler() {
  return (
    <div>
                  <div className='w-[50vw] flex items-center justify-center flex-col '>
            <div className='w-[40vw] h-[30rem] border-2 border-black flex flex-col gap-5 pl-5 justify-center items-start '>
              <input  className='w-[34rem] h-16 rounded-lg p-5' type="text" placeholder='Current Location' />
                <input  className='w-[34rem] h-16 rounded-lg p-5' type="text" placeholder='Destination' />



           <div className='flex gap-6 '>
              <input className='w-[12rem] h-16 rounded-lg p-5' type="date" />
                <input className='w-[7rem] h-16 rounded-lg p-5 ' type="time"  />
                  </div>
              <button className='w-[10rem] h-8 rounded-lg  bg-black/30 hover:bg-black hover:text-white'>Search</button>

              </div>

            </div>
          </div>
   
  )
}
