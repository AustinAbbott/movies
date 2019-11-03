import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  return (
    <Movie movie={props.movies[0]}/>
  )
};

export default MovieList;
