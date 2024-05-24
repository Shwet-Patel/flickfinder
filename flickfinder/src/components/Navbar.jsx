import React from 'react'
import { GiFilmProjector } from "react-icons/gi";
import { navlinks } from '../Data';

function Navbar() {
  return (
    <div className='flex flex-row  items-center justify-between min-w-[100vw] z-10 bg-gray-800 text-white px-16 py-4'>
      <div className='flex flex-row items-center gap-x-2'>
        <GiFilmProjector size={50} color='yellow'/>
        <div className=' text-2xl  font-bold'>FLICK FINDER</div>
      </div>

      <div className='flex flex-row gap-x-8 pr-8'>
        {navlinks.map(({id,text,href})=>{
          return(
            <a key={id} href={href} className='font-bold hover:text-yellow-300 duration-300'>{text}</a>
          );
        })}
      </div>

    </div>
  )
}

export default Navbar;