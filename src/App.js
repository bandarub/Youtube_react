import React,{Component}from 'react';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer'
import NavBar from './components/NavBar';

import './style/style.css';

const API_KEY = "AIzaSyDGOexrD5eusQqozBjMMLChyoi7yksd4ow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYoutube('');
  }

  videoSearch = _.debounce((term) => { this.searchYoutube(term) }, 300);


  searchYoutube(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    console.log(this.state.sele)
    return (
      <div>
        <NavBar siteTitle='YouTube App' />
        <div className="container">
          <SearchBar
            onChange={searchTerm => this.videoSearch(searchTerm)} />
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}
            />
        </div>
      </div>
    );
  }

}

export default App;