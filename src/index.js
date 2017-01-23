//Third-party
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Personal
import youtubeSearch from './services/youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBo_aCZ3VX0AOJHIliZ2kSksIzazYre1x4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        youtubeSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
