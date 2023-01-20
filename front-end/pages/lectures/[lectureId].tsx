import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LecturePicker } from '@components/Lectures/LecturePicker';
import { HTTP_STATUS_CODE } from 'constants/http';
import Error from 'next/error';
import {
	useLectureVideoUrlFetch,
	useLectureHistoryFetch,
	useLectureHistoryUpdate,
	useLectureCompleteUpdate,
} from 'query/hooks/Lecture/index';

type RouterQueryString = {
	lectureId: string;
	courseId: string;
};

const LecturePlayer = () => {
	const router = useRouter();
	const { lectureId, courseId } = router.query as RouterQueryString;
	const ref = useRef<ReactPlayer | null>(null);

	const { data: videoUrl, isLoading: isVideoUrlLoading } =
		useLectureVideoUrlFetch(lectureId);
	const { isLoading: isRecentLectureHistoryLoading } = useLectureHistoryFetch(
		lectureId,
		{
			onSuccess: (lastTime: number) =>
				ref?.current?.seekTo(lastTime, 'seconds'),
		},
	);
	const updateLectureHistory = useLectureHistoryUpdate();
	const updateLectureComplete = useLectureCompleteUpdate();

	const isLoading = isVideoUrlLoading || isRecentLectureHistoryLoading;

	const onUpdateCurrentPlayTime = () => {
		if (!ref?.current) return;

		const currentPlayTime = ~~ref.current.getCurrentTime();

		updateLectureHistory.mutate({
			lectureId: +lectureId,
			lastTime: currentPlayTime,
		});
	};

	const onUpdateLectureComplete = () => updateLectureComplete.mutate(+courseId);

	const onEnded = () => {
		onUpdateCurrentPlayTime();
		onUpdateLectureComplete();
	};

	if (isLoading) return <div>Loading....</div>;

	return (
		<>
			{courseId ? (
				<LecturePlayerWrapper>
					<div className="player-wrapper">
						<ReactPlayer
							ref={ref}
							className="react-player"
							url={videoUrl} // 플레이어 url
							style={{ minWidth: '1080px', minHeight: '768px' }}
							playing={true} // 자동 재생 on
							muted={true} // 자동 재생 on
							controls={true} // 플레이어 컨트롤 노출 여부
							light={false} // 플레이어 모드
							pip={true} // pip 모드 설정 여부
							poster={
								'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
							} // 플레이어 초기 포스터 사진
							progressInterval={10000}
							onPause={onUpdateCurrentPlayTime}
							onProgress={onUpdateCurrentPlayTime}
							onEnded={onEnded}
						/>
					</div>
					{router.isReady && <LecturePicker courseId={courseId} />}
				</LecturePlayerWrapper>
			) : (
				<Error statusCode={HTTP_STATUS_CODE.NOT_FOUND} />
			)}
		</>
	);
};

const LecturePlayerWrapper = styled.div`
	font-family: 'Noto Sans KR';
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default LecturePlayer;
