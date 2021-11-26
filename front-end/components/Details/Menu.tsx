import styled from 'styled-components'
const Menu = () => {
    return (
        <MenuContainer>
            <TextContainer>
                <UnederLine>대시 보드</UnederLine>                
                <MenuText>강의 소개</MenuText>
            </TextContainer>
        </MenuContainer>
  );
}
const MenuContainer = styled.div`
height: 63px;
  border-bottom: solid;
  border-color: #333333;
  border-width: thin;
  display: flex;
  align-items: center;
  width : 100vw;
  display: flex;
  justify-content: center;
`;
const TextContainer = styled.div`
width : 1440px;
display: flex;
margin: 0 135px;
`;
const MenuText = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  display: flex;
  align-items: center;
  height: 61px;
  padding: 0 20px;
`;
const UnederLine = styled.div`
font-family: NanumSquare;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 140.62%;
  display: flex;
  align-items: center;
  height: 61px;
  padding: 0 20px;
  //상속하는법 몰라서 복붙한 부분
border-bottom: solid;
  border-color: #333333;
  border-width: thick;
`;



export default Menu;