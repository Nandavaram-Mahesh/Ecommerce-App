import React from 'react'
import './PrimeVideos.css' 

import MovieSlider from './MovieSlider'

const actionMovies = 'ACTION'

const comedyMovies= 'COMEDY'


const PrimeVideos = ({moviesList}) => {
    
    const actionMoviesList = moviesList.filter(movie=>(
      movie.categoryId === actionMovies
    ))

    const comedyMoviesList = moviesList.filter(movie=>(
        movie.categoryId === comedyMovies
    ))
  return (
    <div className="prime-video-container">
        <img
         className="image"
         src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
         alt="prime video" 
        />
        <div className="movies-container">
            <h1 className='movies-heading'>Action Movies</h1>
            <MovieSlider moviesList = {actionMoviesList}/>
            <h1 className='movies-heading'>Comedy Movies</h1>
            <MovieSlider moviesList= {comedyMoviesList}/>
        </div>

    </div>
  )
}

export default PrimeVideos