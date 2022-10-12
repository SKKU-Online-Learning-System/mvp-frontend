import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import { AxiosResponse, AxiosError } from 'axios';
import styled from 'styled-components';
import API from 'apis/MyPage';
import { useRouter } from 'next/router';
import { IEnrolledCourse } from 'types/MyPage';
type Props = {
	percentage: number;
};
const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

const Learning = () => {
	// useState에 완료 강좌 객체에 맞게 인터페이스 생성해두기.
	const router = useRouter();
	const [currentLearningCourseList, setCurrentLearningCourseList] =
		useState<IEnrolledCourse[]>();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	useEffect(() => {
		API.fetchCurrentLearningCourses()
			.then((res: AxiosResponse) => {
				setCurrentLearningCourseList(res.data);
			})
			.catch((error: AxiosError) => {
				console.warn(error);
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
				{currentLearningCourseList &&
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
							<ProgressBar percentage={'44'}>
								<div className="current_progress_position"></div>
							</ProgressBar>
							<div className="title">{elem.course.title}</div>
							<div className="time">
								45%
								{/* {showTimeProgress(elem.lastTime, elem.lecture.duration)} */}
							</div>
						</div>
					))}
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

const ProgressBar = styled.div<Props>`
	position: absolute;
	bottom: 50px;
	right: 0;
	left: 0;
	height: 4px;
	background-color: #717171;

	.current_progress_position {
		position: absolute;
		height: 100%;
		width: ${(props) => `${props.percentage}%`};
		background-color: red;
	}
`;

export default Learning;
