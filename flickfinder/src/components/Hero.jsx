import React from 'react'
import Fetchdata from './Fetchdata'
import Getpopular from './Getpopular';

function Hero() {
  const { data, loading, error } = Fetchdata("https://api.themoviedb.org/3/movie/popular");

  return (
    <div className=' min-h-[100vh] bg-gray-900'>
    </div>
  )
}

export default Hero