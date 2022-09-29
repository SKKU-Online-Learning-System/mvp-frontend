import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import { AxiosResponse, AxiosError } from 'axios';
import { GridWrapper } from './History';
import { fetchCurrentLearningCourses } from 'apis/MyPage';

const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

const Learning = () => {
	// useState에 완료 강좌 객체에 맞게 인터페이스 생성해두기.
	const [currentLearningCourseList, setCurrentLearningCourseList] = useState(
		[],
	);

	useEffect(() => {
		fetchCurrentLearningCourses()
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
						<div className="wrapper" key={index}>
							<div className="title">{elem.title}</div>
						</div>
					))}
			</GridWrapper>
		</MyPageLayout>
	);
};

export default Learning;
