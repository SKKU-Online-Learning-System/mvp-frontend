import styled from 'styled-components'
const LectureIntroduction = () => {
  return (
    <IntroContainer>
      <Text>강의 소개</Text>
      <Desc1>초급자를 위해 준비한 <br></br>
        [백엔드, 웹 개발] 강의입니다.</Desc1>
      <Desc2>
        실무에 가까운 예제로, 스프링 부트와 JPA를 활용해서 웹 애플리케이션을 설계하고 개발합니다. 이 과정을
        통해 스프링 부트와 JPA를 실무에서 어떻게 활용해야 하는지 이해할 수 있습니다.
      </Desc2>
      <Desc3Container>
        <Desc3Icon>
          <img src="images/✍️.png" alt=""></img>
          <div style={{ width: '43px' }}>이런 걸 <br></br>배워요!</div>
        </Desc3Icon>
        <Desc3TextContainer>

          <Desc3Text str={'✔️ 스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수 있습니다'} />
          <Desc3Text str={'✔️ 스프링 부트와 JPA를 활용하는 최적의 방법을 이해합니다.'} />
          <Desc3Text str={'✔️ 도메인 모델을 이해하고 설계할 수 있습니다.'} />
          <Desc3Text str={'✔️ 도메인 주도 설계를 이해합니다.'} />

        </Desc3TextContainer>
      </Desc3Container>
    </IntroContainer>
  );
}
const IntroContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin-top: 30px;
`;
const Text = styled.div`
    font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  margin: 14px 20px;
`;
const Desc1 = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  margin: 14px 20px;
`;
const Desc2 = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140.62%;
  margin: 14px 20px;
`;
const Desc3Container = styled.div`
display: flex;
  margin: 14px 20px;
`;
const Desc3Icon = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140.62%;
  margin: 61px 86px;
`;
const Desc3TextContainer = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: bold;
  /* font-size: 1.2rem; */
  line-height: 140.62%;
`;
interface Desc3Props {
  str: string;
}

const Desc3Text = ({ str }: Desc3Props) => (
  <div>
    {str}
    {/* <div style={{ margin: '10px 0' }}>
            {str}
        </div> */}
  </div>
);



export default LectureIntroduction;