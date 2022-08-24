import React, { useState } from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice'
import MovieScreen from './MovieScreen';

function MovieCardSquare({Img,Title,Desc,Stars,Company,Date,Id}) {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    if(typeof window === 'object'){

        const movieOpenButton = document.getElementById('openMovie');
        const movieScreen = document.getElementById('movieScreen');
        const movieCloseButton = document.getElementById('movieScreenClose');
    
        movieOpenButton.addEventListener("click",()=>{
            console.log("pressed")
            movieScreen.classList.toggle("hidden");
        })
        movieCloseButton.addEventListener("click",()=>{
            movieScreen.classList.toggle("hidden");
        })
    }

  return (
    <div className='h-[140px] w-[140px] 600pix:h-[200px] 600pix:w-[200px] relative rounded-md cursor-pointer group z-20 shadow-sm shadow-gray-500 '>
        <div className='relative top-0 left-0 h-full w-full z-20'>
            <Image src={Img} layout='fill' className='rounded-md'/>

        </div>
        <div className='absolute bottom-0 left-0 opacity-0 w-full h-full group-hover:opacity-75 transition-all duration-300 ease-in-out rounded-md bg-black z-20'></div>
        <button className='absolute bottom-0 opacity-0 left-0 w-full h-full group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col px-3 py-3  rounded-md bg-transparent z-40 text-white items-center justify-start '>
            <h1 className='text-sm'>{Company}</h1>
            <h1 className='text-lg mt-2 600pix:mt-10 whitespace-normal leading-[16px]'>{Title}</h1>
            <h2 className='flex'>{Array(Stars).fill(0).map((_,i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-4 h-4 600pix:w-5 600pix:h-5">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>

            ))}</h2>
        </button>
        <button id='openMovie' className='absolute bottom-4 left-4  text-white px-2 bg-black bg-opacity-70 z-50 rounded-md font-medium hover:brightness-110 flex space-x-1 hover:bg-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

        </button>
        <button onClick={()=>{
                var existingEntries = JSON.parse(localStorage.getItem("watchlist"));
                if(existingEntries==null) existingEntries = [];
                var entry = {
                    "id":Id,
                    "company":Company,
                    "date":Date,
                    "title":Title,
                    "desc":Desc,
                    "stars":Stars,
                    "image":Img,
                };
                
                localStorage.setItem("entry",JSON.stringify(entry));
                existingEntries.push(entry);
                localStorage.setItem("watchlist",JSON.stringify(existingEntries));
                dispatch(increment());
            }} 
            className='absolute bottom-4 right-4  text-black px-2 bg-green-500 z-50 rounded-md font-medium hover:brightness-110 flex space-x-1'>
                <h1 className='font-Montserrat font-semibold text-lg'>+</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>

            </button>   
            <div id='movieScreen' className='hidden fixed z-50 pt-[60px] top-0 right-0 bottom-0 left-0 h-full w-full bg-red-400  flex-col items-center justify-center cursor-default' >
                <button id='movieScreenClose'>close</button>
                <h2>{Title}</h2>
            </div>
    </div>
  )
}

export default MovieCardSquare