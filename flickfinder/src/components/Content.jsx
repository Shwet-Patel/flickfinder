import React, { useState } from 'react'
import  Fetchdata from './Fetchdata';
import Displaylist from './Displaylist';


function Content({toggle1 , toggle1val , toggle2, toggle2val , endurl , heading , contenttype }) {
    const [toggle , setToggle] = useState(toggle1);
    const url = `https://api.themoviedb.org/3/${toggle+endurl}`;
    

    return (
        <div className='bg-gray-900 text-white px-4 md:px-16 py-8'>
                <div className='mx-4 flex flex-col md:flex-row place-items-center  md:justify-between'>
                    <h1 className=' text-lg md:text-3xl font-semibold'>{heading}</h1>
                    <div className='mt-3 md:mt-0 max-w-max rounded-full shadow-md p-1 bg-white text-gray-900'>
                        <button className={`px-2 py-2 rounded-full ${toggle===toggle1 ? ('bg-gray-900 text-white '):('')} duration-300 `} onClick={()=>{setToggle(toggle1)}} >{toggle1val}</button>
                        <button className={`px-2 py-2 rounded-full ${toggle===toggle2 ? ('bg-gray-900 text-white '):('')} duration-300`} onClick={()=>{setToggle(toggle2)}} >{toggle2val}</button>
                    </div>
                </div>
                <Displaylist key={toggle} type={contenttype==='movie' ? contenttype : toggle} url={url}/>
        </div>
    )
}

export default Content