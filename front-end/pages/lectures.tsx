import Layout from '@components/Layout';
import SidebarLeft from '@components/Lectures/SidebarLeft';
import LectureBody from '@components/Lectures/LectureBody';
const LecturesPage = () => (
	<Layout>
		{/* 화면 전체 */}
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				padding: '2rem 0',
			}}
		>
			{/* 왼쪽 sidebar 전체 */}
			<SidebarLeft />
			{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}
			<LectureBody />
		</div>
	</Layout>
);

export default LecturesPage;
