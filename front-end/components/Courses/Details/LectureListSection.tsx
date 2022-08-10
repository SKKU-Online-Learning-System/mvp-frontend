import styled from 'styled-components';
import LectureListItem from './LectureListItem';

const LectureListSection = ({ section }: any) => {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th colSpan={4}>{section.title}</th>
					</tr>
				</thead>
				<tbody>
					{section.lectures.map((lecture: any, i: number) => {
						return (
							<LectureListItem
								key={lecture.title}
								lecture={lecture}
								index={i}
							/>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default LectureListSection;

const Container = styled.div`
	& & ul {
		margin: 0;
		padding: 0 0 0 15px;
	}
	& header {
		margin: 0 0 16px 18px;
	}

	& table {
		width: 100%;
		font-size: 0.8rem;
	}

	& table th {
		background-color: #e3e3e3;
		width: 100%;
		text-align: left;
		color: #5d5c5c;
		padding-left: 20px;
	}
	& tr {
		height: 48px;
		border: solid;
		color: #404040;
	}
	& td:first-child {
		text-align: center;
	}
	& td:nth-child(2) {
		font-weight: bold;
	}
	& td:last-child {
		text-align: right;
	}
`;
