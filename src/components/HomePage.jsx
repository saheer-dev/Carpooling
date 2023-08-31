import React, { useState } from "react";
import logo from "../assets/amigos3.png";
import bg from "../assets/bg.png";
import { UserCirclePlus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [modal, setmodal] = useState(false);

  const popupdiv = () => {
    setmodal(!modal);
    console.log(modal);
  };

  return (
    <div>
      <div className="w-screen h-screen overflow-hidden ">
         <div className="w-[100vw] h-[4rem] flex items-center bg-black/10 justify-between  border-b-2 border-black">
            <img className="w-36 mt-16" src={logo} alt="" />
            <Link to='/map'>
            <h1>map</h1>          
            </Link>

               <UserCirclePlus size={40} className="mr-7" onClick={popupdiv} />
                  </div>


         {modal && (
           <div className="absolute right-4 top-[3.5rem] z-50 gap-1 flex flex-col ">
            <Link to="/go"> <p className="bg-slate-600/70 text-white w-44 h-12 rounded-full flex justify-center items-center">
               LogIn
                </p></Link>


                <Link to="/go/sign"><p className="bg-slate-600/70 text-white w-44 h-12 rounded-full flex justify-center items-center">
                   SignIn
                      </p>
                       </Link>
                         </div>
                          )}


        <p className="w-[100vw] flex justify-center  text-[4rem] mt-[8rem] text-[#ffffff] bg-clip-text text-transparent bg-gradient-to-r from-black/25 to-blue-500 absolute inset-0 font-Courgette">
          Explore & Meet New People
            </p>

        <div className="relative flex items-center justify-center">
          <div className="w-[50vw] h-[calc(100vh-4rem)] object-cover bg-center bg-no-repeat grid place-items-center">
            <div className=" bg-yellow-300/20 rounded-3xl w-[25rem] mt-28 mr-9 px-5 py-10">
              <h1 className="font-semibold text-xl ">Why Amigos!.</h1>
                <p className="text-sm font-mono text-justify">
                  Connect with like-minded individuals in your community and join
                   forces for your daily commute or leisure activities. Our
                     platform a you to find carpool partners, sports buddies, and
                       others who share your interests. Say goodbye to solo trips and
                         lonely afternoons, and hello to new friends and more efficient
                           travel. Sign up now to start connecting with people nearby!
                             </p>

              <Link to="/go">
                <button className="w-36 h-12 text-lg bg-pink-600/30 rounded-full mt-9">
                  Expore More....
                    </button>
                      </Link>
                        </div>
                          </div>

             <div className="w-[50vw]  h-[]   flex items-end justify-end relative">
               <img src={bg} alt="" className="w-[50vw] -z-[1] h-[calc(100vh-4rem)]  "/>
                </div>
                  </div>
                    </div>
                      </div>
                        );
} 
