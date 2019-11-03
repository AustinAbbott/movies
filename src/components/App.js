import React from 'react';
import MovieList from './MovieList';
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
      <MovieList movies={movies}/>
    </div>
  )}
}

export default App;
