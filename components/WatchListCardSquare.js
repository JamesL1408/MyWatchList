import React from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../pages/features/counter/counterSlice'

function WatchListCardSquare({Img,Title,Duration,Stars,Id,Company}) {
  const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <div className='h-[140px] w-[140px] 600pix:h-[200px]  600pix:w-[200px] relative  rounded-md cursor-pointer bg-red-500 group'>
        <div className='relative top-0 left-0 h-full w-full z-20'>
            <Image src={Img} layout='fill' className='rounded-md'/>

        </div>
        <div className='absolute bottom-0 left-0 opacity-0 w-full h-full group-hover:opacity-75 transition-all duration-300 ease-in-out rounded-md bg-black z-20'></div>
        <div className='absolute bottom-0 opacity-0 left-0 w-full h-full group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col px-3 py-3  rounded-md bg-transparent z-30 text-white items-center justify-start'>
            <h1 className='text-sm'>{Company}</h1>
            <h1 className='text-lg mt-2 600pix:mt-10 whitespace-normal leading-[16px]'>{Title}</h1>
            <h2 className='flex'>{Array(Stars).fill(0).map((_,i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-4 h-4 600pix:w-5 600pix:h-5">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>

            ))}</h2>
            <button
          onClick={()=>{
            var existingEntries = JSON.parse(localStorage.getItem("watchlist"));
            if(existingEntries==null) return;
            localStorage.removeItem("watchlist");
            const newExistingEntries = existingEntries.filter(film => film.id !== Id);
            localStorage.setItem("watchlist",JSON.stringify(newExistingEntries));
            dispatch(increment());
        }}        
        className='absolute bottom-3 text-black px-1 py-[2px] bg-red-500 z-50 rounded-md font-semibold hover:brightness-110 600pix:px-2 600pix:py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
    </div>
    </div>
  )
}


export default WatchListCardSquare