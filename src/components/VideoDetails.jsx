import {
	faFlag,
	faPlusSquare,
	faShare,
	faThumbsDown,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/components/videoDetails.css';
import { formatDates } from '../utils/formatDates';
import {
	formatNumbertoK,
	formatThousandstoString,
} from '../utils/formatNumbers';

export default function VideoDetails(props) {
	const { selectedVideo, selectedVideoDetails } = props;

	console.log(selectedVideoDetails && selectedVideoDetails);

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
			{selectedVideoDetails && (
				<div className="video-details-section row">
					<h3 className="video-details-title row">
						{selectedVideoDetails.snippet.title}
					</h3>
					<div className="video-details-stats row">
						<div className="video-stats-views-date">
							<p className="video-stats-views">
								{`${formatThousandstoString(
									selectedVideoDetails.statistics.viewCount,
								)} views`}
							</p>
							<p className="video-stats-date">
								{`${formatDates(selectedVideoDetails.snippet.publishedAt)}`}
							</p>
						</div>
						<div className="video-stats-social-controls">
							<p className="video-stats-countLikes">
								<span className="like-icon">
									<FontAwesomeIcon icon={faThumbsUp} />
								</span>
								{formatNumbertoK(selectedVideoDetails.statistics.likeCount)}
							</p>
							<p className="video-stats-countDislikes">
								<span className="dislike-icon">
									<FontAwesomeIcon icon={faThumbsDown} />
								</span>
								{formatNumbertoK(selectedVideoDetails.statistics.dislikeCount)}
							</p>
							<p className="video-stats-share">
								<span className="share-icon">
									<FontAwesomeIcon icon={faShare} />
								</span>
								Share
							</p>
							<p className="video-stats-save">
								<span className="save-icon">
									<FontAwesomeIcon icon={faPlusSquare} />
								</span>
								Save
							</p>
							<p className="video-stats-report">
								<span className="report-icon">
									<FontAwesomeIcon icon={faFlag} />
								</span>
								Report
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
