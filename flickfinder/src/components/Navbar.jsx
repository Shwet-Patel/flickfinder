import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GiFilmProjector } from "react-icons/gi";
import { navlinks } from '../Data';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row  items-center justify-between shadow-lg z-10 bg-gray-800 text-white px-16 py-4'>
      <button onClick={()=>{navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' });}} className='flex flex-row items-center gap-x-2'>
        <GiFilmProjector size={50} color='yellow'/>
        <div className=' text-2xl  font-bold'>FLICK FINDER</div>
      </button>

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