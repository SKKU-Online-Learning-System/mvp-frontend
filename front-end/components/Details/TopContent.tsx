import styled from 'styled-components'
import LearningState from '@components/Details/LearningState'
import LectureIntroduction from '@components/Details/LectureIntroduction'
const TopContent = () => {
  return (
    <TopContainer>
      <LeftContainer>
        <LearningState />
        <LectureIntroduction />
      </LeftContainer>
      <RightContainer>
        <Text>최근 질문</Text>
      </RightContainer>
    </TopContainer>
  );
}


const TopContainer = styled.div`
    margin-top: 20px;
    display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
   width: 49%;
`;
const RightContainer = styled.div`
  width: 49%;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
const Text = styled.div`
  font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  margin: 14px 20px;
`;




export default TopContent;