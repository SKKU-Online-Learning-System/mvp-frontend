import Link from 'next/link';
import Layout from '@components/Layout';

import Banner from '@components/Home/Banner';
import HomeSearch from '@components/Home/HomeSearch';
import ThumbnailList from '@components/Home/ThumbnailList';

import { useEffect, useState } from 'react';

import { getDiffDays } from 'shared/utils/getDiffDays';
import axios from 'axios';
import { fetchLectureLists } from 'shared/apis/lectureApi';

const Index = () => {
	const [lectureInfo, setLectureInfo] = useState<any[]>([]);
	const [newLectures, setNewLectures] = useState<any[]>([]);
	const [basicLectures, setBasicLectures] = useState<any[]>([]);

	const getLectures = () => {
		fetchLectureLists()
			.then((res) => {
				setLectureInfo([...lectureInfo, ...res.data.records]);
			})
			.catch((err) => console.error(err));
	};

	const getNewLectures = (lectureArray: any) => {
		let res = [];
		console.log(lectureArray);
		let temp = lectureArray.filter(
			(data: any) => getDiffDays(data.created_at) <= 30,
		);
		console.log(temp);
		// let res = temp.slice(0, 4);
		// object shallow copy때문에 값이 같이 바뀌는 문제

		for (let i = 0; i < 4; i++) {
			if (temp[i] === undefined) continue;
			const copiedObj = JSON.parse(JSON.stringify(temp[i]));
			copiedObj.title += ' 신규(NEW)';
			res.push(copiedObj);
		}

		return res;
	}; // 새 강의

	const getBasicLectures = (lectureArray: any) => {
		console.log(lectureArray);
		let temp = lectureArray.filter((data: any) => data.difficulty === 1);
		temp = temp.slice(0, 4);

		return temp;
	}; // 초보자용 강의

	const getRecentPlayedLectures = (lectureArray: any) => {}; // 최근 재생한 강의

	useEffect(() => {
		getLectures();
	}, []);

	useEffect(() => {
		if (lectureInfo.length > 0) {
			setNewLectures(getNewLectures(lectureInfo));
			setBasicLectures(getBasicLectures(lectureInfo));
			//getRecentPlayedLectures(lectureInfo);
		}
	}, [lectureInfo]);

	return (
		<>
			<Layout>
				<img
					style={{ height: '300px', marginBottom: '60px' }}
					src="images/banner_img.png"
				/>
				<HomeSearch />
				<ThumbnailList
					title={'강의 이어듣기'}
					subtitle={'내가  듣고 있던 강의를 이어서 들어보세요.'}
					data={basicLectures}
				/>
				<ThumbnailList title={'여기서 시작해보세요!'} data={basicLectures} />
				<ThumbnailList
					title={'따끈따끈, 신규 강의를 만나보세요!'}
					data={newLectures}
				/>
			</Layout>
			<img
				style={{ width: '100vw', marginTop: '200px' }}
				src="images/random_img.png"
			/>
		</>
	);
};

export default Index;
