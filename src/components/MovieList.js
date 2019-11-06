import React from "react";
import Movie from "./Movie";


const MovieList = (props) => {
  let message = props.movies.length === 0 ? "No Movies Found" : "";

  return (
    <div className="p2-t">
      <button
        onClick={() => props.updateWatchBtns(true)}
        className={`p1-a ${props.showWatched ? "greenbtn" : ""}`}>Watched</button>
      <button
        onClick={() => props.updateWatchBtns(false)}
        className={`p1-a ${!props.showWatched ? "greenbtn" : ""}`}>To Watch</button>
      {props.movies.map((movie,i) => <Movie
        toggleWatched={props.toggleWatched}
        movie={movie}
        key={i} />)}
      <div className="p2-t">{message}</div>
    </div>
  );
};

export default MovieList;
