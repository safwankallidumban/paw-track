import React from 'react';
import image from '../assets/lock.png'
import { IoIosArrowBack } from "react-icons/io";

export default function ForgotPassword() {
  return (
    <div className="bg-[#E1F0FF] h-screen w-full flex items-center justify-center">
      <div className="flex justify-center">
        <div className="grid grid-cols-2  w-[800px] ">
          <div className="p-6 col-span-1 bg-white rounded-tl-[25px] rounded-bl-[25px]">

            <div className='flex items-center'>
            <IoIosArrowBack className='mt-[25px] text-blue-700' />
            <button className="font-bold mb-4 mt-10 "><span className='text-blue-500'>Back to login</span></button>
            </div>
          
            
            <h1 className="text-2xl font-bold">Forgot your password?</h1>
            <p className="mt-2 text-sm">Don't worry!happens to all of us.Enter below to recover your password.</p>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-2 mt-4 border rounded"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 mt-4 rounded">Submit</button>
          </div>
          <div className="col-span-1 flex items-center justify-center p-10 bg-white rounded-tr-[25px] rounded-br-[25px]">
            <img src={image} alt="Password reset illustration" className=" rounded-[25px] w-full h-full"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
