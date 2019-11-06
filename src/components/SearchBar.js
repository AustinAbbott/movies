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
      <div className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={this.handleInput}/>

        <button
          className="p0-a"
          onClick={() => this.props.findMovie(this.state.searchValue)}
        >Go!</button>
      </div>
    )
  }
}

export default SearchBar;
