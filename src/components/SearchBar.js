import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: ""
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <form className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleInput}/>

        <button
          className="p0-a"
          onClick={(e) => this.props.findMovie(e,this.state.searchValue)}
        >Go!</button>
      </form>
    )
  }
}

export default SearchBar;
