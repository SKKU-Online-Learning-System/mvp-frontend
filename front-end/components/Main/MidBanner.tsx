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
			<div style={{ padding: '30px' }}>
				<h1 style={{ margin: 0, padding: 0 }}>온라인 명륜당?</h1>
				<p>
					온라인 명륜당은 성균관대 소프트웨어 융합대학에서 개발한 모두를 위한
					학습 플랫폼입니다.
				</p>
				<p>
					온라인 명륜당은 성균관대 소프트웨어 융합대학에서 개발했고 당신의
					성장을 도와드립니다.
				</p>
				<div
					style={{
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

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	background: linear-gradient(#fcb60e, #fed23f);
	display: flex;
	flex-direction: column;
	margin: 120px 0;
`;

export default MidBanner;
