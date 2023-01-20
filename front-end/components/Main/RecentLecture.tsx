import styled from 'styled-components';
import { useRouter } from 'next/router';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { CommonHeader } from './CourseList';
import { useRecentLecturesFetch } from 'query/hooks/Main/index';

type Props = {
	percentage: number;
};

export const RecentLecture = () => {
	const router = useRouter();
	const { data: recentLectures, isLoading } = useRecentLecturesFetch();

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

	return (
		<>
			<CommonHeader text={'최근 수강 강의'} color={'red'} />
			<GridWrapper>
				{recentLectures?.slice(0, 5).map((elem, index) => (
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
		</>
	);
};

export const GridWrapper = styled.div`
	display: grid;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: repeat(5, 1fr);
	padding: 20px 35px;
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
