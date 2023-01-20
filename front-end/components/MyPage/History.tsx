import styled from 'styled-components';

import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { MYPAGE_MENU } from 'constants/MyPage';
import { useRouter } from 'next/router';
import { useRecentLecturesFetch } from 'query/hooks/Main/index';

type Props = {
	percentage: number;
};

const menu = [MYPAGE_MENU.RECENT_WATCHING_LECTURES];

const History = () => {
	const router = useRouter();

	const { data: latestLectures, isLoading } = useRecentLecturesFetch();

	const isValidate = (curTime: number, duration: number) => {
		return duration !== 0 && duration >= curTime;
	};

	const getProgressPercentage = (
		curTime: number = 0,
		duration: number = 0,
	): number => {
		if (!isValidate(curTime, duration)) return 0;

		return ~~((curTime / duration) * 100);
	};

	const showTimeProgress = (curTime: number = 0, duration: number = 0) => {
		if (!isValidate(curTime, duration)) return '';

		return `${durationToHhMmSs(curTime)} / ${durationToHhMmSs(
			duration,
		)} (${getProgressPercentage(curTime, duration)}%)`;
	};

	const handleClick = (courseId?: number, lectureId?: number) => () => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	if (isLoading) return <div>Loading...</div>;
	if (!latestLectures?.length) return <div>강의가 존재하지 않습니다</div>;

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.RECENT_WATCHING_LECTURES} />

			<GridWrapper>
				{latestLectures.slice(0, 20).map((elem, index) => (
					<div
						className="wrapper"
						onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
						key={index}
					>
						<img
							className="image"
							width={'100%'}
							src={elem.lecture.course.thumbnail}
						></img>
						<ProgressBar
							percentage={getProgressPercentage(
								elem.lastTime,
								elem.lecture.duration,
							)}
						>
							<div className="current_progress_position"></div>
						</ProgressBar>
						<div className="title">{elem.lecture.title}</div>
						<div className="time">
							{showTimeProgress(elem.lastTime, elem.lecture.duration)}
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

export default History;
