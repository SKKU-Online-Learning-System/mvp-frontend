import ContentCard from './ContentCard';
import { useAppSelector } from '../../app/hooks';
import { RootState } from 'app/store';
import React from 'react';

const ContentMenu = () => {
	const { lectureType } = useAppSelector((state: RootState) => state.lecture);
	console.log(lectureType)
	return (
		<>
			{lectureType && (
				<div style={ {padding: '0 2vw'} }>
					<ContentCard title={'개발/프로그래밍'} type={[]} index={1}/>
					<ContentCard title={'데이터 사이언스'} type={[]} index={2}/>
					<ContentCard title={''} type={lectureType} index={1}/>
					<ContentCard title={'보안/네트워크'} type={[]} index={3}/>
					<ContentCard title={'Front-End'} type={[]} index={4}/>
					<ContentCard title={''} type={lectureType} index={1}/>
				</div>
			)}
		</>
	);
};
export default ContentMenu;
