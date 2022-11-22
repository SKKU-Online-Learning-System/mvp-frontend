import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import styled from 'styled-components';
import API from 'apis/MyPage';
import { useRouter } from 'next/router';
import {
	ICourseInfo,
	ILectureCount,
	IFinishedLectureCount,
} from 'types/MyPage';

const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

const Learning = () => {
	// useState에 완료 강좌 객체에 맞게 인터페이스 생성해두기.
	const router = useRouter();
	const [currentLearningCourseList, setCurrentLearningCourseList] =
		useState<ICourseInfo[]>();
	const [learningLectureCount, setLearningLectureCount] =
		useState<{ finishedLectureCount: number; maxLectureCount: number }[]>();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	const getLectureProgressStatus = (
		currentLearningCourseLists: ICourseInfo[],
		lectureCountLists: ILectureCount[],
		finishedLectures: IFinishedLectureCount[],
	) => {
		const learningLectureIds = currentLearningCourseLists.map(
			(elem) => elem.course.id,
		);

		const _learningLectureCount = learningLectureIds.map((elem) => {
			const maxLectureCount = +(
				lectureCountLists.find((value) => elem === value.courseId)
					?.lectures_count ?? 0
			);
			const finishedLectureCount = +(
				finishedLectures.find((value) => elem === value.courseId)
					?.finishedLecture ?? 0
			);

			return {
				finishedLectureCount,
				maxLectureCount,
			};
		});

		setLearningLectureCount(_learningLectureCount);
	};

	const showLectureProgressStatus = ({
		finishedLectureCount,
		maxLectureCount,
	}: {
		finishedLectureCount: number;
		maxLectureCount: number;
	}) => {
		if (!finishedLectureCount || !maxLectureCount) return;

		const percentage = ~~((finishedLectureCount / maxLectureCount) * 100);

		return `${finishedLectureCount}개 / ${maxLectureCount}개 (${percentage}%)`;
	};

	useEffect(() => {
		const fetchCurrentLearningCourses = API.fetchCurrentLearningCourses();
		const fetchLectureCounts = API.fetchLectureCounts();
		const fetchFinishedLectureCounts = API.fetchFinishedLectureCounts();
		const fetchCompleted = API.fetchCompleted();

		Promise.all([
			fetchCurrentLearningCourses,
			fetchLectureCounts,
			fetchFinishedLectureCounts,
			fetchCompleted,
		]).then((res) => {
			const [currentLearningCourseLists, lectureCountLists, finishedLectures] =
				res.map((elem) => elem.data);
			console.log(currentLearningCourseLists);

			getLectureProgressStatus(
				currentLearningCourseLists,
				lectureCountLists,
				finishedLectures,
			);
			setCurrentLearningCourseList(currentLearningCourseLists);
		});
	}, []);

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>

			<MyPageTitle title={MYPAGE_MENU.CURRENT_WATCHING_LECTURES} />
			<GridWrapper>
				{!!currentLearningCourseList?.length ? (
					currentLearningCourseList.map((elem, index) => (
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
					))
				) : (
					<div>강좌가 존재하지 않습니다</div>
				)}
			</GridWrapper>
		</MyPageLayout>
	);
};

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

export default Learning;
