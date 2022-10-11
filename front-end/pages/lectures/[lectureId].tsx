import ReactPlayer from 'react-player/lazy';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from 'apis/Lectures/lectureApi';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LecturePicker } from '@components/Lectures/LecturePicker';
import { HTTP_STATUS_CODE } from 'constants/statusCode';
import Error from 'next/error';
import withRouteGuard from '@components/withRouteGuard';

const LecturePlayer = () => {
	const router = useRouter();
	const { lectureId, courseId } = router.query;
	const ref = useRef<ReactPlayer | null>(null);

	const [videoUrl, setVideoUrl] = useState<string>('');

	const _fetchLectureVideoUrl = async (lectureId: string) => {
		try {
			const res = await API.fetchLectureVideoUrl(lectureId);
			setVideoUrl(res.data[0].filename);
		} catch (e: unknown) {
			console.warn(e);
		}
	};

	const _fetchLectureHistory = async (lectureId: string) => {
		try {
			const res = await API.fetchLectureHistory(lectureId);
			const lastTime = res.data.lastTime;
			lastTime && ref?.current?.seekTo(lastTime, 'seconds');
		} catch (e: unknown) {
			console.warn(e);
		}
	};

	const _updateLectureHistory = async (currentPlayTime: number) => {
		API.updateLectureHistory({
			lectureId: +(lectureId as string),
			lastTime: currentPlayTime,
		});
	};

	const sendCurrentPlayTime = () => {
		if (!ref?.current) return;

		const time = ~~ref.current.getCurrentTime();
		_updateLectureHistory(time);
	};

	useEffect(() => {
		if (!router.isReady) return;
		_fetchLectureVideoUrl(lectureId as string);
		_fetchLectureHistory(lectureId as string);
	}, [router.isReady, lectureId]);

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
							onPause={sendCurrentPlayTime}
							onProgress={sendCurrentPlayTime}
							onEnded={sendCurrentPlayTime}
						/>
					</div>
					{router.isReady && <LecturePicker courseId={courseId as string} />}
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

export default withRouteGuard(LecturePlayer);
