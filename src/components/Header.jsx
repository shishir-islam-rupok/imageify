import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='mt-[5rem] flex gap-2 px-7 py-3 rounded-full items-center justify-center bg-white'>
                <p className='text-center text-sm text-gray-500 '>Bast text to image generator </p>
                <img src={assets.star_icon} alt="" />
            </div>
            
                <h1 className='text-4xl mx-auto mt-5 max-w-[300px] sm:text-7xl sm:max-w-[590px] text-center '>Turn text to <span className='text-blue-500'>image</span>, in seconds.</h1>


                <p className='text-center text-gray-500 text-[1.2rem] mt-5 mx-auto max-w-[500px] sm:max-w-[590px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</p>
                <button className='bg-black flex items-center gap-2 text-white px-10 py-3 rounded-full mt-7'>
                    Generate Image
                    <img className='w-7' src={assets.star_group} alt="" />
                </button>
         
        </div>

    )
}

export default Header
