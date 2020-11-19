import React, { Component } from 'react';
import { playYoutubeVideo, searchVideos } from './apis/api';
import Header from './components/Header';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';
import './styles/app.css';

class App extends Component {
	state = {
		videoList: '',
		searchTerm: '',
		videoId: '',
		videoUrl: '',
		loadingVideoList: false,
		errorSearchingVideos: false,
		errorPlayingVideo: false,
	};

	fetchVideoList = async (searchTerm) => {
		try {
			this.setState({ loadingVideoList: true });
			let request;
			let videoList;
			if (searchTerm) {
				request = await searchVideos(searchTerm);
				videoList = await request.data.items;

				this.setState({
					loadingVideoList: false,
					errorSearchingVideos: false,
					videoList: videoList,
				});
			}
		} catch (err) {
			this.setState({
				loadingVideoList: false,
				errorSearchingVideos: false,
			});
			console.log('Error', err);
		}
	};

	setSearchTerm = (newSearchTerm) => {
		this.setState({ searchTerm: newSearchTerm });
	};

	setVideoId = (newVideoId) => {
		this.setState({ videoId: newVideoId });
	};

	playVideo = (videoId) => {
		try {
			let youtubeUrl;
			if (videoId) {
				youtubeUrl = playYoutubeVideo(videoId);
				this.setState({
					errorPlayingVideo: false,
					videoUrl: youtubeUrl,
				});
			}
		} catch (err) {
			this.setState({ errorPlayingVideo: true });
			console.log(`Error playing video: ${err.message}`);
		}
	};

	componentDidMount() {
		this.timer = setTimeout(() => {
			if (this.state.searchTerm) {
				this.fetchVideoList(this.state.searchTerm);
			}

			if (this.state.videoId) {
				this.playVideo(this.state.videoId);
			}
		});
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}
	render() {
		return (
			<div id="app" className="app">
				<Header
					searchValue={this.state.searchTerm}
					changeSearchValue={this.setSearchTerm}
					searchVideos={this.fetchVideoList}
				/>
				<main id="main" className="main container-fluid">
					<div className="video-container container-fluid">
						<div className="video-container-row row">
							<div className="video-container-col video-display ">
								<VideoDetails selectedVideo={this.state.videoUrl} />
							</div>
							<div className="video-container-col video-list">
								{this.state.videoList && (
									<VideoList
										videoList={this.state.videoList}
										setVideoId={this.setVideoId}
										playVideo={this.playVideo}
									/>
								)}
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
