import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import PP from '../public/profileImage.jpg'
import {data} from '../public/data'
import MovieCardSquare from '../components/MovieCardSquare'
import { useState } from 'react'
import { useEffect } from 'react'
import WatchListCard from '../components/WatchListCard'
import {useSelector, useDispatch } from 'react-redux';
import WatchListCardSquare from '../components/WatchListCardSquare'

function homeScreen() {

  const [searchTerm,setSearchTerm]=useState("");
  const [watchlist,setWatchlist]=useState([]);
  const count = useSelector((state)=>state.counter.count);

  useEffect(()=>{ 
    var entries = JSON.parse(localStorage.getItem("watchlist"));
    if(entries==null) entries = [];
    setWatchlist(entries);
  },[count])

  const slideLeftReleases = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft-400;
  }

  const slideRightReleases = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft+400;
  }

  const slideLeftWatch = () =>{
    var slider = document.getElementById('sliderWatch');
    slider.scrollLeft = slider.scrollLeft-400;
  }

  const slideRightWatch = () =>{
    var slider = document.getElementById('sliderWatch');
    slider.scrollLeft = slider.scrollLeft+400;
  }


  return (
    <div className='h-screen  '>
        <Head>
            <title>MyWatchList - Home</title>
            <link rel="icon" href="/movieReel.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        </Head>

        {/* Monitor */}
        <Header/>

        <main className='flex pt-[60px] h-screen w-full'>
          <section className=' bg-white z-10 border-r border-gray-200 hidden 600pix:flex flex-col items-center py-2 min-w-[150px]'>
            <div className='flex flex-col space-y-2 items-center justify-center mt-[70px]'>
                <div className=' relative h-[100px] w-[100px] rounded-full'>
                <Image src={PP} layout='fill' className='rounded-full' />
            </div>
            <h1 className='font-semibold font-Montserrat text-lg'>James</h1>
            </div>
            <div className='w-full h-[1px] bg-black mt-10'></div>
            <h1 className='my-[6px] font-medium '>Home</h1>
            <div className='w-full h-[1px] bg-black'></div>
        </section>

        <section className='h-full flex flex-col z-10 flex-grow items-start overflow-hidden '>

            <div className='flex flex-col mt-8 ml-3 space-y-1'>
              <h1 className='text-xl font-Montserrat font-semibold'>Looking for something?</h1>
              <input onChange={(event)=>{
                setSearchTerm(event.target.value);
              }} 
              type="search" name="" id="" placeholder='Search movies' className='border border-black border-opacity-70 px-1 rounded-md w-[300px] outline-none' />
            </div>

            <h1 className='text-xl font-Montserrat mt-6 ml-3 font-semibold'>New Releases</h1>

            <div className='flex items-center justify-center space-x-2 absolute right-5 top-[175px]'>
              <svg onClick={slideLeftReleases} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 600pix:h-9 600pix:w-9 cursor-pointer" fill="none"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>

            <svg onClick={slideRightReleases} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 600pix:h-9 600pix:w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>

            <div id='slider' className='w-full  overflow-x-scroll whitespace-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide '>
              {
                data.filter((val)=>{
                  if(searchTerm==""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((val)=>{
                  return(
                      <div className='inline-block text-center p-3 snap-start' key={val.id}>
                        <MovieCardSquare Title={val.title} Stars={val.stars} Company={val.company} Desc={val.desc} Date={val.date} Img={val.image} Id={val.id}/>
                      </div>
                  )
                })
              }
            </div>

            <div className='mt-8 w-full  relative  '>
              <div className='flex 900pix:hidden items-center justify-center space-x-2 absolute right-5 top-0'>
              <svg onClick={slideLeftWatch} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 600pix:h-9 600pix:w-9 cursor-pointer" fill="none"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>

            <svg onClick={slideRightWatch} xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 600pix:h-9 600pix:w-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>

                <h1 className='text-xl font-Montserrat mb-4 font-semibold ml-3'>Watchlist</h1>
                {watchlist.length===0 && (
                  <div className='text-xl px-3'>Your watchlist is empty, check out the new releases!</div>
                )}

                <div className='hidden 900pix:flex items-start justify-center w-full  max-h-[200px] overflow-y-scroll scrollbar-hide '>
                <div className='grid grid-cols-1 900pix:grid-cols-2 1300pix:grid-cols-3 1550pix:grid-cols-4 gap-y-3 gap-x-6 py-5'>
                  {watchlist.map((val)=>{
                    return(
                      <div key={val.id}>
                        <WatchListCard Title={val.title} Duration={"110min"} Img={val.image} Stars={val.stars} Id={val.id} Date={val.date}/>
                      </div>
                    )
                  })}
                </div>
                </div>

                <div className='flex 900pix:hidden items-center justify-center w-full '>
                <div id='sliderWatch' className='w-full overflow-x-scroll whitespace-nowrap snap-x snap-mandatory scroll-smooth scrollbar-hide'>
                  {watchlist.map((val)=>{
                    return(
                      <div className='inline-block text-center p-3 snap-start' key={val.id}>
                        <WatchListCardSquare Title={val.title} Duration={"110min"} Img={val.image} Stars={val.stars} Id={val.id} Company={val.company} Date={val.date}/>
                      </div>
                    )
                  })}
                </div>
                </div>

            </div>  
        </section>
        </main>
        
    </div>
  )
}

export default homeScreen