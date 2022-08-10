import LectureList from './LectureList';
import TopSearchbar from './TopSearchbar';
import LectureTag from './LectureTag';
import BreadCrumb from './BreadCrumb';
const LectureBody = () => {
	return (
		<div style={{ flex: 8 }}>
			{/* 상단 검색바 */}
			<TopSearchbar />
			{/* 전체| 크리에이티브 부분 */}
			<BreadCrumb />
			{/* TAG */}
			<LectureTag />
			{/* 강의 보여주는 부분 */}
			<LectureList />
		</div>
	);
};

export default LectureBody;
