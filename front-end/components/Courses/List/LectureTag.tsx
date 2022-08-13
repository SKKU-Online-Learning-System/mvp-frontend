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
			<TagCard name={tags} />
		</div>
	);
};

export default React.memo(LectureTag); // 태그들은 렌더링 되지 않음.
