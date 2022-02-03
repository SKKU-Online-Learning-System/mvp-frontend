import ContentCard from './ContentCard';
import { useAppSelector } from '../../app/hooks';
import { RootState } from 'app/store';
import React from 'react';

const ContentMenu = () => {
	const { lectureType } = useAppSelector((state: RootState) => state.lecture);
	return (
		<>
			{lectureType && (
				<div style={{ padding: '0 2vw' }}>
					<ContentCard title={'전체 강의'} type={[]} />
					<ContentCard title={''} type={lectureType} />
				</div>
			)}
		</>
	);
};
export default ContentMenu;
