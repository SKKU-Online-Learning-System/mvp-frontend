import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

// TODO : 접근 못하게 막아야함. 보여줄 영상이 없음.
const LecturePlayer = () => {
	return (
		<LecturePlayerWrapper>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url={
						'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					} // 플레이어 url
					width="100%" // 플레이어 크기 (가로)
					height="768px" // 플레이어 크기 (세로)
					playing={true} // 자동 재생 on
					muted={true} // 자동 재생 on
					controls={true} // 플레이어 컨트롤 노출 여부
					light={false} // 플레이어 모드
					pip={true} // pip 모드 설정 여부
					poster={
						'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
					} // 플레이어 초기 포스터 사진
				/>
			</div>
		</LecturePlayerWrapper>
	);
};

const LecturePlayerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default LecturePlayer;
