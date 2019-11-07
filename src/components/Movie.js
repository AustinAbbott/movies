import React from "react";
import MovieMetaData from "./MovieMetaData";
const Movie = (props) => {
  return (
    <div className="lines">
      <div className={`${props.movie.selected ? "greenbtn" : ""} p2-a`}
        onClick={() => props.toggleSelected(props.movie)}>
        {props.movie.title}
      </div>
      <div className={props.movie.selected ? "" : "hide"}>
        <MovieMetaData movie={props.movie} toggleWatched={props.toggleWatched}/>

      </div>


    </div>
  );
};

export default Movie;
