import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleInput(e) {
    this.setState({movie: e.target.value})
  }

  submitValue(e) {
    e.preventDefault();
    this.props.addMovie(this.state.movie);
    this.setState({movie: ""});
  }

  render() {
    return (
      <form className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Add movie title here"
          value={this.state.movie}
          onChange={this.handleInput}/>

        <button
          className="p0-a greenbtn"
          onClick={this.submitValue}
        >Add</button>
      </form>
    )
  }
}

export default AddMovie;
