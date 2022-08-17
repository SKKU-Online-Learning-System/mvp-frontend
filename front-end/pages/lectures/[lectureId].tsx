import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player/lazy';

import Layout from '@components/Layout';
import { EditorProps } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axiosInstance from 'apis';
import { useRouter } from 'next/router';

const Editor = dynamic<EditorProps>(
	() => import('@toast-ui/react-editor').then((m) => m.Editor),
	{ ssr: false },
);

const LecturePlayer = () => {
	const router = useRouter();
	const { lectureId } = router.query;

	const [videoUrl, setVideoUrl] = useState('');

	useEffect(() => {
		if (!router.isReady) return;
		axiosInstance.get(`/file/video/lecture/${lectureId}`).then((res) => {
			setVideoUrl(res.data.video_url);
		});
	}, [router.isReady, lectureId, setVideoUrl]);

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
			<div className="editor-wrapper" style={{ width: '300px' }}>
				<Editor
					initialValue="# 메모"
					previewStyle="tab"
					height="768px"
					toolbarItems={[]}
					initialEditType="markdown"
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