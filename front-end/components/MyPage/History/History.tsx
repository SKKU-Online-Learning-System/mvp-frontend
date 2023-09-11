import React from 'react';
import Image from 'next/image';

import { useRecentLecturesFetch } from 'query/hooks/Main/index';
import HistoryCard from './HistoryCard';

const History = () => {
	const { data: latestLectures, isLoading } = useRecentLecturesFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
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
