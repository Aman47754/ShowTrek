import {ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {

  const navigate=useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("src/images/avatar.jpg")] bg-cover bg-center h-screen'>
      <span className="mt-20 md:text-4xl font-semibold text-2xl"><span className='text-[rgba(248,69,101,1)]'>LIGHT</span>STROM</span>
      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Avatar <br></br> Fire & Ash</h1>
      <div className='flex items-center text-gray-300 gap-4'>
        <span>Action | Adventure | Sci-Fi</span>
        <div className='items-center flex gap-1'>
          <CalendarIcon className="w-4.5 h-4.5">2018</CalendarIcon>
          <span>2025</span>
        </div>
        <div className='items-center flex gap-1'>
          <ClockIcon className="w-4.5 h-4.5"></ClockIcon>
          <span>3h 17m</span>
        </div>
      </div>
      <p className='max-w-md text-gray-300'>Avatar: Fire and Ash explores Pandora’s volcanic clans, deepening conflict, culture, and consequences as Jake Sully faces darker alliances emerge</p>
      <button onClick={()=>navigate("/movies")} className='rounded-full flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition font-medium cursor-pointer'>Explore Movies
        <ArrowRight className='w-5 h-5'></ArrowRight>
      </button>



    </div>
  )
}

export default HeroSection