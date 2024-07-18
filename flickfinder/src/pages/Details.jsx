import React from 'react'
import {Footer, Fetchdata , Navbar , Displaylist } from '../components'
import { useParams } from 'react-router-dom'



function Details() {
  const {type,id} = useParams();

  //fetching
  const { data , loading , error} = Fetchdata(`https://api.themoviedb.org/3/${type}/${id}`);
  const { data:cast , loading:castloading , error:casterror} = Fetchdata(`https://api.themoviedb.org/3/${type}/${id}/credits`);
  const {data:videos , loading:videoloading , error:videoerror} = Fetchdata(`https://api.themoviedb.org/3/${type}/${id}/videos`);
  

  const director = !castloading && cast?.crew?.find((item) => (item.job === 'Director' || item.job==='Executive Producer'));
  const writer = type==='movie' ? (!castloading && cast?.crew?.find((item) => item.job === 'Screenplay')):(!loading && data?.created_by[0]);
  const trailer = !videoloading && videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <div  className="font-poppins bg-gray-900 text-white" >
      < div className='px-4 lg:px-16'>
        <div className="fixed top-0 left-0 w-full z-10">
          <Navbar/>
        </div>

        <div className='pt-28'>
          <div className='grid grid-rows-[35% , 65%]  lg:grid-cols-[35%,65%]'>
            <img className='bg-cover h-[30rem] justify-self-center rounded-xl shadow-md' loading='lazy' src={`https://image.tmdb.org/t/p/original${data.poster_path}`}/>

            <div className=' px-8 py-8 lg:py-0'>
              <h1 className='text-4xl font-semibold tracking-wide'>{data.title || data.name}</h1>
              <h3 className=' mt-2 text-lg font-light italic text-gray-400'>{data.tagline}</h3>

              <div className='py-4' >
                {
                  !loading && !error &&
                  <div className='flex flex-row flex-wrap gap-2'>
                    {
                      data.genres.map(({id,name})=>{
                        return(
                          <div key={id} className='px-2 py-1 text-sm rounded-lg bg-yellow-300 text-black' >{name}</div>
                        );
                      })
                    }
                  </div>
                }
              </div>
              
              <div className='my-4'>
                <h1 className='text-2xl font-semibold tracking-wide'>overview</h1>
                <h3 className=' mt-2 text-lg font-light italic text-gray-400'>{data.overview}</h3>
              </div>

              { trailer && 
              <div className='py-8 flex-wrap'>
              <a 
                className='my-16 px-4 py-2 bg-yellow-300 text-black hover:bg-gray-300 duration-300 rounded-md shadow-md' 
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target='blank' 
              >Watch Trailer</a>

              {type==='tv' &&  <a 
                  className='ml-4 my-16 px-4 py-2 bg-yellow-300 text-black hover:bg-gray-300 duration-300 rounded-md shadow-md' 
                  href={`${data.homepage}`}
                  target='blank' 
                >Watch series</a>
              }
              </div>
              }
              
              { type==='movie' && 
              <>
                <h2 className='text-lg font-semibold tracking-wide'>IMDB id:
                <span className='text-lg font-light text-gray-400'> {data.imdb_id}</span></h2>
                <div className='my-4 w-full h-[1px] bg-gray-500'/>
              </>
              }
              
              <div className='flex flex-col lg:flex-row gap-4'>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>Status:
                  <span className='text-lg font-light text-gray-400'> {data.status}</span></h2>
                </div>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>Release Date:
                  <span className='text-lg font-light text-gray-400'> {data.release_date || data.first_air_date}</span></h2>
                </div>
                <div>
                  <h2 className='text-lg font-semibold tracking-wide'>{type==='movie' ? 'Runtime:' : 'Seasons:'}
                  <span className='text-lg font-light text-gray-400'>{type==='movie' ? ` ${data.runtime} minutes` : ` ${data.number_of_seasons}`}</span></h2>
                </div>
              </div>
              
              <div className='my-4 w-full h-[1px] bg-gray-500'/>
              
              {director &&
              <div>
                <h2 className='text-lg font-semibold tracking-wide'>{type==='movie' ? 'Director:' : 'Producer:'}
                <span className='text-lg font-light text-gray-400'> {director.name}</span></h2>
                <div className='my-4 w-full h-[1px] bg-gray-500'/>
              </div>
              }

              {writer && 
                <h2 className='text-lg font-semibold tracking-wide'>{type==='movie' ? 'Writer:' : 'Created by:'}
                <span className='text-lg font-light text-gray-400'> {writer.name}</span></h2>
              }
            </div>
          </div>
        </div>

        {type==='tv' && <div className='mt-12'>
          <h1 className='pl-4 text-2xl font-semibold'>Seasons</h1>
          <div>
          {
            !loading && !error &&
            <div className='flex flex-col px-4 mt-8 gap-y-8'>
              {
                data.seasons.map(({id,name,overview,poster_path,episode_count,air_date})=>{
                  return(
                    <div key={id} className=' p-3 grid grid-cols-[20%,80%]  hover:bg-white rounded-3xl shadow-md hover:text-gray-950 bg-gray-800 text-white duration-500'>
                      <img className='rounded-lg h-60 justify-self-center ' loading="lazy" src={`https://image.tmdb.org/t/p/original${poster_path}`} />
                      <div className='px-4'>
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <h3 className='my-2 text-md font-medium'>Episodes: {episode_count}</h3>
                        <h3 className='my-2 text-md font-medium'>Release date: {air_date}</h3>
                        <h3 className='my-2 text-md font-medium'>Overview: {overview || "Oops, it is missing!"}</h3>
                      </div>
                      
                    </div>
                  );
                })
              }
            </div>
          }
          </div>
        </div>}

        <div className='mt-12'>
          <h1 className='pl-4 text-2xl  font-semibold'>Top Cast</h1>
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
                          loading="lazy" 
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
          <h1 className='mt-8 pl-4 text-2xl  font-semibold'>Similar to this</h1>
          <Displaylist type={type} url={`https://api.themoviedb.org/3/${type}/${id}/similar`}/>
        </div>

        <div>
          <h1 className='pt-16 pl-4 text-2xl  font-semibold'>Recommendations</h1>
          <Displaylist type={type} url={`https://api.themoviedb.org/3/${type}/${id}/recommendations`}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Details