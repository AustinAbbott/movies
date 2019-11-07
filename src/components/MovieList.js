import React from "react";
import Movie from "./Movie";


const MovieList = (props) => {
  let message = props.movies.length === 0 ? "No Movies Found" : "";
  return (
    <div>
      {props.movies.map((movie,i) => <Movie
        toggleWatched={props.toggleWatched}
        movie={movie}
        selected={props.selected === movie.title}
        updateSelected={props.updateSelected}
        key={i} />)}
      <div className="p2-t">{message}</div>
    </div>
  );
};

export default MovieList;
