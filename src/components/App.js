import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import FormInput from './FormInput';
import '../main.css';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      allMovies: []
    }
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
        Since AddMovie and SearchBar are so similar to one another, we can dry them up. This FormInput component is equivalent to the AddMovie component.
        <FormInput
          placeholderText="Add movie title here"
          btnClass="greenbtn"
          btnText="Add"
          fn={this.addMovie}
        />
        <AddMovie addMovie={this.addMovie} />

        <hr/>
        This FormInput is equivalent to the SearchBar.
        <FormInput
          placeholderText="Search..."
          btnText="Go!"
          fn={this.findMovie}
        />
        <SearchBar movies={this.state.allMovies} findMovie={this.findMovie}/>
        <MovieList movies={this.state.searchResults}/>
      </div>
    </div>
  )}
}

export default App;
