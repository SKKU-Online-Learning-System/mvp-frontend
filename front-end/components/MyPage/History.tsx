import { useEffect, useState } from 'react';
import styled from 'styled-components';

import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { AxiosResponse, AxiosError } from 'axios';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { MYPAGE_MENU } from 'constants/MyPage';
import API from 'apis/MyPage';
import { useRouter } from 'next/router';
import { ILatestLecture } from 'types/MyPage';
// TODO. css class명 기준 뭘로 할지.. BEM 을 따를지.. 아직 잘 모르겠음
type Props = {
	percentage: number;
};

const menu = [MYPAGE_MENU.RECENT_WATCHING_LECTURES];

const History = () => {
	const router = useRouter();
	const [latestLectures, setLatestLectures] = useState<ILatestLecture[]>();

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

	const handleClick = (courseId?: number, lectureId?: number) => () => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	useEffect(() => {
		API.fetchRecentLectures()
			.then((res: AxiosResponse) => {
				setLatestLectures(res.data.slice(0, 20));
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
			<MyPageTitle title={MYPAGE_MENU.RECENT_WATCHING_LECTURES} />

			<GridWrapper>
				{!!latestLectures?.length ? (
					latestLectures.map((elem, index) => (
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
					))
				) : (
					<div>강의가 존재하지 않습니다</div>
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
