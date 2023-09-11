import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useCompletedCourseFetch } from 'query/hooks/MyPage';

const Completed = () => {
	const router = useRouter();

	const { data: completedCourseList, isLoading } = useCompletedCourseFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	if (!completedCourseList)
		return <div>Failed to retrieve completed course data . . .</div>;
	if (completedCourseList.length === 0)
		return <div className="min-h-screen bg-white">완료된 강좌가 없습니다.</div>;

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	return (
		<div>
			<div className="bg-[var(--color-mrgreen-9)]  w-full ">
				<div className="bg-[var(--color-Surface)]">
					<div className="grid grid-cols-4 p-5 mx-56 mb-32 tbl:mx-auto dt:grid-cols-3 tbl:grid-cols-3 mbl:grid-cols-1 gap-x-4 gap-y-4">
						{completedCourseList?.map((elem, index) => (
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
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Completed;
