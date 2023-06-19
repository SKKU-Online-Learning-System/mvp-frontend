import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { ICourseDetail } from 'types/Course';
import {
	ILectureList as _ILectureList,
	ILectureInfo,
} from 'types/Lecture/index';

interface ILectureList {
	onOpenLoginModal: () => void;
	courseDetail: ICourseDetail;
	lectures: _ILectureList[];
}

const LectureList = ({
	onOpenLoginModal,
	courseDetail,
	lectures,
}: ILectureList) => {
	const router = useRouter();
	const [isCollapsed, setIsCollapsed] = useState(
		Array(lectures.length).fill(true),
	);

	const { courseId } = router.query;
	const { has_enrolled: isEnrolled, is_logged_in: isLoggined } = courseDetail;

	const handleLectureClick = (id: number) => () => {
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

	const handleCollaseClick = (index: number) => () => {
		setIsCollapsed(
			isCollapsed.map((elem, idx) => (idx === index ? !elem : elem)),
		);
	};

	return (
		<div className="w-[80%] m-auto p-[25px] font-['Noto Sans KR']">
			<header>
				<div className="text-[0.5rem] text-[#c2c1c1] font-bold">CURRICULUM</div>
				<h2 className="m-0 mb-[5px] text-[#393939] font-bold">강의 커리큘럼</h2>
			</header>

			{lectures.map((section, index) => {
				const show = isCollapsed[index];
				return (
					<React.Fragment key={index}>
						<div
							className="flex text-lg font-bold items-center cursor-pointer bg-[#f0f0f0] h-[50px] m-0 mt-[15px] mb-[5px] pl-[1.5rem] text-[#5d5c5c]"
							onClick={handleCollaseClick(index)}
						>
							{section.title}
						</div>
						<div className={show ? 'block' : 'hidden'}>
							{section.lectures?.map((lecture: ILectureInfo, index: number) => {
								return (
									<div onClick={handleLectureClick(lecture.id)} key={index}>
										<div className="flex items-center h-12 cursor-pointer hover:bg-[#eaeaea]">
											<span className="w-[10%] text-center text-[#404040] text-base">
												{index + 1}
											</span>
											<span className="w-[75%] pl-[5px] text-[#404040] text-base">
												{lecture.title}
											</span>
											<span className="w-[15%] text-center text-[#404040] text-base">
												{durationToHhMmSs(lecture.duration)}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default LectureList;
