import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import VideoThumbNail from './VideoThumbNail';

export default function VideoItem(props) {
	const { videoId, videos, selectVideo, playVideo, getVideoDetails } = props;

	const handleSelectVideo = (e) => {
		return selectVideo(e.target.id);
	};

	const handlePlayVideo = (e) => {
		e.preventDefault();
		if (videoId) {
			selectVideo(videoId);
			playVideo(videoId);
			getVideoDetails(videoId);
		}
	};
	return (
		<div
			id={videoId}
			className="video-list-item media row"
			onChange={handleSelectVideo}
			onClick={handleSelectVideo}
		>
			<div
				className="video-thumbnail mr-3"
				onChange={handleSelectVideo}
				onClick={handlePlayVideo}
			>
				<span className="video-play-icon">
					<FontAwesomeIcon icon={faPlay} size="1x" />
				</span>
				<VideoThumbNail
					videoId={videoId}
					thumbNail={videos.thumbnails.default}
				/>
			</div>
			<div className="video-item-body media-body" onClick={handlePlayVideo}>
				<h5 className="video-item-title mt-0 row">
					{`${videos.title}`.replace('&#39;', "'")}
				</h5>
				<p className="video-item-channel row">{videos.channelTitle}</p>
				<p className="video-item-date row">{`${new Date(
					videos.publishTime,
				).getFullYear()}`}</p>
			</div>
		</div>
	);
}
