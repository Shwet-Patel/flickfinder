import React from 'react'
import {Navbar , Footer , } from '../components'

function Aboutus() {
  return (
    <div className=''>
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar/>
      </div>
      <div>
        <div className='h-full overflow-hidden'>
          <img className='-z-10 fixed top-0 left-0 w-full object-cover object-center' src="https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/dqK9Hag1054tghRQSqLSfrkvQnA.jpg" />
        </div>
        <div className='mt-[80vh] bg-white px-16 py-8 text-center'>
          <h1 className='text-5xl font-bold'>About us</h1>
          <p className='mt-8 text-medium'>
          FlickFinder stands as an indispensable digital haven for cinephiles worldwide, 
          a virtual library that meticulously catalogs and celebrates the vast tapestry of
          cinematic gems. This website isn't merely a repository of titles; it's a sanctuary
          where enthusiasts can immerse themselves in the rich narratives, captivating performances,
          and awe-inspiring visuals that define the world of film and television. With an extensive
          database encompassing everything from timeless classics to the latest releases, FlickFinder
          serves as a compass, guiding users through the labyrinth of cinematic offerings, ensuring
          that no masterpiece goes unnoticed.
          </p>
          <p className='mt-8 text-medium'>
            Data on this website is provided by TMDB. you can find out more about their API  <span>
              <a className='hover:text-yellow-400 duration-200 hover:underline' href='https://developer.themoviedb.org/docs/getting-started'>here</a></span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus