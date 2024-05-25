import React from 'react'
import { useNavigate } from 'react-router-dom';

function Displayitem({item}) {
    const navigate = useNavigate();
    return (
        <button onClick={()=>{navigate(`/details/${item.id}`);}} className='mx-4 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 duration-200'>
            <img className=' justify-self-center h-64 w-48 bg-cover rounded-xl shadow-md' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
            <h3 className='mt-2 w-48 text-xl font-semibold text-left truncate'>{ item.title || item.name}</h3>
            <h3 className='mt-1 w-48 text-md text-left font-medium'> { item.release_date || item.first_air_date }</h3>
        </button>
    )
}

export default Displayitem