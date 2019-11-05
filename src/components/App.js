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
  render(){
    return(
    <div>
      <div className="navbar"><h1>MovieList</h1></div>
      <div className="m-rl">
        <SearchBar />
        <MovieList movies={movies}/>
      </div>
    </div>
  )}
}

export default App;
