import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GiFilmProjector } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { navlinks } from '../Data';

function Navbar() {
  const navigate = useNavigate();
  const [opensearch , setOpensearch] = useState(false);
  const [searchval , setSearchval] = useState('');

  const handlesearch = () => {
    window.open(`/search/${searchval}`);
  }
  

  return (
    <>
    <div className='flex flex-row  items-center justify-between shadow-lg z-10 bg-gray-800 text-white px-8 md:px-16 py-4'>
      <button onClick={()=>{navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' });}} className='flex flex-row items-center gap-x-2'>
        <GiFilmProjector size={50} color='yellow'/>
        <div className='text-xl  font-bold'>FLICK FINDER</div>
      </button>

      {/* for desktop */}
      <div className='hidden md:flex flex-row gap-x-8 pr-8'>
        {navlinks.map(({id,text,href})=>{
          return(
            <a key={id} href={href} className='font-bold hover:text-yellow-300 duration-300'>{text}</a>
          );
        })}
      </div>

      <div className='block md:hidden'>
        <button onClick={()=>{setOpensearch(!opensearch)}} className='px-4 py-2 bg-yellow-300 text-black rounded-full shadow-md' >
          { !opensearch ? <FaSearch/> : <MdOutlineClose/>}
        </button>
      </div>

    </div>


    {/* for mobile */}
    {
      <div className={`absolute top-0 left-0 w-full -z-20 flex flex-row md:hidden px-2 py-1 bg-white text-black justify-between transition-transform duration-200 ${opensearch ? ' translate-y-20 ' : ''}`}>
        <input 
          className=' ml-4 min-w-[40vw] text-md outline-none'
          type='text' 
          value={searchval}
          onChange={(e)=>{setSearchval(e.target.value)}}  
          placeholder='Search for your favourite movie or show'
          />
        <button className='px-4 py-2 rounded-2xl bg-yellow-300 hover:bg-gray-200 duration-300' onClick={handlesearch}>Search</button>
      </div>
    }
    </>
  )
}

export default Navbar;