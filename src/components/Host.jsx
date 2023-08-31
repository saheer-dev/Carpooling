import React,{useContext} from 'react'
import { places } from './Choose';
import { useForm } from 'react-hook-form';






export default function Host() {


  const form = useForm();
  const {register, handleSubmit, formState} = form;
  const { errors } = formState;


const onSubmit = (data)=> {
  console.log("submitted",data);
}

  const place = useContext(places)
  console.log(place);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

      
         
          <div className='w-[50vw] flex items-center justify-center flex-col '>
            <div className='w-[40vw] h-[30rem] border-2 border-black flex flex-col gap-5 pl-5 justify-center items-start '>
              <input  className='w-[34rem] h-16 rounded-lg p-5' type="text" placeholder='Start Point' id='start' {...register("start",
               {required:{
                value:true,
                message:"Enter your place"
               }})} />
               <p className='text-[12px] text-red-700 font-mono'>{errors.start?.message}</p>
                <input  className='w-[34rem] h-16 rounded-lg p-5' type="text" placeholder='Destination' id='end' {...register("end",
               {required:{
                value:true,
                message:"Enter your place"
               }})} />
               <p className='text-[12px] text-red-700 font-mono'>{errors.end?.message}</p>



           <div className='flex gap-6 '>
              <input className='w-[12rem] h-16 rounded-lg p-5' type="date" id='date' {...register("date",{
                valueAsDate:true,
                required:{
                value:true,
                message:"Enter your date"
               }})} />
               <p className='text-[12px] text-red-700 font-mono'>{errors.date?.message}</p>
                <input className='w-[7rem] h-16 rounded-lg p-5 ' type="time" id='time' {...register("time",{
                  valueAsNumber:true,
                  required:{
                value:true,
                message:"Enter your Time"
               }})}  />
                  </div>
               <p  className='text-[12px] text-red-700 font-mono'>{errors.time?.message}</p>





            <div className='flex gap-4'> 
            <div className='flex flex-col'>
            <div>
                 <h1 className='font-bold'>Choose Your Ride</h1>
                    <select className='w-[10rem] h-10 rounded-lg ' id="select" {...register("select",
               {required:{
                value:true,
                message:"Select your Ride"
               }})}>
                       <option value=""></option>
                         <option value="Bike">Bike</option>
                            <option value="car">car</option>
                               <option value="Mini van">Mini van</option>
                                  </select>
                                       </div>
                                       <div>
               <p className='text-[12px] text-red-700 font-mono'>{errors.select?.message}</p>

                                       </div>
            </div>



              <div>
                <h1 className='font-bold'>Available Seat</h1>
                   <select className='w-[6rem] h-10 rounded-lg' id="seat" {...register("seat",{
                valueAsNumber:true,
                required:{
                value:true,
                message:"Enter Available Seat"
               }})}>
                     <option value="1">1</option>
                        <option value="2">2</option>
                           <option value="3">3</option>
                            <option value="4">4</option>
                              <option value="5">5</option>
                                 <option value="6">6</option>
                                     </select>
                                         </div>





              </div>

              <button className='w-[10rem] h-8 rounded-lg  bg-black/30 hover:bg-black hover:text-white'>Sumbit</button>
            </div>
          </div>
       
          </form>
    </div>
  )
}







