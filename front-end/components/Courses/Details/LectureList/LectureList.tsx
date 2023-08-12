import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { ILectureList } from 'types/Lecture/index';
import LectureListTitle from './LectureListTitle';
import LectureListBody from './LectureListBody';
import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseId: number;
	courseDetail: ICourseDetail;
	lectures: ILectureList[];
	onOpenLoginModal: () => void;
};

const LectureList = ({
	courseId,
	courseDetail,
	lectures,
	onOpenLoginModal,
}: PropsType) => {
	const router = useRouter();
	const [isCollapsed, setIsCollapsed] = useState<boolean[]>(
		Array(lectures.length).fill(true),
	);

	const { has_enrolled: isEnrolled, is_logged_in: isLoggined } = courseDetail;

	const handleLectureClick = (id: number) => {
		if (isEnrolled) {
			router.push({ pathname: `/lectures/${id}`, query: { courseId } });
			return;
		}

		if (!isLoggined) {
			onOpenLoginModal();
			return;
		}

		alert('강좌를 신청해주세요.');
	};

	const handleCollaseClick = (index: number) => {
		setIsCollapsed(
			isCollapsed.map((elem, idx) => (idx === index ? !elem : elem)),
		);
	};

	return (
		<section>
			{lectures.map((lecture, idx) => {
				return (
					<section key={lecture.id}>
						<LectureListTitle
							idx={idx}
							lecture={lecture}
							handleCollaseClick={handleCollaseClick}
						/>
						<LectureListBody
							show={isCollapsed[idx]}
							lecture={lecture}
							handleLectureClick={handleLectureClick}
						/>
					</section>
				);
			})}
		</section>
	);
};

export default LectureList;
