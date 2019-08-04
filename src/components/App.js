import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component {

  state = { videos : [], videoSelected : null }

  componentDidMount(){
    this.onInputSubmit('Welcome')
  }

  onInputSubmit = async (myInput) => {
     const response = await youtube.get('/search', {
      params: {
        q: myInput
      } 
    });
    this.setState({
      videos : response.data.items,
      videoSelected : response.data.items[0]
    })
  };

  onSelectedvideo = (video) => {
    this.setState({videoSelected : video})
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList onSelectedVideo={this.onSelectedvideo} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;