import React, { useState } from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice'
import playButton from '../public/playButton.png'

function WatchListCard({Img,Title,Duration,Stars,Id,Date,Desc}) {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    const [isPressed,setIsPressed]= useState(false);

    function checkFilms(){
        var existingEntries=JSON.parse(localStorage.getItem("watchlist"));
        if(existingEntries==null)return 0;
        for(var i = 0;i<existingEntries.length;i++){
            if(existingEntries[i].id===Id)return 1;
        }
        return 0;
    }

  return (
    <>
        {isPressed===true && (
                <div className='fixed z-50 pt-[60px] top-0 right-0 bottom-0 left-0 h-full w-full flex flex-col items-center justify-start cursor-default bg-white'>
                <div className='flex w-full h-[200px] bg-black'>
                    <div className='min-w-[200px] h-full relative'>
                        <Image src={Img} layout='fill' objectFit='fill'/>
                    </div>
                    <div className='flex-grow h-full flex items-center justify-center  '>
                        <div className='h-[50px] w-[50px] relative'>
                            <Image src={playButton} layout='fill' objectFit='contain'/>                           
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[200px]  p-3 pt-4 whitespace-normal space-y-2'>
                    <div className='flex w-full items-center 900pix:space-x-3 '>
                        <h1 className='text-3xl font-Montserrat font-medium flex-grow 900pix:flex-grow-0  text-left'>{Title}</h1>
                        <h1 className='text-2xl font-Montserrat'>{'('}{Date}{')'}</h1>
                    </div>
                    <div className='w-full text-start whitespace-normal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est illo dolorum enim, nihil doloribus voluptates libero perspiciatis in officiis deserunt quis, voluptas alias possimus!
                    </div>
                </div>
                <div className='flex flex-col w-full p-3 space-y-3'>
                    <div className='flex items-center justify-start space-x-2 '>
                        <h2 className='text-2xl font-medium min-w-[95px] text-left'>Director: </h2>
                        <p className='text-left whitespace-normal'>kjhbs fdskj</p>
                    </div>
                    <div className='flex justify-start space-x-2 '>
                        <h2 className='text-2xl font-medium min-w-[95px] text-left'>Writers: </h2>
                        <p className='whitespace-normal text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores.</p>
                    </div>
                    <div className='flex  justify-start space-x-2 '>
                        <h2 className='text-2xl font-medium min-w-[95px] text-left'>Stars: </h2>
                        <p className='whitespace-normal text-left flex-grow'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores.</p>
                    </div>
                </div>

                {!checkFilms() && (
                    <div className='absolute bottom-0 left-0 w-full h-[60px] 900pix:right-9 900pix:left-auto 900pix:top-[270px] 900pix:w-[260px] 900pix:h-[40px] rounded-sm '>
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
            className='w-full h-full text-xl font-Montserrat font-medium border border-black bg-green-500'>
                        Add to Watchlist
                    </button>
                </div>
                )}

                {checkFilms()==1 && (
                    <div className='absolute bottom-0 left-0 w-full h-[60px] 900pix:right-9 900pix:left-auto 900pix:top-[270px] 900pix:w-[260px] 900pix:h-[40px] rounded-sm'>
                    <button  onClick={()=>{
                    var existingEntries = JSON.parse(localStorage.getItem("watchlist"));
                    if(existingEntries==null) return;
                    localStorage.removeItem("watchlist");
                    const newExistingEntries = existingEntries.filter(film => film.id !== Id);
                    localStorage.setItem("watchlist",JSON.stringify(newExistingEntries));
                    dispatch(increment());
                }}      className='w-full h-full text-xl font-Montserrat font-medium border border-black bg-red-500'>
                        Remove from Watchlist
                    </button>
                </div>
                )}
                


                <button className='absolute top-[70px] right-3 600pix:right-6 800pix:right-8 1300pix:right-10' onClick={()=>{
                    setIsPressed(!isPressed);
                    console.log(isPressed)
                }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-white">
                <path fill-rule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clip-rule="evenodd" />
                </svg>
                </button>
                </div>
                )}
    
        <div className='relative h-[100px] w-[340px] border border-black border-opacity-80 rounded-md shadow-sm shadow-gray-500 '>
            <div className='absolute h-[98px] w-[100px] top-0 left-0 rounded-l-md'>
                <Image src={Img} layout='fill' className='rounded-l-md'/>
            </div>
            <h1 className='absolute top-[15px] left-[120px] font-medium text-lg max-w-[180px] leading-5'>{Title}</h1>
            <div className='flex space-x-1 items-center justify-center absolute bottom-[20px] left-[120px]'>
                <h1 className='font-medium flex'>{Array(Stars).fill(0).map((_,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mt-1 w-4 h-4 600pix:w-5 600pix:h-5">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>

                ))}</h1>
            </div>
            <h2 className='text-sm absolute bottom-[50px] right-[25px]'>{Duration}</h2>

            <button 
            onClick={()=>{
                var existingEntries = JSON.parse(localStorage.getItem("watchlist"));
                if(existingEntries==null) return;
                localStorage.removeItem("watchlist");
                const newExistingEntries = existingEntries.filter(film => film.id !== Id);
                localStorage.setItem("watchlist",JSON.stringify(newExistingEntries));
                dispatch(increment());
            }}        
            className='rounded-md absolute bottom-[10px] right-[10px] bg-red-500 p-[4px] hover:brightness-110 flex items-center justify-center text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <button onClick={()=>{
            setIsPressed(!isPressed)
            console.log(isPressed)
        }} id='openMovie' className='openMovie absolute bottom-[10px] right-[50px] text-white p-[4px] bg-black bg-opacity-70 z-20 rounded-md font-medium hover:brightness-110 flex space-x-1 hover:bg-opacity-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

        </button>

        </div>
    </>
  )
}

export default WatchListCard