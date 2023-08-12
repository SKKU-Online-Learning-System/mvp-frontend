import React from 'react';
import { useRouter } from 'next/router';

import courseAPI from '../../../../apis/Courses/courseApi';
import { HTTP_STATUS_CODE } from 'constants/http';
import { ICourseDetail } from 'types/Course';

type PropsType = {
	courseId: number;
	courseDetail: ICourseDetail;
	onOpenLoginModal: () => void;
};

const RegisterButton = ({
	courseId,
	courseDetail,
	onOpenLoginModal,
}: PropsType) => {
	const router = useRouter();
	const { has_enrolled: isEnrolled, is_logged_in: isLoggedIn } = courseDetail;

	const handleClick = async (isLoggedIn: boolean) => {
		if (!isLoggedIn) {
			onOpenLoginModal();
			return;
		}
		// Todo: res.status인지 res.statusCode인지 log 찍어서 확인해볼 것
		try {
			const res = await courseAPI.enrollCourse(courseId);
			if (res.status === HTTP_STATUS_CODE.CREATED) {
				router.reload();
			} else {
				alert('강의 신청에 실패 했습니다. 다시 시도해주세요.');
			}
		} catch (err) {
			alert('오류로 인해 신청에 실패했습니다. 다시 시도해주세요.');
		}
	};

	const enrolledStyle = (isEnrolled: boolean) => {
		const enrolledStyle = isEnrolled
			? 'opacity-[0.6] select-none'
			: 'opacity-[1.0] cursor-pointer';

		return (
			'transition-all bg-[#7dad47] hover:bg-[#8dbd58] text-white text-xl border-0 rounded w-[150px] h-10 ' +
			enrolledStyle
		);
	};

	return (
		<button
			className={`${enrolledStyle(isEnrolled)}`}
			onClick={() => handleClick(isLoggedIn)}
			disabled={isEnrolled}
		>
			{isEnrolled ? '수강 중' : '수강 신청'}
		</button>
	);
};

export default RegisterButton;
