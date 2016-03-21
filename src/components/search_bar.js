import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props); //Component parent method

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value ={this.state.term} // input is now a controlled element (value only changes when state changes)
          onChange={event => this.setState({ term: event.target.value })}
          />
      </div>
  )

  }
}

export default SearchBar;
