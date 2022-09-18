import React, { useState } from 'react'
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice'

import playButton from '../public/playButton.png'

function WatchListCardSquare({Img,Title,Duration,Stars,Id,Company,Date,Desc}) {
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
                        <Image priority src={Img} layout='fill' objectFit='fill'/>
                    </div>
                    <div className='flex-grow h-full flex items-center justify-center  '>
                        <div className='h-[50px] w-[50px] relative'>
                            <Image priority src={playButton} layout='fill' objectFit='contain'/>                           
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[200px]  p-3 pt-4 whitespace-normal space-y-2'>
                    <div className='flex w-full items-center 900pix:space-x-3  '>
                        <h1 className='text-3xl font-Montserrat font-medium flex-grow 900pix:flex-grow-0  text-left'>{Title}</h1>
                        <h1 className='text-2xl font-Montserrat'>{'('}{Date}{')'}</h1>
                    </div>
                    <div className='w-full text-start whitespace-normal'>
                        {Desc}
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
                    <div className='absolute bottom-0 left-0 w-full h-[60px] 900pix:right-9 900pix:left-auto 900pix:top-[250px] 900pix:w-[260px] 900pix:h-[40px] rounded-sm '>
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
                    <div className='absolute bottom-0 left-0 w-full h-[60px] 900pix:right-9 900pix:left-auto 900pix:top-[250px] 900pix:w-[260px] 900pix:h-[40px] rounded-sm'>
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


      <div className='h-[140px] w-[140px] 600pix:h-[160px]  600pix:w-[160px] relative  rounded-md cursor-pointer  group'>
          <div className='relative top-0 left-0 h-full w-full z-20'>
              <Image priority src={Img} layout='fill' className='rounded-md'/>

          </div>
          <div className='absolute bottom-0 left-0 opacity-0 w-full h-full group-hover:opacity-75 transition-all duration-300 ease-in-out rounded-md bg-black z-20'></div>
          <div className='absolute bottom-0 opacity-0 left-0 w-full h-full group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col px-3 py-3  rounded-md bg-transparent z-30 text-white items-center justify-start'>
              <h1 className='text-sm'>{Company}</h1>
              <h1 className='text-lg mt-2 600pix:mt-5 whitespace-normal leading-[16px]'>{Title}</h1>
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
          className='absolute bottom-4 right-4 text-black p-[4px] bg-red-500 z-50 rounded-md font-semibold hover:bg-red-400 600pix:p-[4px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
          <button onClick={()=>{
            setIsPressed(!isPressed)
            console.log(isPressed)
        }} id='openMovie' className='openMovie absolute bottom-4 left-4  text-white hover:text-black p-[4px] bg-white bg-opacity-70 z-50 rounded-md font-medium hover:bg-white flex space-x-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

        </button>
      </div>
      </div>
    </>
  )
}


export default WatchListCardSquare