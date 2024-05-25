import React from 'react'
import {Footer, Fetchdata , Navbar , Displaylist } from '../components'
import { useParams } from 'react-router-dom'



function Details() {
  const {id} = useParams();
  const { data , loading , error} = Fetchdata(`https://api.themoviedb.org/3/movie/${id}`);
  const { data:cast , loading:castloading , error:casterror} = Fetchdata(`https://api.themoviedb.org/3/movie/${id}/credits`);
  const {data:videos , loading:videoloading , error:videoerror} = Fetchdata(`https://api.themoviedb.org/3/movie/${id}/videos`);

  const director = !castloading && cast?.crew?.find((item) => item.job === 'Director');
  const writer = !castloading && cast?.crew?.find((item) => item.job === 'Screenplay');
  const trailer = !videoloading && videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <div  className="font-poppins bg-gray-900 text-white" >
      < div className='px-16'>
        <div className="fixed top-0 left-0 w-full z-10">
          <Navbar/>
        </div>

        <div className='pt-28'>
          <div className='grid grid-cols-[35%,65%]'>
            <img className='bg-cover h-[30rem] justify-self-center rounded-xl shadow-md' src={`https://image.tmdb.org/t/p/original${data.poster_path}`}/>

            <div className='px-8'>
              <h1 className='text-4xl font-semibold tracking-wide'>{data.title || data.name}</h1>
              <h3 className=' mt-2 text-lg font-light italic text-gray-400'>{data.tagline}</h3>
              
              <div className='my-8'>
                <h1 className='text-2xl font-semibold tracking-wide'>overview</h1>
                <h3 className=' mt-2 text-lg font-light italic text-gray-400'>{data.overview}</h3>
              </div>

              { trailer && <a 
                className='my-16 px-4 py-2 bg-yellow-300 text-black hover:bg-gray-300 duration-300 rounded-md shadow-md' 
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target='blank' 
              >Watch Trailer</a>
              }
              
              <h2 className='mt-8 text-lg font-semibold tracking-wide'>IMDB id:
              <span className='text-lg font-light text-gray-400'> {data.imdb_id}</span></h2>
              
              <div className='my-4 w-full h-[1px] bg-gray-500'/>
              
              <div className='flex flex-row gap-x-8'>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>Status:
                  <span className='text-lg font-light text-gray-400'> {data.status}</span></h2>
                </div>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>Release Date:
                  <span className='text-lg font-light text-gray-400'> {data.release_date}</span></h2>
                </div>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>Runtime:
                  <span className='text-lg font-light text-gray-400'> {data.runtime} minutes</span></h2>
                </div>
              </div>
              
              <div className='my-4 w-full h-[1px] bg-gray-500'/>
              
              {director &&
              <div>
                <h2 className='text-lg font-semibold tracking-wide'>Director:
                <span className='text-lg font-light text-gray-400'> {director.name}</span></h2>
                <div className='my-4 w-full h-[1px] bg-gray-500'/>
              </div>
              }

              {writer && 
                <h2 className='text-lg font-semibold tracking-wide'>Writer:
                <span className='text-lg font-light text-gray-400'> {writer.name}</span></h2>
              }
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <h1 className='pl-4 text-3xl font-semibold'>Top Cast</h1>
          <div>
          {
            !castloading && !casterror &&
            <div className='flex flex-row px-4 mt-8 gap-x-8 overflow-x-scroll no-scrollbar'>
              {
                cast.cast.map(({id,name,character,profile_path})=>{
                  return(
                    <div key={id} className=''>
                      <div className=' h-32 w-32 overflow-hidden rounded-[50%]'>
                        <img 
                          src={`https://image.tmdb.org/t/p/original${profile_path}`} 
                          alt={name} 
                        />
                      </div>
                      <h3 className='mt-3 font-semibold text-lg text-center'>{name}</h3>
                      <h3 className=' font-light text-sm text-center text-gray-300'>{character}</h3>
                    </div>
                  );
                })
              }
            </div>
          }
          </div>
        </div>

        <div>
          <h1 className=' pl-4 text-3xl font-semibold'>Similar to this</h1>
          <Displaylist url={`https://api.themoviedb.org/3/movie/${id}/similar`}/>
        </div>

        <div>
          <h1 className='pt-16 pl-4 text-3xl font-semibold'>Recommendations</h1>
          <Displaylist url={`https://api.themoviedb.org/3/movie/${id}/recommendations`}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Details