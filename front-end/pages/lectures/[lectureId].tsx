import React, { ReactElement, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { LecturePicker } from '@components/Lectures/LecturePicker';
import { HTTP_STATUS_CODE } from 'constants/http';
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

const LecturePlayer = (): ReactElement => {
	const router = useRouter();
	const { lectureId, courseId } = router.query as RouterQueryString;
	const ref = useRef<ReactPlayer | null>(null);

	const { data: videoUrl, isLoading: isVideoUrlLoading } =
		useLectureVideoUrlFetch(lectureId);
	const { isLoading: isRecentLectureHistoryLoading } = useLectureHistoryFetch(
		lectureId,
		{
			onSuccess: (lastTime: number) => {
				if (ref.current) {
					ref.current.seekTo(lastTime, 'seconds');
				}
			},
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
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				온라인명륜당
			</h2>
			{courseId && lectureId ? (
				<div className="font-['Noto Sans KR'] flex flex-row min-h-screen  ">
					<div className="">
						{router.isReady && (
							<LecturePicker courseId={courseId} lectureId={lectureId} />
						)}
					</div>
					{/* 640px 360px */}
					<div className="flex w-full min-h-full p-10 pb-24 player-wrapper place-content-center">
						<ReactPlayer
							ref={ref}
							url={videoUrl} // 플레이어 url
							style={{ minWidth: '1080px', minHeight: '768px' }}
							playing={true} // 자동 재생 on
							muted={true} // 음소거 활성화
							controls={true} // 플레이어 컨트롤 노출 여부
							light={false} // 플레이어 모드
							pip={true} // pip 모드(작은 화면 모달) 설정 여부
							disablePictureInPicture={true} // pip 아이콘 비활성화
							poster={
								'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
							} // 플레이어 초기 포스터 사진
							progressInterval={10000} // 프로그레스 업데이트 간격 (ms)
							onPause={onUpdateCurrentPlayTime} // 일시 정지 시 호출할 함수
							onProgress={onUpdateCurrentPlayTime} // 재생 중 호출할 함수
							onEnded={onEnded} // 재생 종료 시 호출할 함수
						/>
					</div>
				</div>
			) : (
				<Error statusCode={HTTP_STATUS_CODE.NOT_FOUND} />
			)}
		</>
	);
};

export default LecturePlayer;
