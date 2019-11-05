import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  return (
    <div className="p2-t">
      {props.movies.map((movie,i) => <Movie movie={movie} key={i} />)}
    </div>
  )
};

export default MovieList;
