import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    return <input onChange={event => console.log(event.target.value)} />;
  }

  //above function is anonymous.
  //optionally can use a method function to bind
  //ex: onChange={this.onInputChange}
  //if brackets aren't included, you get
  //SyntaxError: JSX value should be either an expression or a quoted JSX text
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
