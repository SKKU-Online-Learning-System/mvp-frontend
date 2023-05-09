import CategoryCard from '@components/common/CategoryCard';
import React from 'react';
import styled from 'styled-components';
const DashProfile = () => {
	const margin = '5px';
	return (
		<Container>
			<CategoryCard
				smallHeader="DASHBOARD"
				header="MY PROFILE"
				margin={margin}
				url="/my-page"
			>
				<div className="inner">
					<img src="/images/auth_profile.png" className="profile-img" />
					<ul>
						<li>
							<span>Nickname: </span>
							<span className="user">닉네임</span>
						</li>
						<li>
							<span>E-mail: </span>
							<span className="user">이메일</span>
						</li>
					</ul>
				</div>
			</CategoryCard>
		</Container>
	);
};

export default DashProfile;

const Container = styled.div`
	.profile-img {
		width: 40%;
		margin-right: 1rem;
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
		list-style-type: disc;
	}
`;
