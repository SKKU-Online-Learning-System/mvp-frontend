import styled from 'styled-components';

export default function Custom404() {
	return (
		<Wrapper>
			<h1>페이지를 찾을 수 없습니다</h1>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;
