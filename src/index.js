import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAqfrDlOsCNTCIVhqVWzrUex3P6inocpxU";

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('surfboards');
  }

	videoSearch(theTerm) {
		YTSearch({key: API_KEY, term: theTerm}, videos => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
		});
	}

	render() {

		const videoSearch = _.debounce(searchTerm => { this.videoSearch(searchTerm) }, 600);

		return (
			<div>
				<SearchBar
				  onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}

}

ReactDom.render(<App />, document.querySelector(".container"));
