import CategoryCard from '@components/common/CategoryCard';
import React from 'react';
import styled from 'styled-components';
const DashNoti = () => {
	const margin = '5px';
	return (
		<Container>
			<CategoryCard
				smallHeader="DASHBOARD"
				header="최근 알림보기"
				margin={margin}
				url="/my-page/notification"
			>
				<div className="inner">
					<ul>
						<li>
							<span>
								질문에 대한 답변이 등록되었습니다. 프로필이 수정되었습니다.
							</span>
						</li>
						<li>
							<span>수강중인 React입문 강좌에 새 강의가 등록되었습니</span>
						</li>
						<li>
							<span>수강중인 React입문 강좌에 새 강의가 등록되었습니</span>
						</li>
						<li>
							<span>수강중인 React입문 강좌에 새 강의가 등록되었습니</span>
						</li>
					</ul>
				</div>
			</CategoryCard>
		</Container>
	);
};

export default DashNoti;

const Container = styled.div`
	.profile-img {
		width: 40%;
	}
	.inner {
		display: flex;
		color: #393939;
		font-family: 'Noto Sans KR';
		font-size: 0.8rem;
		border: none;
	}
	.user {
		font-weight: bold;
	}

	ul {
		list-style-type: none;

		padding: 0;
		width: 100%;
	}
	li {
		border-bottom: solid;
		border-color: #e2e2e2;
		padding: 0.3rem;
		width: 100%;
	}
	li span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
