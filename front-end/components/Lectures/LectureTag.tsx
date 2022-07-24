import React from 'react';
import TagCard from './TagCard';
import styled from 'styled-components';
const LectureTag = () => {
	let tags = ['Python', 'Java'];
	for (var i = 0; i < 20; i++) {
		tags.push(tags[0] + i.toString());
	}

	return (
		<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
			<div
				style={{
					marginRight: '10px',
					marginTop: '10px',
					marginLeft: '1rem',
					display: 'flex',
				}}
			>
				<input
					type="text"
					placeholder="기술 검색"
					style={{
						border: '1px solid #dedede',
						height: '36px',
						color: '#5f5f5f',
					}}
				/>
				<SerchButton type="submit">검색</SerchButton>
			</div>
			<TagCard name={tags} />
		</div>
	);
};

export const SerchButton = styled.button`
	border: 1px solid #dedede;
	height: 36px;
	background-color: #1dc078;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 600;
`;
export default React.memo(LectureTag); // 태그들은 렌더링 되지 않음.
