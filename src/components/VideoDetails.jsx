import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoDetails(props) {
	const { selectedVideo } = props;

	return (
		<div id="video-details" className="video-details container-fluid">
			<div className="video-player-container row">
				<ReactPlayer
					className="video-player"
					url={selectedVideo}
					width={'100%'}
					playing={true}
					controls={true}
				/>
			</div>
		</div>
	);
}
