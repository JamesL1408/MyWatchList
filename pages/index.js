import Head from 'next/head'
import Image from 'next/image'

const USERNAME = "James"
const PASSWORD = "Pass"

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
    <div className="flex min-h-screen flex-col items-center justify-start pb-2 pt-8 space-y-[100px]">
      <Head>
        <title>MyWatchList</title>
        <link rel="icon" href="/movieReel.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className='flex flex-col items-center justify-center text-center space-y-3'>
        <h1 className='font-Montserrat font-bold text-3xl'>MyWatchList</h1>
        <h3 className='text-lg'>Track your watchlist in a second</h3>
      </div>

      <div className='flex flex-col items-center justify-center space-y-4 w-full'>
        <h3 className='text-lg font-medium'>Log in with your account</h3>
        <div className='flex flex-col items-center justify-center w-[70%] space-y-1 relative '>
          <h4 className=' text-sm text-gray-800'>Username</h4>
          <input className='w-full max-w-[320px] border border-gray-800 px-2 py-1 outline-none rounded-sm shadow-sm shadow-gray-400' type="text" name="username" id="username" placeholder='Insert your username' />
        </div>
        <div className='flex flex-col items-center justify-center w-full space-y-1 relative '>
          <div className='flex items-center justify-start'><h4 className='text-sm text-gray-800'>Password</h4></div>
          <input className='w-[70%] max-w-[320px] border border-gray-800 px-2 py-1 outline-none rounded-sm shadow-sm shadow-gray-400' type="password" name="password" id="password" placeholder='Insert your password' />
        </div>
        <button className='px-8 py-1 bg-gray-700 font-medium text-white rounded-sm border border-black hover:brightness-110 hover:bg-green-500 transition-all duration-200 ease-in-out ' onClick={Login}>
          Login
        </button>
      </div>
      <div className='flex space-x-1 absolute bottom-4 left-1/2 -translate-x-1/2'>
        <h2>Don't have an account?</h2>
        <a className='hover:underline hover:text-blue-600' href="">Register here</a>
      </div>
    </div>
  )
}

export default Home
