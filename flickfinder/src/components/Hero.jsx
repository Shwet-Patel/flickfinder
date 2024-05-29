import React, { useState } from 'react'
import {randomImageurls} from '../Data'

const index = Math.floor(Math.random() * randomImageurls.length);
  const backgroundStyle = {
    backgroundImage: `url(${randomImageurls[index].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

function Hero() {

  const [searchval , setSearchval] = useState('');

  const handlesearch = () => {
    window.open(`/search/${searchval}`);
  }
  

  return (
    <>
    <div className="min-h-[80vh] min-w-full" style={backgroundStyle} />
    <div className='absolute min-h-[80vh] min-w-full  top-0 left-0 bg-[linear-gradient(rgba(1,0,5,0.3),rgba(4,1,17,0.3))]'>
      <div className=' grid mt-48 w-full justify-center'>
        <h1 className=' text-5xl font-bold  text-center'>Welcome</h1>
        <h1 className='mt-2 text-md md:text-xl font-sembold text-center '>Millions of movies, TV shows and people to discover. Explore now</h1>
        <div className='hidden md:block mt-4 px-2 py-2 rounded-3xl bg-white text-black justify-self-center'>
          <input 
            className=' ml-4 min-w-[40vw] text-xl outline-none'
            type='text' 
            value={searchval}
            onChange={(e)=>{setSearchval(e.target.value)}}  
            placeholder='Search for your favourite movie or show'
            />
          <button className='px-4 py-2 rounded-2xl bg-yellow-300 hover:bg-gray-200 duration-300' onClick={handlesearch}>Search</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero