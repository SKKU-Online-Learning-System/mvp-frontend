import React from 'react';
import TagCard from './TagCard';
import { RootState } from 'store/app/store';
import { useAppSelector } from 'store/app/hooks';
import styled from 'styled-components';
import LecturesPage from 'pages/lectures';

/** shows every hashtags of the courses */
const LectureTag = () => {
	let tags = [];
	const { lectures } = useAppSelector((state: RootState) => state.lecture);
	
	/** 
	 * check the courses' hashtags when lectures are defined 
	 * push the hashtags to the array named "tags" 
	*/
	if(lectures.courses){
		if(lectures.courses.length > 0){
			for(let i=0;i<lectures.courses.length;i++){
				for(let j=0;j<lectures.courses[i].hashtag.length;j++){
					tags.push(lectures.courses[i].hashtag[j])
				}
			}
		}
	}
	/** erase tags that are overlapping */
	tags = new Set(tags);


	tags = [...tags]
	console.log(tags.length)
	if(tags.length > 20){
		tags = tags.slice(0, 20)
	}
	return (
		<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
			<TagCard name={tags}/>
		</div>
	);
};

export default React.memo(LectureTag); // 태그들은 렌더링 되지 않음.
