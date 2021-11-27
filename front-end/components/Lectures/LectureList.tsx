import styled from 'styled-components';
import LectureCard from './LectureCard';
const LectureList = () => {
	let lectureinfo = [];
	for (let i = 0; i < 45; i++) {
		lectureinfo.push([
			'images/card_img.png',
			'스프링 MVC 1편 - 백엔드 웹 개발 핵심 기술',
			'김영한',
			'89,100',
			i.toString(),
		]);
	}

	return (
		<LectureHeader>
			<LectureCard lectureinfo={lectureinfo} />
		</LectureHeader>
	);
};

const LectureHeader = styled.div`
	display: flex;
	flex-flow: row wrap;
`;
export default LectureList;
