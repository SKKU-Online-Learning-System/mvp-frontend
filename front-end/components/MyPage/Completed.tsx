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
			<div className="bg-[var(--color-mrgreen-9)] w-full py-4">
				{/* <BreadCrumb
					category={'MY PAGE'}
					menu={menu}
					containerPadding={'1rem 0'}
				/> */}
			</div>

			{/* <MyPageTitle title={MYPAGE_MENU.COMPLETED_WATCHING_LECTURES} /> */}
			<div className="bg-[var(--color-mrgreen-9)]  w-full ">
				{/* <div className="grid gap-x-4 gap-y-4 border-[1px] border-solid border-gray-700 grid-rows-3 grid-cols-4 p-5"> */}
				<div className="bg-[var(--color-Surface)] rounded-tl-lg">
					<div className="grid grid-cols-4 p-5 mx-56 mb-32 tbl:mx-auto dt:grid-cols-3 tbl:grid-cols-3 mbl:grid-cols-1 gap-x-4 gap-y-4">
						{!completedCourseList?.length ? (
							<div>완료된 강의가 없습니다.</div>
						) : (
							completedCourseList?.map((elem, index) => (
								<div
									// className="relative w-full overflow-hidden cursor-pointer"
									className="rounded-md w-full mt-5 overflow-hidden relative cursor-pointer transition hover:scale-[1.03] bg-white"
									onClick={handleClick(elem.course.id)}
									key={index}
								>
									<img
										className="aspect-video"
										width={'100%'}
										src={elem.course.thumbnail}
									/>
									<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
										{elem.course.title}
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</MyPageLayout>
	);
};

export default Completed;
