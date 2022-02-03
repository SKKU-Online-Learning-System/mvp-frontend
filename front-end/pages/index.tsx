import Link from 'next/link';
import Layout from '@components/Layout';

import Banner from '@components/Home/Banner';
import HomeSearch from '@components/Home/HomeSearch';
import ThumbnailList from '@components/Home/ThumbnailList';

import { useEffect, useState } from 'react';

import {
	GET_ALL_LECTURE_LISTS_API,
	SIGNUP_API,
} from 'shared/constants/apis';
import { getDiffDays } from 'shared/utils/getDiffDays';
import axios from 'axios';

const Index = () => {
	const [lectureInfo, setLectureInfo] = useState<any[]>([]);
	const [newLectures, setNewLectures] = useState<any[]>([]);
	const [basicLectures, setBasicLectures] = useState<any[]>([]);

	const getLectures = () => {
		fetch(GET_ALL_LECTURE_LISTS_API, {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((res) => res.json())
			.then((data) => setLectureInfo([...lectureInfo, data]))
			.catch((err) => console.error(err));
	};

	const Test = () => {
		axios
			.post(SIGNUP_API, {
				id: 'rbals',
				pw: '1234?',
				name: 'hkm',
				sex: '1',
				phone: '010-2222-1394',
				birth: '2005-02-02',
				desc: 'test',
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		Test();
	}, []);

	const getNewLectures = (lectureArray: any) => {
		let res = [];
		let temp = lectureArray[0].results.filter(
			(data: any) => getDiffDays(data.time) <= 30,
		);
		// let res = temp.slice(0, 4);
		// object shallow copy때문에 값이 같이 바뀌는 문제

		for (let i = 0; i < 4; i++) {
			const copiedObj = JSON.parse(JSON.stringify(temp[i]));
			copiedObj.lectureName += ' 신규(NEW)';
			res.push(copiedObj);
		}

		return res;
	}; // 새 강의

	const getBasicLectures = (lectureArray: any) => {
		let temp = lectureArray[0].results.filter(
			(data: any) => data.difficulty === 1,
		);

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
