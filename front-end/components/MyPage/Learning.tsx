import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useCurrentLeaningCourseListFetch } from 'query/hooks/MyPage';

const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

interface ILectureStatusCount {
	finishedLectureCount: number;
	maxLectureCount: number;
}

const Learning = () => {
	const router = useRouter();

	const [learningLectureCount, setLearningLectureCount] =
		useState<ILectureStatusCount[]>();

	const result = useCurrentLeaningCourseListFetch();
	const [currentLearningCourseList, finishedLectureList, lectureCountList] = [
		result[1].data,
		result[2].data,
		result[3].data,
	];
	const isLoading = result.some((elem) => elem.isLoading);

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	const showLectureProgressStatus = ({
		finishedLectureCount,
		maxLectureCount,
	}: {
		finishedLectureCount: number;
		maxLectureCount: number;
	}) => {
		if (!maxLectureCount) return;

		let percentage = ~~((finishedLectureCount / maxLectureCount) * 100);
		if (!finishedLectureCount) percentage = 0;

		return `${finishedLectureCount}개 / ${maxLectureCount}개 (${percentage}%)`;
	};

	useEffect(() => {
		if (isLoading) return;

		const learningLectureCount = currentLearningCourseList?.reduce(
			(prev: ILectureStatusCount[], cur) => {
				const id = cur.course.id;

				const maxLectureCount = +(
					lectureCountList?.find((value) => id === value.courseId)
						?.lectures_count ?? 0
				);
				const finishedLectureCount = +(
					finishedLectureList?.find((value) => id === value.courseId)
						?.finishedLecture ?? 0
				);

				prev.push({ finishedLectureCount, maxLectureCount });
				return prev;
			},
			[],
		);

		setLearningLectureCount(learningLectureCount);
	}, [isLoading]);

	if (isLoading) return <div>Loading...</div>;
	if (!currentLearningCourseList?.length)
		return <div>강좌가 존재하지 않습니다</div>;

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>

			<MyPageTitle title={MYPAGE_MENU.CURRENT_WATCHING_LECTURES} />
			<GridWrapper>
				{currentLearningCourseList.map((elem, index) => (
					<div
						className="wrapper"
						onClick={handleClick(elem.course.id)}
						key={index}
					>
						<img
							className="image"
							width={'100%'}
							src={elem.course.thumbnail}
						></img>
						<div className="title">{elem.course.title}</div>
						<div className="time">
							{learningLectureCount &&
								showLectureProgressStatus(learningLectureCount[index])}
						</div>
					</div>
				))}
			</GridWrapper>
		</MyPageLayout>
	);
};

export default Learning;

export const GridWrapper = styled.div`
	display: grid;
	border: 1px solid grey;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;
	.wrapper {
		cursor: pointer;
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.title {
		font-size: 16px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.time {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		color: rgba(0, 0, 0, 0.5);
	}

	.image {
		aspect-ratio: 16/9;
	}
`;
