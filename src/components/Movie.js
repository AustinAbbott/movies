import React from "react";

const Movie = (props) => {
  return (
    <div className="lines p2-a">
      <span>
        {props.movie.title}
      </span>
      <button onClick={() => props.toggleWatched(props.movie)} className={`f-r ${props.movie.watched ? "greenbtn" : "graybtn" }`}>Watched</button>

    </div>
  );
};

export default Movie;
