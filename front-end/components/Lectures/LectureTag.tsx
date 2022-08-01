import React from 'react';
import TagCard from './TagCard';
import { RootState } from 'store/app/store';
import { useAppSelector } from 'store/app/hooks';
import styled from 'styled-components';
import LecturesPage from 'pages/lectures';
const LectureTag = () => {
	let tags = [];
	const {lectures} = useAppSelector((state: RootState) => state.lecture);

	if(lectures.courses){
		for(let i=0;i<lectures.courses.length;i++){
			for(let j=0;j<lectures.courses[i].hashtag.length;j++){
				tags.push(lectures.courses[i].hashtag[j])
			}
		}
	}
	tags = new Set(tags);
	tags = [...tags]

	return (
		<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
			<TagCard name={tags}/>
		</div>
	);
};

export default React.memo(LectureTag); // 태그들은 렌더링 되지 않음.
