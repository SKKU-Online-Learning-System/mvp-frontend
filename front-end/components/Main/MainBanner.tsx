import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { MainCourse } from 'types/Main';

type PropsType = {
	contents: MainCourse[];
};

const MainBanner = ({ contents }: PropsType) => {
	return (
		<div>
			<ReactPlayer
				url="/videos/main_banner.mp4"
				width="100%"
				height="100%"
				playing={true}
				muted={true}
				controls={false}
				disablePictureInPicture={true}
				// poster={
				// 	'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
				// }
			/>
		</div>
	);
};

export default MainBanner;
