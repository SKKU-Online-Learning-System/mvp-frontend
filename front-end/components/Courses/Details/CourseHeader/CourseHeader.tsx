import React from 'react';
import Image from 'next/dist/client/image';

import MetaDataSection from './MetaDataSection';
import RegisterButton from './RegisterButton';
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
		<section className="w-full flex h-[25rem] bg-[var(--color-Primary)] px-10 justify-center">
			<section className="my-auto">
				<Image
					src={courseDetail.thumbnail}
					alt="course thumbnail"
					width={480}
					height={270}
					className="rounded-md"
				/>
			</section>
			<section className="w-[40%] flex flex-col px-12 my-auto text-[var(--color-onPrimary)]">
				<MetaDataSection courseDetail={courseDetail} />
				<RegisterButton
					courseId={courseId}
					courseDetail={courseDetail}
					onOpenLoginModal={onOpenLoginModal}
				/>
			</section>
		</section>
	);
};

export default CourseHeader;