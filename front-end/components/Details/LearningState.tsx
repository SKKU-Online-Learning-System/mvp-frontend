import styled from 'styled-components'
const LearningState = () => {
  return (
    <LearningContainer>
      <Text>내 학습 상황</Text>
      <LearningInformation>
        <StateBox state={'14/36'} desc={'완료 수업'} />
        <StateBox state={'2h53m'} desc={'총 학습 시간'} />
        <StateBox state={'37%'} desc={'학습 달성률'} />
      </LearningInformation>
    </LearningContainer>
  );
}
const LearningContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.4);
`;
const LearningInformation = styled.div`
    display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
interface StateProps {
  state: string;
  desc: string;
}

const StateBox = ({ state, desc }: StateProps) => (
  <div>
    <Box>{state}</Box>
    <Desc>{desc}</Desc>
  </div>
);
const Box = styled.div`
    font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 140.62%;
`;
const Desc = styled.div`
    font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140.62%;
  text-align: center;
`;
const Text = styled.div`
    font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  margin: 14px 20px;
`;



export default LearningState;