import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fetchdata from './Fetchdata';
import Displayitem from './Displayitem';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
};


function Displaylist({url}) {
    const {data , loading , error} = Fetchdata(url);
    
    return (
        <div className='py-6'>
            { loading && <div className='grid min-h-28 items-center justify-center font-semibold text-xl'>Loading your list...</div>}
            { error && <div className='grid min-h-28 items-center justify-center font-semibold text-xl'>Oops! Can't find what your are looking for</div>}
            {
                !loading && !error && 
                <Slider {...settings}> 
                {
                    data.results.map((item)=>{
                        return(
                        <Displayitem key={item.id} item={item}/>
                    );})
                }
                </Slider>
            }
        </div>
    )
}

export default Displaylist