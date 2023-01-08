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

	const getProgressPercentage = (curTime?: number, duration?: number) => {
		curTime ??= 0;
		duration ??= 0;

		// 현재 시간이 전체 길이보다 긴 경우 (오류 발생 케이스)
		if (duration < curTime) {
			curTime = duration;
		}

		return ~~((curTime / duration) * 100);
	};

	const showTimeProgress = (curTime?: number, duration?: number) => {
		curTime ??= 0;
		duration ??= 0;

		// 현재 시간이 전체 길이보다 긴 경우 (오류 발생 케이스)
		if (duration < curTime) {
			curTime = duration;
		}

		const _curTime = durationToHhMmSs(curTime);
		const _duration = durationToHhMmSs(duration);
		let progressPercentage = 0;

		if (duration) progressPercentage = getProgressPercentage(curTime, duration);
		return `${_curTime} / ${_duration} (${progressPercentage}%)`;
	};

	const handleClick = (courseId: number, lectureId: number) => () => {
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
