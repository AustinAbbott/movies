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
    this.findMovie = this.findMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  findMovie(search) {
    let results = this.state.allMovies.filter(movie =>{
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0});
    this.setState({searchResults: results});
  }

  addMovie(movie) {
    this.setState({
      allMovies: [...this.state.allMovies, {title: movie}],
      searchResults: [...this.state.searchResults, {title: movie}]
    });
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
          fn={this.findMovie}
        />
        <MovieList movies={this.state.searchResults}/>
      </div>
    </div>
  )};
}

export default App;
