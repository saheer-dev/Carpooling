import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/amigos3.png";
import { House, Minus } from '@phosphor-icons/react'
import img from "../assets/bg4.jpg"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import apple from "../assets/apple.png"

export default function Create() {
  return (
    <div className='w-[100vw] h-[100vh] ' style={{background:`url(${img})`,backgroundSize:"cover" }}>
      <div className="w-[100vw] h-[4rem] flex items-center bg-black/10 justify-between  border-b-2 border-black">
         <img className="w-36 mt-16" src={logo} alt="" />
           <Link to="/"><House size={35} color='black' className="mr-7" /></Link>
              </div>

       <div className='w-[100vw] h-[calc(100vh-4rem)] flex flex-col justify-center items-start ml-[28rem]'>
          <div className='w-[25rem] h-[35rem] bg-black/20 flex flex-col justify-center items-center gap-3 '>
             <h2 className='text-4xl font-semibold'>Welcome back</h2>
                 <p>Please enter your details.</p>
                     <input className='w-64 h-8 rounded-full p-5 mt-3' type="text"
                        placeholder='Enter your email' />
                          <input className='w-64 h-8 rounded-full p-5'  type="text"
                            placeholder='Password ' />
                            <button className='w-64 h-9 bg-black text-white rounded-full'>Continue</button>
                              <p className='text-lg flex items-center justify-center'><span className='w-12 h-[1.5px] m-1 bg-black'></span>  or <span className='w-12 m-1 h-[1.5px] bg-black'></span> </p>
                             <button className='w-64 h-9 bg-black/20 text-white rounded-full flex justify-start  items-center gap-2 hover:bg-black'> <img
                             className='w-5 ml-6' src={google} alt="" /> Continue with Google</button>
                            <button className='w-64 h-9 bg-black/20 text-white rounded-full flex justify-start  items-center gap-2 hover:bg-black'> <img className='w-5 ml-6' src={facebook} alt="" /> Continue with Facebook</button>
                          <button className='w-64 h-9 bg-black/20 text-white rounded-full flex justify-start  items-center gap-2 hover:bg-black'> <img className='w-5 ml-6' src={apple} alt="" /> Continue with Apple</button>
                        <Link to="/go/sign">
                     <p className='text-sm mt-4'>Don't have an account?  <span className='font-bold underline'>Sign In</span></p>
                  </Link>
              </div>
           </div>
    </div>
  )
}
