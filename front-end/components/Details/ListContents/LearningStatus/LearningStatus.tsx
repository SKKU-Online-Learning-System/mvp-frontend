import React from 'react';
import styled from 'styled-components';

const LearningStatus = () => {
	return (
		<Container>
			<div style={{ color: '#9a9a9a', fontSize: '2.5px', fontWeight: 'bold' }}>
				progress in learning
			</div>
			<div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
				나의 학습 상황
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<ContentBox>
					<div style={{ display: 'flex', textAlign: 'center' }}>
						<img
							src="/images/complete-course.png"
							style={{
								width: '41px',
								height: '42px',
								margin: '0 13px 0 0',
							}}
						/>
						<div style={{ fontSize: '2rem' }}>
							<span style={{ fontWeight: 'bold' }}>14</span> / 36
						</div>
					</div>
					<div style={{ textAlign: 'center' }}>완료한 수업</div>
				</ContentBox>
				<ContentBox>
					<div style={{ display: 'flex', textAlign: 'center' }}>
						<img
							src="/images/total-learning-time.png"
							style={{
								width: '41px',
								height: '42px',
								margin: '0 13px 0 0',
							}}
						/>
						<div style={{ fontSize: '2rem' }}>
							<span style={{ fontWeight: 'bold' }}>2</span>h{' '}
							<span style={{ fontWeight: 'bold' }}>53</span>m
						</div>
					</div>
					<div style={{ textAlign: 'center' }}>총 학습시간</div>
				</ContentBox>
				<ContentBox>
					<div style={{ display: 'flex', textAlign: 'center' }}>
						<img
							src="/images/complete-rate.png"
							style={{
								width: '41px',
								height: '42px',
								margin: '0 13px 0 0',
							}}
						/>
						<div style={{ fontSize: '2rem' }}>
							{' '}
							<span style={{ fontWeight: 'bold' }}>53 </span>%
						</div>
					</div>
					<div style={{ textAlign: 'center' }}>학습 달성율</div>
				</ContentBox>
			</div>
		</Container>
	);
};

export default LearningStatus;

const Container = styled.div`
	width: 605px;
	height: 171px;
	padding: 18px 23px;
	background-color: #343535;
	color: white;
	/* margin: 64px 0 0 78px; */
	font-family: 'Noto Sans KR';
	font-weight: 100;
`;
const ContentBox = styled.div`
	margin-top: 13px;
`;
