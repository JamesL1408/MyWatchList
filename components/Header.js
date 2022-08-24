import React, { useState } from 'react'
import Image from 'next/image';
import PP from '../public/profileImage.jpg'

function Header() {
  if(typeof window==='object'){

    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener("click",()=>{
      menu.classList.toggle("-translate-y-full");
    })
  
    const [isOpen,setIsOpen] = useState(true);
    if(isOpen===true){
      menuBtn.classList.toggle('translate-x-10');
    } 
  }

  return (
    <div>
      {/* Hamburger Menu */}
        <div id='menu' className=' 600pix:hidden absolute h-screen w-full bg-white z-50 top-0 left-0
        flex flex-col items-center justify-start py-[100px] '>
          <div className='relative h-[120px] w-[120px] rounded-full mb-5'>
            <Image src={PP} layout='fill' className='rounded-full'/>
          </div>
          <h1 className='text-lg font-semibold font-Montserrat mb-8'>James</h1>
          <button className='w-[95%] h-[40px] border border-black rounded-sm text-lg font-medium text-gray-800'>Home</button>
        </div>

    <div className='w-full flex items-center justify-center z-50 shadow-md bg-white h-[60px] absolute top-0 left-0 '>
        <h1 className='text-2xl 600pix:text-3xl font-Montserrat font-bold'>MyWatchList</h1>
        <button id='menuBtn' className='flex 600pix:hidden items-center justify-center absolute left-4 top-[14px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>

        <a className='flex 600pix:hidden items-center justify-center absolute right-4 top-[14px]' href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        </a>
        <a className='hidden 600pix:flex items-center justify-center absolute right-6 top-[14px] text-center space-x-1 bg-red-500 py-1 px-2 rounded-md shadow-sm font-medium shadow-gray-500' href="/">
          <h1>Logout</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
        </svg>
        </a>
    </div>
    </div>
  )
}

export default Header