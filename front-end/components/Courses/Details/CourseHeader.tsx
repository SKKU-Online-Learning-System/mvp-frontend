import React from 'react';

import styled from 'styled-components';
import { ICourseDetail } from 'types/Course';
import API from 'apis/Courses/courseApi';
import { HTTP_STATUS_CODE } from 'constants/statusCode';
import { useRouter } from 'next/router';
interface ICourseHeader {
	courseDetail: ICourseDetail;
	courseId: string;
}

interface UrlProps {
	url: string;
}
const CourseHeader = ({ courseDetail, courseId }: ICourseHeader) => {
	const router = useRouter();

	const handleClick = async () => {
		try {
			const res = await API.enrollCourse(+courseId);
			if (res.data.statusCode === HTTP_STATUS_CODE.CREATED) {
				router.reload();
			}
		} catch (e: unknown) {
			console.warn(e);
		}
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
					{courseDetail.is_logged_in && !courseDetail.has_enrolled && (
						<button onClick={handleClick}>강의 신청하기</button>
					)}
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
	//TO DO:  responsible
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
