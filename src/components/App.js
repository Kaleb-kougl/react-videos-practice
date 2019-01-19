import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtubeApi from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: "",
  }

  onTermSubmit = async searchTerm => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState(
      {
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
  };

  onSelectVideo = video => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    this.onTermSubmit("Buildings");
  }


  render() {
    let clickedVideoDetail;
    if (this.state.selectedVideo) {
      clickedVideoDetail = <VideoDetail video={this.state.selectedVideo} />
    } else {
      clickedVideoDetail = <div>No current Video</div>
    }

    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">

            <div className="eleven wide column">
              {clickedVideoDetail}
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;