import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //state exists on all React class-based components
    //records and reacts to JS events. here, we're initializing
    //state for the SearchBar search term
    this.state = { term: '' };
  }

  render () {
    //return a controlled component, that is set BY state, not the inverse
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  //above function is anonymous.
  //optionally can use a method function to bind
  //ex: onChange={this.onInputChange}
  //if brackets aren't included, you get
  //SyntaxError: JSX value should be either an expression or a quoted JSX text
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
