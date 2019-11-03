import React from 'react';
import MovieList from './MovieList';
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
      <MovieList movies={movies}/>
    </div>
  )}
}

export default App;
