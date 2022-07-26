import ContentCard from './ContentCard';
import { useAppSelector } from '../../app/hooks';
import { RootState } from 'app/store';
import React from 'react';

const ContentMenu = () => {
	const { lectureType } = useAppSelector((state: RootState) => state.lecture);
	return (
		<>
			{lectureType[0] && (
				<div style={ {padding: '0 2vw'} }>
					{lectureType[0].map((content, id) => (
						<ContentCard title={content.name} type={[]} index={id} key={id}/>
					))}
				</div>
			)}
		</>
	);
};
export default ContentMenu;
