import ContentCard from './ContentCard';
const ContentMenu = () => {
	return (
		<div style={{ padding: '0 2vw' }}>
			<ContentCard title={'전체 강의'} type={[]} />
			<ContentCard
				title={''}
				type={[
					'개발 · 프로그래밍',
					'보안 · 네트워크',
					'데이터 사이언스',
					'크리에이티브',
					'직무 · 마케팅',
				]}
			/>
		</div>
	);
};

export default ContentMenu;
