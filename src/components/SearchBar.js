import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleInput(e) {
    this.setState({searchValue: e.target.value});
  }

  submitValue(e) {
    e.preventDefault();
    this.props.findMovie(this.state.searchValue);
    this.setState({searchValue: ""});
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
          onClick={this.submitValue}
        >Go!</button>
      </form>
    )
  }
}

export default SearchBar;
