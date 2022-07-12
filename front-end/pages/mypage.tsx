import Layout from '@components/Layout';
import styled from 'styled-components';


const MyPage = () => (
  <Layout>
      <PageForm>
        <MenuBar>
            <MenuBarData>
                Dash Board
            </MenuBarData>
            <MenuBarData>
                내 알림 보기/알림 설정
            </MenuBarData>
        </MenuBar>
        <Form>
            <FormHeader>
                Header
            </FormHeader>
            <FormData>
                My Profile
            </FormData>
            <FormData>
                최근 알림 보기
            </FormData>
            <FormData>
                최근 내 질문
            </FormData>
            <FormData>
                최근 학습중인 강의
            </FormData>
            <FormData>
                학습중인 강좌
            </FormData>
            <FormData>
                학습중인 강좌
            </FormData>
            <FormData>
                학습중인 강좌
            </FormData>
        </Form>
      </PageForm>
  </Layout>
)

const PageForm = styled.div`
    display: flex;
    width: 100%;
    border: solid red;
`;

const MenuBar = styled.div`
    border: solid blue;
    width: 20%;
`;

const MenuBarData = styled.div`
    border: solid black;
`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: flex-end;
`;

const FormHeader = styled.div`
    width: 100%;
`;

const FormData = styled.div`
    border: solid black;
    width: 33.3%;
`;

export default MyPage;