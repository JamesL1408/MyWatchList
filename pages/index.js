import Head from 'next/head'
import Image from 'next/image'

const USERNAME = "watch"
const PASSWORD = "list"

const Home = () => {

  const Login = () =>{
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if(user === USERNAME && pass === PASSWORD){
      location.href = '/homeScreen'
    }else{
      alert("Incorrect Username or Password")
    }
  }
  
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start pb-2 pt-8 space-y-[100px] relative overflow-hidden bg-black bg-opacity-90 ">
      <Head>
        <title>MyWatchList</title>
        <link rel="icon" href="/movieReel.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className='flex flex-col items-center justify-center text-center space-y-3 text-white'>
        <h1 className='font-Montserrat font-bold text-3xl'>MyWatchList</h1>
        <h3 className='text-lg'>Track your watchlist in a second</h3>
      </div>

      
      <div className='relative flex items-center justify-center z-50'>
        <div className='h-[300px] w-[300px] rounded-full bg-purple-400  -top-10 -left-10 z-20 flex  absolute mix-blend-multiply filter blur-xl opacity-60 animate-blob'></div>
        <div className='h-[280px] w-[280px] rounded-full bg-blue-500  -top-10 -right-12 z-20 flex  absolute mix-blend-multiply filter blur-xl opacity-60 animate-blob'></div>
        <div className='h-[280px] w-[280px] rounded-full bg-orange-300  -bottom-10 -left-10 z-20 flex  absolute mix-blend-multiply filter blur-xl opacity-60'></div>
        <div className='h-[220px] w-[280px] rounded-full bg-yellow-300  -bottom-10 -right-10 z-20 flex  absolute mix-blend-multiply filter blur-xl opacity-60'></div>

        <div className='flex flex-col items-center justify-center space-y-4 w-[360px] sm:w-[400px] py-10 rounded-md shadow-md  z-50 bg-gray-300 bg-opacity-60'>
          <h3 className='text-lg font-medium'>Log in with your account</h3>
          <div className='flex flex-col items-center justify-center w-[70%] space-y-1 relative '>
            <h4 className=' text-sm text-black font-medium'>Username</h4>
            <input className='w-full max-w-[320px] border border-gray-800 px-2 py-1 outline-none rounded-sm placeholder:text-black shadow-sm shadow-gray-400 bg-transparent' type="text" name="username" id="username" placeholder='Insert your username'  />
          </div>
          <div className='flex flex-col items-center justify-center w-full space-y-1 relative '>
            <div className='flex items-center justify-start'><h4 className='text-sm text-black font-medium'>Password</h4></div>
            <input className='w-[70%] max-w-[320px] border border-gray-800 px-2 py-1 outline-none rounded-sm shadow-sm shadow-gray-400 bg-transparent placeholder:text-black' type="password" name="password" id="password" placeholder='Insert your password' />
          </div>
          <button className='px-8 py-1 bg-gray-700 font-medium text-white rounded-sm border border-black hover:brightness-110 hover:bg-green-500 transition-all duration-200 ease-in-out ' onClick={Login}>
            Login
          </button>
        </div>
      </div>

      <div className='flex flex-col 600pix:flex-row space-x-1 absolute bottom-4 left-1/2 -translate-x-1/2 items-center text-white'>
        <h2 className='whitespace-nowrap'>Don't have an account?</h2>
        <a className='hover:underline hover:text-blue-600' href="">Register here</a>
      </div>
    </div>
  )
}

export default Home
