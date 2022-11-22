import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { MYPAGE_MENU } from 'constants/MyPage';
import { GridWrapper } from './History';
import { AxiosResponse, AxiosError } from 'axios';
import { ICourseInfo } from 'types/MyPage';
import { useRouter } from 'next/router';
import API from 'apis/MyPage';

const menu = [MYPAGE_MENU.COMPLETED_WATCHING_LECTURES];

const Completed = () => {
	// useState에 완료 강좌 객체에 맞게 인터페이스 생성해두기.
	const router = useRouter();
	const [completedCourseList, setCompletedCourseList] =
		useState<ICourseInfo[]>();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	useEffect(() => {
		API.fetchCompletedLectures()
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
				{!completedCourseList?.length ? (
					<div>완료된 강의가 없습니다.</div>
				) : (
					completedCourseList?.map((elem, index) => (
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
							<div className="title">{elem.course.title}</div>
						</div>
					))
				)}
			</GridWrapper>
		</MyPageLayout>
	);
};

export default Completed;
