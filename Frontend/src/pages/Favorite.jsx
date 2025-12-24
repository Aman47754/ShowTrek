import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'
function Favorite() {
  
  return dummyShowsData.length>0?(
    <>
      <div className='relative my-4 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
        <BlurCircle top="150px" left="0px"></BlurCircle>
        <BlurCircle bottom="50px" right="50px"></BlurCircle>
        <h1 className="text-lg font-medium my-4 mt-30">Your Favorite Movies</h1>
        <div className='flex flex-wrap justify-center gap-4 mt-8'>
          {
            dummyShowsData.map((movie)=>{
              return (
                <MovieCard key={movie._id} movie={movie}></MovieCard>
              )
            })
          }
        </div>
      </div>
    </>):(
      <div>
        <h1 className='text-3xl font-bold text-center'>No movies Available</h1>
      </div>
    )


  
}

export default Favorite