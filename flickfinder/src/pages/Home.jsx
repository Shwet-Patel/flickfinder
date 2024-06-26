import React from 'react'
import { Navbar , Hero , Content , Footer } from "../components";

function Home() {
  return (
    <div className="font-poppins bg-gray-900 text-white" >
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar/>
      </div>
      <div>
        <Hero />
        <Content toggle1='trending/movie/day' toggle1val='Day' toggle2='trending/movie/week' toggle2val='Week' endurl='' heading="See what's Trending" contenttype="movie" />
        <Content toggle1='movie' toggle1val='Movies' toggle2='tv' toggle2val='Series'endurl='/popular' heading="What's Popular" contenttype="toggleval"/>
        <Content toggle1='movie' toggle1val='Movies' toggle2='tv' toggle2val='Series'endurl='/top_rated' heading="Top rated" contenttype="toggleval"/>
        
        <Footer />
      </div>
    </div>
  )
}

export default Home