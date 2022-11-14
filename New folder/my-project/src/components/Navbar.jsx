import React from 'react'



function Navbar() {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
    <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
        
        <ul className='hidden md:flex '>
    <li>Home</li>
    <li>About</li>
    <li>Support</li>
    <li>Platforms</li>
    <li>Pricing</li>



        </ul>


    </div>
    <div className='hidden md:flex pr-4 '>
    <button className='border-none bg-transparent text-black mr-4'>Sign in </button>
    <button className='px-8 py-3 bg-indigo-600'>Sign up </button>

    </div>
   


        </div>
        </div>
  )
}

export default Navbar