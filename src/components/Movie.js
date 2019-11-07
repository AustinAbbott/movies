import React from "react";
import MovieMetaData from "./MovieMetaData";
const Movie = (props) => {
  return (
    <div className="lines">
      <div className={`${props.selected ? "greenbtn" : ""} p2-a`}
        onClick={() => props.updateSelected(props.movie.title)}>
        {props.movie.title}
      </div>
      <div className={props.selected ? "" : "hide"}>
        <MovieMetaData movie={props.movie} toggleWatched={props.toggleWatched}/>

      </div>
      

    </div>
  );
};

export default Movie;
