import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
      searchResults: movies
    }
    this.findMovie = this.findMovie.bind(this);
  }

  findMovie(search) {
    let results = movies.filter(movie =>{
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0}
  );
    this.setState({searchResults: results});
  }

  render(){
    return(
    <div>
      <div className="navbar"><h1>MovieList</h1></div>
      <div className="m-rl">
        <SearchBar movies={movies} findMovie={this.findMovie}/>
        <MovieList movies={this.state.searchResults}/>
      </div>
    </div>
  )}
}

export default App;
