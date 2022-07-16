import styled from 'styled-components';

const CommonHeader = ({ text, color }) => {
	return (
		<Wrapper>
			<div style={{ position: 'relative' }}>
				<div
					style={{
						width: '20px',
						height: '2px',
						background: color,
						position: 'absolute',
						top: -2,
						left: '3px',
					}}
				/>
				{text}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	font-size: 32px;
	font-weight: bold;
	border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	padding-bottom: 12px;
	padding-left: 32px;
	padding-top: 60px;
`;

export default CommonHeader;
