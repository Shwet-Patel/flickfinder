import React, { useState } from 'react'
import  Fetchdata from './Fetchdata';
import Displaylist from './Displaylist';


function Content({toggle1 , toggle1val , toggle2, toggle2val , endurl , heading }) {
    const [toggle , setToggle] = useState(toggle1);
    const url = `https://api.themoviedb.org/3/${toggle+endurl}`;
    

    return (
        <div className='bg-gray-900 text-white px-16 py-8'>
                <div className='mx-4 flex flex-wrap justify-between'>
                    <h1 className='text-3xl font-semibold'>{heading}</h1>
                    <div className='rounded-full shadow-md p-1 bg-white text-gray-900'>
                        <button className={`px-4 py-2 rounded-full ${toggle===toggle1 ? ('bg-gray-900 text-white '):('')} duration-300 `} onClick={()=>{setToggle(toggle1)}} >{toggle1val}</button>
                        <button className={`px-4 py-2 rounded-full ${toggle===toggle2 ? ('bg-gray-900 text-white '):('')} duration-300`} onClick={()=>{setToggle(toggle2)}} >{toggle2val}</button>
                    </div>
                </div>
                <Displaylist url={url}/>
        </div>
    )
}

export default Content