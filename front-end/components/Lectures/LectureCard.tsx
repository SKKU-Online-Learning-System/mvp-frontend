interface CardProps {
	lectureInfo: string[];
}

const LectureCard = ({ lectureInfo }: CardProps) => {
	return (
		<>
			{lectureInfo.map((i) => {
				return (
					<div key={i.id} style={{ flex: '0 1 25%', padding: '1rem' }}>
						<img style={{ width: '100%' }} src="images/card_img.png" alt="no" />
						<div style={{ fontWeight: 700 }}>{i.lectureName}</div>
						<div style={{ color: '#7d7d7d', fontSize: '0.9rem' }}>
							{i.lectureIntro}
						</div>
					</div>
				);
			})}
		</>
	);
};
export default LectureCard;
