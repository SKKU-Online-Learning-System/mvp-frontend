import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MidBanner = (): ReactElement => {
	return (
		<Wrapper>
			<ImageContainer>
				<Image
					src={'/images/lightball.png'}
					width="350px"
					height="362px"
					alt=""
				/>
			</ImageContainer>
			<div className="py-[30px] pr-[30px] pl-[180px]">
				<div className='m-0 px-0 pt-0 pb-[10px] font-["Gugi"] text-[2.5rem]'>
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
				<div className="mt-[20px] text-center w-[80px] text-white border-[1px] text-[8px] border-solid border-white">
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
const ImageContainer = styled.div`
	position: absolute;
	right: 20px;
	top: -80px;
`;

export default MidBanner;
