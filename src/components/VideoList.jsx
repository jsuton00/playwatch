import React from 'react';
import VideoItem from './VideoItem';
import '../styles/components/videoList.css';

export default function VideoList(props) {
	const { videoList, setVideoId, playVideo, getVideoDetails } = props;
	console.log(videoList);
	return (
		<div id="video-results-list" className="video-results-list list-group">
			{videoList.length > 0 &&
				videoList.map((videos, index) => {
					return (
						<VideoItem
							key={index}
							videoId={videos.id.videoId}
							videos={videos.snippet}
							thumbnails={videos.snippet.thumbnails}
							selectVideo={() => setVideoId(videos.id.videoId)}
							playVideo={() => playVideo(videos.id.videoId)}
							getVideoDetails={() => getVideoDetails(videos.id.videoId)}
						/>
					);
				})}
		</div>
	);
}
