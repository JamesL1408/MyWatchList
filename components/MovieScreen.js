import React from 'react'

function MovieScreen({Img,Title,Desc,Stars,Company,Date,Id,isShown}) {
  return (
    <div className='fixed z-50 pt-[60px] top-0 right-0 bottom-0 left-0 h-full w-full bg-red-400 flex flex-col items-center justify-center cursor-default'>
        {Title}
        <button>Close</button>
    </div>
  )
}

export default MovieScreen