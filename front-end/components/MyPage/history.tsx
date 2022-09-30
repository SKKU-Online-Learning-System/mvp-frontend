import { useEffect, useState } from 'react';
import styled from 'styled-components';

import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';

import axiosInstance from 'apis';
import { AxiosResponse, AxiosError } from 'axios';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { MYPAGE_MENU } from 'constants/MyPage';
// TODO. css class명 기준 뭘로 할지.. BEM 을 따를지.. 아직 잘 모르겠음
interface ILatestLectures {
	duration?: number;
	filename?: string;
	id?: number;
	isFinished?: number; // 0 or 1
	lastTime?: number;
	title?: string;
	updatedAT?: string;
}

const menu = [MYPAGE_MENU.RECENT_WATCHING_LECTURES];

const History = () => {
	const [latestLectures, setLatestLectures] = useState<ILatestLectures[]>();

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

		if (duration) progressPercentage = ~~((curTime / duration) * 100);

		return `${_curTime} / ${_duration} (${progressPercentage}%)`;
	};

	useEffect(() => {
		axiosInstance
			.get('history/latest')
			.then((res: AxiosResponse) => {
				setLatestLectures(res.data);
			})
			.catch((error: AxiosError) => {
				console.warn(error);
			});

		axiosInstance
			.get('completed')
			.then((res: AxiosResponse) => {
				console.log(res.data);
			})
			.catch((error: AxiosError) => {
				console.warn(error);
			});

		axiosInstance
			.get('history')
			.then((res: AxiosResponse) => {
				console.log(res.data);
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
				{latestLectures &&
					latestLectures.map((elem, index) => (
						<div className="wrapper" key={index}>
							<div className="title">{elem.title}</div>
							<div className="time">
								{showTimeProgress(elem.lastTime, elem.duration)}
							</div>
						</div>
					))}
			</GridWrapper>
		</MyPageLayout>
	);
};

const GridWrapper = styled.div`
	display: grid;
	border: 1px solid grey;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(4, 1fr);
	padding-left: 20px;
	padding-top: 10px;

	.wrapper {
		width: 100%;
		overflow: hidden;
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
`;

export default History;
