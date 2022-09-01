import ReactPlayer from 'react-player/lazy';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchLectureVideoUrl } from 'apis/Lectures/lectureApi';
import { fetchCourseDetailLectures } from 'apis/Courses/courseApi';
import { useRouter } from 'next/router';
import { LecturePicker } from '@components/Lectures/LecturePicker';

// courseId 기억해야함.
const LecturePlayer = () => {
	const router = useRouter();
	const { lectureId, courseId } = router.query;

	const [videoUrl, setVideoUrl] = useState<string>('');

	const _fetchLectureVideoUrl = async (lectureId: string) => {
		const res = await fetchLectureVideoUrl(lectureId);
		setVideoUrl(res.data.video_url);
	};

	useEffect(() => {
		if (!router.isReady) return;
		_fetchLectureVideoUrl(lectureId as string);
	}, [router.isReady, lectureId]);

	return (
		<LecturePlayerWrapper>
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url={`https://mrdang.kro.kr/api/${videoUrl}`} // 플레이어 url
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
			{router.isReady && <LecturePicker courseId={courseId as string} />}
		</LecturePlayerWrapper>
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
