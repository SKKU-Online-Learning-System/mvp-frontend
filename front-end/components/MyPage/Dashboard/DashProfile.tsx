import React from 'react';

const DashProfile = () => {
	return (
		<div>
			<div>
				<div className="flex text-[#393939] font-['Noto Sans KR'] text-[0.8rem] border-none">
					<img src="/images/auth_profile.png" className="w-[40%] mr-4" />
					<ul className="list-disc">
						<li>
							<span>Nickname: </span>
							<span className="font-bold">닉네임</span>
						</li>
						<li>
							<span>E-mail: </span>
							<span className="font-bold">이메일</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashProfile;
