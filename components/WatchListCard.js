import React from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../pages/features/counter/counterSlice'

function WatchListCard({Img,Title,Duration,Stars,Id}) {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

  return (
    <div className='relative h-[100px] w-[340px] border border-black border-opacity-80 rounded-md shadow-sm shadow-gray-500 '>
        <div className='absolute h-[98px] w-[100px] top-0 left-0 rounded-l-md'>
            <Image src={Img} layout='fill' className='rounded-l-md'/>
        </div>
        <h1 className='absolute top-[15px] left-[120px] font-medium'>{Title}</h1>
        <div className='flex space-x-1 items-center justify-center absolute bottom-[20px] left-[120px]'>
            <h1 className='font-medium flex'>{Array(Stars).fill(0).map((_,i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-4 h-4 600pix:w-5 600pix:h-5">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>

            ))}</h1>
        </div>
        <h2 className='text-sm absolute bottom-[40px] right-[40px]'>{Duration}</h2>
        <button
        onClick={()=>{
            var existingEntries = JSON.parse(localStorage.getItem("watchlist"));
            if(existingEntries==null) return;
            localStorage.removeItem("watchlist");
            const newExistingEntries = existingEntries.filter(film => film.id !== Id);
            localStorage.setItem("watchlist",JSON.stringify(newExistingEntries));
            dispatch(increment());
        }}        
        className='rounded-md absolute bottom-[10px] right-[40px] bg-red-500 p-[4px] hover:brightness-110 flex items-center justify-center text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>

    </div>
  )
}

export default WatchListCard