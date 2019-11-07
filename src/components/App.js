import React from "react";
import MovieList from "./MovieList";
import FormInput from "./FormInput";
import "../main.css";

let movies = [{
  title: "mean girls",
  year: 2000,
  runtime: 100,
  metascore: 4,
  imdbRating: 5,
  watched: true,
  selected: true
},
{
  title:"nice girls",
  year: 2005,
  runtime: 200,
  metascore: 1,
  imdbRating: 5,
  watched: true
}]

class App extends React.Component {
  constructor(props) {
    super(props);
    let filtered = movies.filter(movie => movie.watched)
    this.state = {
      searchResults: filtered,
      allMovies: movies,
      showWatched: true,
      selected: "mean girls"
    };

    this.filterMovie = this.filterMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.updateWatchBtns = this.updateWatchBtns.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  filterMovie(search="") {
    let results = this.state.allMovies.filter(movie =>{
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 && movie.watched === this.state.showWatched});
    this.setState({searchResults: results});
  }

  addMovie(movie) {
    this.setState({
      allMovies: [...this.state.allMovies, {title: movie, watched: true}]
    }, ()=> {this.filterMovie()});
  }

  toggleWatched(selectedMovie) {
    let newState = this.state.allMovies.map(movie => {
      if (movie === selectedMovie) {
        return {title: movie.title, watched: !movie.watched};
      }
      return movie;
    });

    this.setState({allMovies: newState}, () => this.filterMovie());

  }

  updateWatchBtns(shouldShow) {
    this.setState({showWatched:shouldShow}, () => this.filterMovie());
  }

  updateSelected(title) {
    this.setState({selected: title});
  }

  render(){
    return(
    <div>
      <div className="navbar"><h1>MovieList</h1></div>
      <div className="m-rl">
        <FormInput
          placeholderText="Add movie title here"
          btnClass="greenbtn"
          btnText="Add"
          fn={this.addMovie}
        />
        <span>
          <button
            onClick={() => this.updateWatchBtns(true)}
            className={`p1-a ${this.state.showWatched ? "greenbtn" : ""}`}>Watched</button>
          <button
            onClick={() => this.updateWatchBtns(false)}
            className={`p1-a ${!this.state.showWatched ? "greenbtn" : ""}`}>To Watch</button>
        </span>
        <span className="inline">
          <FormInput
            placeholderText="Search..."
            btnText="Go!"
            fn={this.filterMovie}
          />
        </span>
        <MovieList
          movies={this.state.searchResults}
          updateWatchBtns={this.updateWatchBtns}
          showWatched={this.state.showWatched}
          toggleWatched={this.toggleWatched}
          selected={this.state.selected}
          updateSelected={this.updateSelected}/>
      </div>
    </div>
  )};
}

export default App;
