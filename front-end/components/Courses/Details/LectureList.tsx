import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { ICourseDetail } from 'types/Course';
import {
	ILectureList as _ILectureList,
	ILectureInfo,
} from 'types/Lecture/index';

interface ILectureList {
	setShowLogInModal?: Dispatch<SetStateAction<boolean>>;
	courseDetail: ICourseDetail;
	lectures: _ILectureList[];
}

const LectureList = ({
	setShowLogInModal,
	courseDetail,
	lectures,
}: ILectureList) => {
	const router = useRouter();
	const [isCollapsed, setIsCollapsed] = useState(
		Array(lectures.length).fill(true),
	); // collapsed true -> 접힌상태, false -> 열린상태

	const { courseId } = router.query;
	const { has_enrolled: isEnrolled, is_logged_in: isLoggined } = courseDetail;

	const handleLectureClick = (id: number) => () => {
		if (isEnrolled) {
			router.push({ pathname: `/lectures/${id}`, query: { courseId } });
			return;
		}

		if (!isLoggined) {
			setShowLogInModal?.(true);
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
		<Container>
			<header>
				<div
					style={{ fontSize: '0.5rem', color: '#c2c1c1', fontWeight: 'bold' }}
				>
					CURRICULUM
				</div>
				<h2>강의 커리큘럼</h2>
			</header>

			{lectures.map((section, index) => {
				return (
					<React.Fragment key={index}>
						<SectionBox onClick={handleCollaseClick(index)}>
							{section.title}
						</SectionBox>
						<LecturesBox show={isCollapsed[index]}>
							{section.lectures?.map((lecture: ILectureInfo, index: number) => {
								return (
									<div onClick={handleLectureClick(lecture.id)} key={index}>
										<LectureContainer>
											<span className="index">{index + 1}</span>
											<span className="title">{lecture.title}</span>
											<span className="duration">
												{durationToHhMmSs(lecture.duration)}
											</span>
										</LectureContainer>
									</div>
								);
							})}
						</LecturesBox>
					</React.Fragment>
				);
			})}
		</Container>
	);
};

export default LectureList;

const Container = styled.div`
	width: 80%;
	margin: auto;
	padding: 25px;
	font-family: 'Noto Sans KR';

	h2 {
		margin: 0 0 5px 0;
		color: #393939;
		font-weight: bold;
	}
`;

const SectionBox = styled.div`
	display: flex;
	background-color: #f0f0f0;
	height: 50px;
	margin: 15px 0 5px 0;
	padding-left: 1.5rem;
	color: #5d5c5c;
	font-size: 18px;
	font-weight: bold;
	align-items: center;
	cursor: pointer;
`;

const LecturesBox = styled.div<{ show: boolean }>`
	display: ${(props) => (props.show ? 'block' : 'none')};
`;

const LectureContainer = styled.div`
	display: flex;
	height: 48px;
	align-items: center;
	cursor: pointer;
	span {
		color: #404040;
		font-size: 16px;
	}
	.index {
		width: 10%;
		text-align: center;
	}
	.title {
		width: 75%;
		padding-left: 5px;
	}
	.duration {
		width: 15%;
		text-align: center;
	}
	&:hover {
		background-color: #eaeaea;
	}
`;
