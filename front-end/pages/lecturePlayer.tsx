import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player/lazy';

import Layout from '@components/Layout';
import { EditorProps } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';

const Editor = dynamic<EditorProps>(
	() => import('@toast-ui/react-editor').then((m) => m.Editor),
	{ ssr: false },
);

const LecturePlayer = () => {
	return (
		<Layout>
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
				<div className="editor-wrapper" style={{ width: '300px' }}>
					<Editor
						initialValue="# 메모"
						previewStyle="tab"
						toolbarItems={[]}
						height="768px"
						initialEditType="markdown"
					/>
				</div>
			</LecturePlayerWrapper>
		</Layout>
	);
};

const LecturePlayerWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export default LecturePlayer;
