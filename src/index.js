import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBo_aCZ3VX0AOJHIliZ2kSksIzazYre1x4';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'uptake chicago'}, (videos) => {
          this.setState({ videos });
          //ES6 syntactic sugar
          //equivalent to this.setState({videos: videos});
          //Uses destructuring, see video_list_item for another example
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
