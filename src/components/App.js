import React from "react";
import MovieList from "./MovieList";
import FormInput from "./FormInput";
import "../main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      allMovies: []
    };
    this.filterMovie = this.filterMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  filterMovie(search) {
    let results = this.state.allMovies.filter(movie =>{
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0});
    this.setState({searchResults: results});
  }

  addMovie(movie) {
    this.setState({
      allMovies: [...this.state.allMovies, {title: movie, watched: true}]
    }, ()=> {this.filterMovie("")});
  }

  toggleWatched(selectedMovie) {
    let newState = this.state.allMovies.map(movie => {
      if (movie === selectedMovie) {
        return {title: movie.title, watched: !movie.watched};
      }
      return movie;
    });

    this.setState({allMovies: newState}, () => this.filterMovie(""));

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
        <FormInput
          placeholderText="Search..."
          btnText="Go!"
          fn={this.filterMovie}
        />
        <MovieList
          movies={this.state.searchResults}
          toggleWatched={this.toggleWatched}/>
      </div>
    </div>
  )};
}

export default App;
