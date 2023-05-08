import { useRouter } from 'next/router';
import HashTagCard from './HashTagCard';
import styled from 'styled-components';
import { SyntheticEvent } from 'react';
import { defaultErrorImage } from 'constants/index';
import { ICourseInfo } from 'types/Course/index';
import React from 'react';

interface ILectureCard {
	course: ICourseInfo;
}

const width = ~~(1140 / 4);

const LectureCard = ({ course }: ILectureCard) => {
	const router = useRouter();

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<span
			style={{ paddingRight: '1rem', cursor: 'pointer', width: width }}
			onClick={() => handleClick(course.id)}
			key={course.id}
		>
			<img
				width="100%"
				src={course.thumbnail}
				onError={handleImgError}
				alt="no"
			/>
			<div
				style={{
					display: 'flex',
					gap: '4px',
					overflowY: 'auto',
				}}
			>
				{course.hashtag.map((name: string, idx: number) => (
					<HashTagCard name={name} key={idx} />
				))}
			</div>
			<div
				style={{
					fontWeight: 700,
					textOverflow: 'ellipsis',
					overflow: 'hidden',
				}}
			>
				{course.title}
			</div>
			<div
				style={{
					color: '#7d7d7d',
					fontSize: '0.9rem',
					overflow: 'hidden',
					height: '100px',
				}}
			>
				{course.description}
			</div>
		</span>
	);
};

export default LectureCard;
