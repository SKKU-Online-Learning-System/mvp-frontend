import styled from 'styled-components';

const LectureListItem = ({ lecture, index }: any) => {
	function durationToHMS(duration: number) {
		let hours = Math.floor(duration / 3600);
		let minutes: any = Math.floor((duration - hours * 3600) / 60);
		let seconds: any = duration - hours * 3600 - minutes * 60;

		if (minutes < 10) minutes = `0${minutes}`;
		if (seconds < 10) seconds = `0${seconds}`;

		if (hours !== 0) return `${hours}:${minutes}:${seconds}`;
		else return `${minutes}:${seconds}`;
	}

	return (
		<Container>
			<span className="index">{index + 1}</span>
			<span className="title">{lecture.title}</span>
			<span className="duration">{durationToHMS(lecture.duration)}</span>
		</Container>
	);
};

export default LectureListItem;

const Container = styled.div`
	display: flex;
	height: 48px;
	align-items: center;
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
`;
