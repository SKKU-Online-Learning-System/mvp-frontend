import React from 'react';

import styled from 'styled-components';
import { ICourseDetail } from 'types/Course';
import { HTTP_STATUS_CODE } from 'constants/http';
import { useRouter } from 'next/router';
import { useCourseEnrollmentUpdate } from 'query/hooks/QnA/index';

type EnrollmentType = {
	isEnrolled: boolean;
};
interface ICourseHeader {
	courseDetail: ICourseDetail;
	courseId: string;
	onOpenLoginModal: () => void;
}

interface UrlProps {
	url: string;
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

	return (
		<Container>
			<LectureImg url={courseDetail.thumbnail} />
			<CourseInfoBox>
				<CourseInfoWrapper>
					<h4>{`${courseDetail.category1.name} > ${courseDetail.category2.name}`}</h4>
					<h2>{courseDetail.title}</h2>
					<h4>{courseDetail.description}</h4>
					<p>{`강사: ${courseDetail.instructor.nickname}`}</p>
					<div>
						{courseDetail.hashtags?.map((ele) => {
							return <div key={ele} className="hashtag">{`#${ele}`}</div>;
						})}
					</div>

					<Button
						onClick={handleClick(isLoggined)}
						disabled={isEnrolled}
						isEnrolled={isEnrolled}
					>
						{isEnrolled ? '수강중' : '강좌 신청'}
					</Button>
				</CourseInfoWrapper>
			</CourseInfoBox>
		</Container>
	);
};

export default CourseHeader;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 25rem;
	background-color: #063f80;
	padding: 0 40px;
`;

const CourseInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: white;
	padding: 0 50px;
	& h1,
	h2,
	h3,
	h4 p {
		margin: 5px;
	}
	.hashtag-container {
	}
	.hashtag {
		display: inline;
		background-color: #f0f0f0;
		color: #696969;
		width: 100%;
		padding: 0 0.8rem;
		border-radius: 3rem;
		margin: 0.2rem;
		font-weight: bold;
	}
`;

const CourseInfoBox = styled.div`
	display: flex;
	height: 100%;
	width: 50%;
`;

const LectureImg = styled.div<UrlProps>`
	height: 100%;
	width: 50%;
	background: linear-gradient(
			to right,
			rgba(6, 63, 128, 1) 0%,
			rgba(6, 63, 128, 0.7) 5%,
			rgba(6, 63, 128, 0.5) 10%,
			rgba(6, 63, 128, 0) 15%,
			rgba(6, 63, 128, 0) 85%,
			rgba(6, 63, 128, 0.5) 90%,
			rgba(6, 63, 128, 0.7) 95%,
			rgba(6, 63, 128, 1) 100%
		),
		url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
`;

const Button = styled.button<EnrollmentType>`
	background-color: #7dad47;
	color: #fff;
	opacity: ${(props) => (props.isEnrolled ? '0.6' : '1.0')};
	border: 0;
	border-radius: 4px;
	width: 150px;
	height: 24px;
	font-size: 16px;
	cursor: ${(props) => (props.isEnrolled ? 'undefined' : 'pointer')};
`;
