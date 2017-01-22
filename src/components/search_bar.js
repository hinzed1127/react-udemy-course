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
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
