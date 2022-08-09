import LectureList from '@components/Mypage/LectureList';
import SideMenu from '@components/Mypage/sideMenu';

import React from 'react';
import styled from 'styled-components';

const Complete = () => {
	return (
        <>
        <Wrapper>
			<SidebarLeft>
				<SideMenu />
			</SidebarLeft>
			<LectureBody>						
				<LectureList 
                    headerText={'수강 완료 강좌'}
                    headerColor='red'/>
			</LectureBody>
	    </Wrapper>
		</>
    );
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 2rem 0;
`;

const SidebarLeft = styled.div`
	flex: 2;
`;

const LectureBody = styled.div`
	flex: 8;
`;

export default Complete;