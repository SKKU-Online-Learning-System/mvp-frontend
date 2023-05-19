import React from 'react';
import { useRouter } from 'next/router';

import { useCompletedCourseFetch } from 'query/hooks/MyPage';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';

const menu = [MYPAGE_MENU.COMPLETED_WATCHING_LECTURES];

const Completed = () => {
	const router = useRouter();

	const { data: completedCourseList, isLoading } = useCompletedCourseFetch();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	if (isLoading) return <div>isLoading...</div>;

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.COMPLETED_WATCHING_LECTURES} />
			<div className="grid gap-x-4 gap-y-4 border-[1px] border-solid border-gray-700 grid-rows-3 grid-cols-4 p-5">
				{!completedCourseList?.length ? (
					<div>완료된 강의가 없습니다.</div>
				) : (
					completedCourseList?.map((elem, index) => (
						<div
							className="w-full overflow-hidden relative cursor-pointer"
							onClick={handleClick(elem.course.id)}
							key={index}
						>
							<img
								className="aspect-video"
								width={'100%'}
								src={elem.course.thumbnail}
							></img>
							<div className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
								{elem.course.title}
							</div>
						</div>
					))
				)}
			</div>
		</MyPageLayout>
	);
};

export default Completed;
