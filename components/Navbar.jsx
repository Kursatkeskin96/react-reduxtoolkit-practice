'use client'
import React from 'react';
import { useSelector } from 'react-redux'; 
import { IoCartSharp } from "react-icons/io5";

export default function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className='bg-[#e7eaf6] w-80 rounded-xl text-black h-8 mt-2 mx-auto flex justify-around items-center'>
      <div className='text-sm text-[#113f67] font-bold hover:bg-[#cbced9] px-1 rounded-md cursor-pointer'>Home</div>
      <div className='cursor-pointer flex items-center justify-center text-lg text-[#113f67] font-bold'>
        <IoCartSharp />
        <span className='bg-red-700 rounded-[50%] w-4 h-4 text-center text-white font-bold text-xs'>
          {count}
        </span>
      </div>
    </div>
  );
}
