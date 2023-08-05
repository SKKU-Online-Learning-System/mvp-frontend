import React from 'react';

import { useRecentLecturesFetch } from 'query/hooks/Main/index';
import HistoryCard from './HistoryCard';

const History = () => {
	const { data: latestLectures, isLoading } = useRecentLecturesFetch();

	if (isLoading) return <div>Loading...</div>;
	if (!latestLectures || latestLectures.length === 0)
		return <div>강의가 존재하지 않습니다</div>;

	return (
		<div className="min-h-screen bg-white">
			<div className="grid w-full min-h-full grid-cols-5 grid-rows-4 p-20 gap-x-12 gap-y-12">
				<HistoryCard lectures={latestLectures} />
			</div>
		</div>
	);
};

export default History;
