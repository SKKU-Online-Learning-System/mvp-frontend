import styled from 'styled-components';

const MidBanner = () => {
	return (
		<Wrapper>
			<img
				style={{
					position: 'absolute',
					right: '20px',
					top: '-80px',
				}}
				src={'/images/lightball.png'}
			></img>
			<div style={{ padding: '30px 30px 30px 180px' }}>
				<div
					style={{
						margin: 0,
						padding: '0 0 10px 0',
						fontFamily: 'Gugi',
						fontSize: '2.5rem',
					}}
				>
					온라인 명륜당?
				</div>
				<div>
					온라인 명륜당은 성균관대 소프트웨어 융합대학에서 개발한 모두를 위한
					학습 플랫폼입니다.
				</div>
				<div>
					온라인 명륜당은 성균관대 소프트웨어 융합대학에서 개발했고 당신의
					성장을 도와드립니다.
				</div>
				<div
					style={{
						marginTop: '20px',
						textAlign: 'center',
						width: '80px',
						color: 'white',
						border: '1px solid white',
						fontSize: '8px',
					}}
				>
					MORE VIEW
				</div>
			</div>
		</Wrapper>
	);
};

export default MidBanner;

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	background: linear-gradient(#fcb60e, #fed23f);
	display: flex;
	flex-direction: column;
	margin: 120px 0;
`;
