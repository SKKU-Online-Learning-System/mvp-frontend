// course/id 페이지: 강좌 소개란 header
import React from 'react';

import { useCourseEnrollmentUpdate } from 'query/hooks/QnA/index';
import { HTTP_STATUS_CODE } from 'constants/http';
import { ICourseDetail } from 'types/Course';
import { useRouter } from 'next/router';

type EnrollmentType = {
	isEnrolled: boolean;
};

interface ICourseHeader {
	courseDetail: ICourseDetail;
	courseId: string;
	onOpenLoginModal: () => void;
}

const CourseHeader = ({
	courseDetail,
	courseId,
	onOpenLoginModal,
}: ICourseHeader) => {
	const router = useRouter();
	const { has_enrolled: isEnrolled, is_logged_in: isLoggined } = courseDetail;
	const mutation = useCourseEnrollmentUpdate();

	const handleClick = (isLoggined: boolean) => async () => {
		if (!isLoggined) {
			onOpenLoginModal();
			return;
		}

		mutation.mutate(+courseId, {
			onSuccess: (data) => {
				if (data.statusCode === HTTP_STATUS_CODE.CREATED) {
					router.reload();
				} else {
					alert(
						'알수없는 오류로 강의 신청에 실패 했습니다. 다시 시도해주세요.',
					);
				}
			},
			onError: () => {
				alert('오류로 인해 신청에 실패했습니다. 다시 시도해주세요.');
			},
		});
	};
	// url={courseDetail.thumbnail}
	// Todo: 강좌신청 버튼 오류 해결하기
	return (
		<div className="flex h-[25rem] bg-[var(--color-Primary)] px-10 justify-center">
			<div className="flex h-full w-[50%]">
				<div className="flex flex-col justify-center text-[var(--color-onPrimary)] py-0 px-[50px] ">
					<h4 className="m-[5px]">{`${courseDetail.category1.name} > ${courseDetail.category2.name}`}</h4>
					<h2 className="m-[5px]">{courseDetail.title}</h2>
					<h4 className="m-[5px]">{courseDetail.description}</h4>
					<p className="m-[5px]">{`강사: ${courseDetail.instructor} `}</p>
					<div>
						{courseDetail.hashtags?.map((ele) => {
							return (
								<div
									key={ele}
									className="m-[0.2rem] font-bold inline bg-[#f0f0f0] text-[#696969] w-full py-0 px-[0.8rem] rounded-[3rem]"
								>{`#${ele}`}</div>
							);
						})}
					</div>
					<button
						className={`bg-[#7dad47] text-white border-0 rounded w-[150px] h-6 text-base opacity-[${
							isEnrolled ? '0.6' : '1.0'
						}] cursor-[${isEnrolled ? 'none' : 'pointer'}]`}
						onClick={handleClick(isLoggined)}
						disabled={isEnrolled}
					>
						{isEnrolled ? '수강중' : '강좌 신청'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseHeader;
