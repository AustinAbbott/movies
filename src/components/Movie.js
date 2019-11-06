import React from "react";

const Movie = (props) => {
  console.log(props.movie);
  return (
    <div className="lines p2-a">
      <span>
        {props.movie.title}
      </span>
      <button onClick={props.toggleWatched} className={`f-r ${props.movie.watched ? "greenbtn" : "graybtn" }`}>Watched</button>

    </div>
  );
};

export default Movie;
