import React from 'react';
import ReactPlayer from 'react-player/lazy';

const LecturePlayer = () => {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url={
						'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					}
					width="100%"
					height="768px"
					playing={true}
					muted={true}
					controls={true}
					light={false}
					pip={true}
					poster={
						'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
					}
				/>
			</div>
		</div>
	);
};

export default LecturePlayer;
