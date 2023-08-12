import React from 'react';

import { ILectureList } from 'types/Lecture';
import { LectureProgress } from 'types/Lecture';

type PropsType = {
	idx: number;
	lecture: ILectureList;
	progress: LectureProgress[] | undefined;
	handleCollapseClick: (idx: number) => void;
};

const LectureListTitle = ({
	idx,
	lecture,
	progress,
	handleCollapseClick,
}: PropsType) => {
	const lecturesCnt = lecture.lectures.length;
	const finishedLecturesCnt = progress?.filter(
		(progress) => progress.isFinished,
	).length;
	const courseProgress = finishedLecturesCnt
		? finishedLecturesCnt / lecturesCnt
		: 0;

	return (
		<div
			className="flex justify-between text-lg font-bold items-center cursor-pointer bg-[#f0f0f0] h-[50px] mt-4 mb-1 px-6 text-[#5d5c5c]"
			onClick={() => handleCollapseClick(idx)}
		>
			<h4>{lecture.title}</h4>
			<span>{`${courseProgress}%`}</span>
		</div>
	);
};

export default LectureListTitle;