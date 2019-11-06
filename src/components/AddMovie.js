import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({movie: e.target.value})
  }

  render() {
    return (
      <div className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Add movie title here"
          value={this.state.movie}
          onChange={this.handleInput}/>

        <button
          className="p0-a greenbtn"
          onClick={() => this.props.addMovie(this.state.movie)}
        >Add</button>
      </div>
    )
  }
}

export default AddMovie;
