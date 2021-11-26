interface CardProps {
	lectureinfo: string[][];
}

const LectureCard = ({ lectureinfo }: CardProps) => {
	return (
		<>
			{lectureinfo.map((i) => {
				return (
					<div key={i[4]} style={{ flex: '0 1 22%', padding: '1rem' }}>
						<img style={{ width: '100%' }} src={i[0]} />
						<div style={{ fontWeight: 700 }}>{i[1]}</div>
						<div style={{ color: '#7d7d7d', fontSize: '0.9rem' }}>{i[2]}</div>
						<div style={{ color: '#175cbe' }}>\{i[3]}</div>
					</div>
				);
			})}
		</>
	);
};
export default LectureCard;
