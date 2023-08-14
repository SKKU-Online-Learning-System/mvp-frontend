import React, { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';

import CourseHeader from '@components/Courses/Details/CourseHeader/CourseHeader';
import CourseBody from '@components/Courses/Details/CourseBody';
import { useCourseDetailInfo } from 'hooks/useCourseDetailInfo';
import { LectureProgress } from 'types/Lecture';
import courseAPI from '../../apis/Courses/courseApi';
import QnA from '@components/Courses/Details/QnA';

type PropsType = {
	courseId: number;
};

const CourseDetailPage = ({ courseId }: PropsType) => {
	const [progress, setProgress] = useState<LectureProgress[]>();
	const {
		course,
		qna,
		lecture,
		showModal,
		onOpenLoginModal,
		renderModal,
		isLoading,
	} = useCourseDetailInfo();

	useEffect(() => {
		async function func() {
			const progress = await courseAPI.fetchProgress(courseId);
			setProgress(progress);
		}
		func();
	}, []);

	if (!progress || !course || !lecture) return <div>progress</div>;
	if (isLoading) return <div>Loading...</div>;

	return (
		<main>
			<section>
				<CourseHeader
					onOpenLoginModal={onOpenLoginModal}
					courseDetail={course}
					courseId={courseId}
				/>
				<CourseBody
					courseId={courseId}
					lectures={lecture}
					course={course}
					progress={progress}
					onOpenLoginModal={onOpenLoginModal}
				/>
				<hr className="w-[1080px] mx-auto my-6" />
				<QnA courseId={courseId} qna={qna} />
			</section>
			{showModal && renderModal()}
		</main>
	);
};

export function getStaticProps({ params }: GetStaticPropsContext) {
	if (!params || !params.courseId) return { props: {} };

	const courseId = +params.courseId;
	return { props: { courseId } };
}

export function getStaticPaths() {
	return { paths: [], fallback: 'blocking' };
}

export default CourseDetailPage;
