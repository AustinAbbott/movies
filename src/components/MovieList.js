import React from "react";
import Movie from "./Movie";


const MovieList = (props) => {
  let message = props.movies.length === 0 ? "No Movies Found" : "";

  return (
    <div className="p2-t">
      {message}
      {props.movies.map((movie,i) => <Movie
        toggleWatched={props.toggleWatched}
        movie={movie}
        key={i} />)}
    </div>
  );
};

export default MovieList;
