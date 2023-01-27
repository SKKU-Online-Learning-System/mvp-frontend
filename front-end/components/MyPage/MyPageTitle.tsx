interface IMyPageProps {
	title?: string;
}

const MyPageTitle = ({ title }: IMyPageProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				background: 'rgba(0, 0, 0, 0.7)',
				padding: '10px 20px 10px 20px',
				lineHeight: '28px',
			}}
		>
			<span style={{ color: '#8d8e8e', fontSize: '16px' }}>MY PAGE</span>
			<span style={{ color: 'white', fontSize: '28px', paddingBottom: '8px' }}>
				{title}
			</span>
		</div>
	);
};

export default MyPageTitle;
