import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from './MovieItem'

const MovieSlider = ({moviesList}) => {
    const settings = {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 4,
      }
    return (
    <div>
        <Slider {...settings}>
            {moviesList.map(eachMovie=>(
                <MovieItem key={eachMovie.id} movieDetails={eachMovie}/>
            ))}
        </Slider>
    </div>
  )
}

export default MovieSlider