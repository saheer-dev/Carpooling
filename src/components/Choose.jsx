import React, { useState,useEffect } from 'react'
import img from "../assets/host.jpg"
import { ArrowCircleLeft, ArrowCircleRight, House} from "@phosphor-icons/react";
import logo from "../assets/amigos3.png";
import { Link, json } from 'react-router-dom';
import img2 from "../assets/travler.png"
import Host from './Host';
import Traveler from './Traveler';
import './../components/choose.css'




export const places = React.createContext()
export default function Choose() {
  const [tab,setTab]=useState(1);
  const [city,setcity]=useState([]);


 
useEffect( ()=>{
  fetch("http://localhost:3000/cities")
  .then((Response) => Response.json())
  .then((json) => {
        console.log(json);
        setcity(json)
});
},[])










// fetch('http://localhost:3000/cities')
// .then((data)=>{
//   // console.log(data);
//   return data.json()
// })
// .then((res)=>{
//   console.log(res);
//   setcity(res.city)
// })
// console.log(city );

  
  const changeTab=(index)=>{
    setTab(index)
  }
  console.log(tab);

  return (
    <div className='w-[100vw] h-[100vh] bg-green-900/30'  >
  
     

        <div className=" h-[4rem] flex items-center bg-black/10 justify-between  border-b-2 border-black">
          <img className="w-36 mt-16" src={logo} alt="" />
          <div className='flex gap-0'>
       <Link to="/go/sign"><ArrowCircleLeft size={35} color='black' className="mr-7" /></Link>
       <Link to="/"><House size={35} color='black' className="mr-7" /></Link>
       <Link to="/go/sign/choose"> <ArrowCircleRight size={35} color='black' className="mr-7" /></Link>
       </div>
              </div>

        <div className='w-[100vw] text-center '>
          <h1 className='font-Barriecito text-6xl mb-7'>Select Your Ride</h1>
        </div>

        <div className='w-[100vw] h-[cal(100vh-4rem)]  flex  justify-center items-center '>
    

      <div className='w-[50vw] flex flex-col justify-center  gap-24'>
        <div className='w-[50vw] flex items-center justify-center flex-col'>
          <h2 className='text-3xl font-bold'>Offer a Ride</h2>
            <div  onClick={()=>{changeTab(1)}} className='border-double border-4 border-sky-500 hover:border-double  hover:border-red-700'>
              <img className='w-72' src={img} alt="" />
            </div>
        </div>


        <div className=''>
        <div  className='w-[50vw]  flex items-center justify-center flex-col '>
          <h2 className='text-3xl font-bold'>Find a ride</h2>
                 <div onClick={()=>{changeTab(2)}} className='border-double border-4 border-sky-500 hover:border-double  hover:border-red-700'>
                   <img className='w-72' src={img2} alt="" />
                  </div>
        </div>
         </div>
       </div> 

        <div className='w-[50vw] flex items-center justify-center flex-col' id={tab===1?"showdiv1":"hide"}  >
         <places.Provider value={city}><Host/></places.Provider> 
        </div>
        <div className='w-[50vw]  flex items-center justify-center flex-col' id={tab===2?"showdiv1":"hide"}>
         <places.Provider value={city}><Traveler/></places.Provider> 

        </div>


        </div>

       </div>
  )
}
