import React from 'react'

import MovieCard from '../card/MovieCard'

const MovieList = () => {
  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>


    </div>
  </div>
  )
}

export default MovieList
