import React from 'react'
import noimage from '../assets/noimage.png';

function Displayitem({type,item}) {
    return (
        <button onClick={()=>{window.open(`/details/${type}/${item.id}`, '_blank');}} className='mx-2 p-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 duration-200'>
            <img className=' justify-self-center h-40 w-30  md:h-64 md:w-48 bg-cover rounded-xl shadow-md' loading="lazy" src={`https://image.tmdb.org/t/p/original${item.poster_path}` || noimage} />
            <h3 className='mt-2 w-28 md:w-48 text-md md:text-xl font-semibold text-left sm:truncate'>{ item.title || item.name}</h3>
            <h3 className='mt-1 w-28 md:w-48 text-sm md:text-md text-left font-medium'> { item.release_date || item.first_air_date }</h3>
        </button>
    )
}

export default Displayitem