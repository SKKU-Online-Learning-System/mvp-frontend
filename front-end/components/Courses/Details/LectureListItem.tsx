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
		<tr>
			<td>{index + 1}</td>
			<td>{lecture.title}</td>
			<td>{durationToHMS(lecture.duration)}</td>
			<td></td>
		</tr>
	);
};

export default LectureListItem;
