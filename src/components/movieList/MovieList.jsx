import React from 'react'

import MovieCard from '../cine/MovieCard'
import { getAllMovies } from '../../data/Movie'
const movies = getAllMovies();

const MovieList = () => {
  return (
    <div className="content">
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
     <MovieCard movies={movies}/>


    </div>
  </div>
  )
}

export default MovieList
