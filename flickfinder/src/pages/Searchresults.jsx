import React from 'react'
import { useParams} from 'react-router-dom'
import {Fetchdata , Displayitem ,Navbar , Footer} from '../components'

function Searchresults() {
  const {query} = useParams();
  const { data , loading , error} = Fetchdata(`https://api.themoviedb.org/3/search/multi?query=${query}`);

  return (
    <div className=' bg-gray-900 text-white'>
      <Navbar/>
        { loading && <div className='grid min-h-28 items-center justify-center font-semibold text-xl'>Loading your list...</div>}
        { error && <div className='grid min-h-28 items-center justify-center font-semibold text-xl'>Oops! Can't find what your are looking for</div>}
        {
            !loading && !error && 
            <div className='px-16 py-8'>
              <h1 className='ml-4 text-3xl font-bold'>Here are your search results for "{query}"</h1>
              {/* movies */}
              <div className='mt-8'>
                <h1 className='ml-4 text-3xl font-bold'>Movies</h1>
                <div className='mt-4 flex flex-row overflow-scroll no-scrollbar'>
                  {
                    data.results.map((item)=>{
                      if(item.media_type == 'movie')
                        {
                          return(<Displayitem item={item}/>)
                        }
                    })
                  }
                </div>

                {/* series */}
                <div className=' mt-16'>
                  <h1 className='ml-4 text-3xl font-bold'>TV Series</h1>
                  <div className='mt-4 flex flex-row overflow-scroll no-scrollbar'>
                    {
                      data.results.map((item)=>{
                        if(item.media_type == 'tv')
                          {
                            return(<Displayitem item={item}/>)
                          }
                      })
                    }
                  </div>
                </div>
              </div>

              
            </div>
        }

        <Footer />
    </div>
  )
}

export default Searchresults