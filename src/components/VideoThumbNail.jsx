import React from 'react';

export default function VideoThumbNail(props) {
	const { thumbNail } = props;
	return (
		<img
			className="video-thumbnail-image"
			src={thumbNail.url}
			width="100%"
			height="100%"
			alt="Video ThumbNail"
		/>
	);
}
