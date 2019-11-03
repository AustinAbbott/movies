import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  return (
    props.movies.map((movie,i) => <Movie movie={movie} key={i} />)
  )
};

export default MovieList;
