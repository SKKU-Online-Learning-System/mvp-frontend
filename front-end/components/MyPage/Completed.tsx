import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { MYPAGE_MENU } from 'constants/MyPage';
import { GridWrapper } from './History';
import { AxiosResponse, AxiosError } from 'axios';
import { fetchCompletedLectures } from 'apis/MyPage';

const menu = [MYPAGE_MENU.COMPLETED_WATCHING_LECTURES];

const Completed = () => {
	// useState에 완료 강좌 객체에 맞게 인터페이스 생성해두기.
	const [completedCourseList, setCompletedCourseList] = useState([]);

	useEffect(() => {
		fetchCompletedLectures()
			.then((res: AxiosResponse) => {
				setCompletedCourseList(res.data);
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
			<MyPageTitle title={MYPAGE_MENU.COMPLETED_WATCHING_LECTURES} />
			<GridWrapper>
				{completedCourseList &&
					completedCourseList.map((elem, index) => (
						<div className="wrapper" key={index}>
							<div className="title">{elem.title}</div>
						</div>
					))}
			</GridWrapper>
		</MyPageLayout>
	);
};

export default Completed;
