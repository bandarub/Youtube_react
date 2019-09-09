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


  searchYoutube = (term) =>{
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleVideoSelect= (selectedVideo)=>{
    this.setState({selectedVideo})

  }

  render() {
    const {selectedVideo,videos}=this.state
    return (
      <div>
        <div className="row">
          <div className="col-sm-1" ><NavBar siteTitle='YouTube App' /></div>
          <div className="col-sm-8"><SearchBar   onChange={searchTerm => this.videoSearch(searchTerm)} /></div>
        </div>
        <div className="container" >
          <VideoPlayer video={selectedVideo} />
          <VideoList onVideoSelect={this.handleVideoSelect} videos={videos}/>
        </div>
      </div>
    );
  }

}

export default App;