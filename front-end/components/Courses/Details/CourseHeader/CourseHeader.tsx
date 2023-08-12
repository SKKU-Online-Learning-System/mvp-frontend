import React from 'react';
import Image from 'next/dist/client/image';

import MetaDataSection from './MetaDataSection';
import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseDetail: ICourseDetail;
	courseId: number;
	onOpenLoginModal: () => void;
};

const CourseHeader = ({
	courseDetail,
	courseId,
	onOpenLoginModal,
}: PropsType) => {
	return (
		<section className="flex h-[25rem] bg-[var(--color-Primary)] px-10 justify-center">
			<div className="my-auto">
				<Image
					src={courseDetail.thumbnail}
					alt="course thumbnail"
					width={480}
					height={270}
					className="rounded-md"
				/>
			</div>
			<MetaDataSection
				courseId={courseId}
				courseDetail={courseDetail}
				onOpenLoginModal={onOpenLoginModal}
			/>
		</section>
	);
};

export default CourseHeader;
