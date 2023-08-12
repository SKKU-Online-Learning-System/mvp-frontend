import React from 'react';

import MetaDataHeader from './MetaDataHeader';
import CourseHashtags from './CourseHashtags';
import RegisterButton from './RegisterButton';
import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseId: number;
	courseDetail: ICourseDetail;
	onOpenLoginModal: () => void;
};

const MetaDataSection = ({
	courseId,
	courseDetail,
	onOpenLoginModal,
}: PropsType) => {
	const courseDescription = courseDetail.description;

	return (
		<section className="w-[40%] my-auto text-[var(--color-onPrimary)] px-[50px]">
			<MetaDataHeader courseDetail={courseDetail} />
			<article className="m-[5px] mb-8">{courseDescription}</article>
			<CourseHashtags courseDetail={courseDetail} />
			<RegisterButton
				courseId={courseId}
				courseDetail={courseDetail}
				onOpenLoginModal={onOpenLoginModal}
			/>
		</section>
	);
};

export default MetaDataSection;
