import React, { useState , useEffect } from 'react'
import {randomImageurls} from '../Data'



function Hero() {

  const index = Math.floor(Math.random() * randomImageurls.length);
  const backgroundStyle = {
    backgroundImage: `url(${randomImageurls[index].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
    <div className="min-h-[80vh]" style={backgroundStyle} />
    <div className='absolute min-h-[80vh] min-w-full top-0 left-0 bg-[linear-gradient(rgba(1,0,5,0.3),rgba(4,1,17,0.3))]'>
    </div>
    </>
  )
}

export default Hero