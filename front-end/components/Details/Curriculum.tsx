import styled from 'styled-components'
const Curriculum = () => {
    return (
        <CurriculumContainer>
            <Text>커리큘럼</Text>
            <div style={{ margin: '0 50px' }}>
                <Table>
                    <thead>
                        <TitleRow num={0} title={'강좌 소개'} minute={5} second={59} />
                    </thead>
                    <tbody>
                        <Row title={'강좌 소개'} minute={5} second={59} />
                        <Row title={'수업 자료'} minute={0} second={0} />
                        <Row title={'강의 소스 코드'} minute={0} second={0} />

                    </tbody>
                    <thead>
                        <TitleRow num={1} title={'프로젝트 환경설정'} minute={77} second={48} />
                    </thead>
                    <tbody>
                        <Row title={'프로젝트 생성'} minute={15} second={58} />
                        <Row title={'라이브러리 살펴보기'} minute={9} second={16} />
                        <Row title={'View 환경 설정'} minute={15} second={33} />
                        <Row title={'H2 데이터베이스 설치'} minute={4} second={6} />
                        <Row title={'JPA와 DB 설정, 동작 확인'} minute={28} second={55} />

                    </tbody>
                </Table>
            </div>
        </CurriculumContainer>
    );
}
const CurriculumContainer = styled.div`
    height: 1792px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin: 30px 0;
`;
const Text = styled.div`
    margin: 30px 50px;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140.62%;
`;

interface TitleRowProps {
    num: number;
    title: string;
    minute: number;
    second: number;
}

const TitleRow = ({ num, title, minute, second }: TitleRowProps) => (
    <tr>
        <Th>섹션 {num}. {title}</Th>
        <Th>{minute}분 {second}초</Th>
    </tr>
);

interface RowProps {
    title: string;
    minute: number;
    second: number;
}

const Row = ({ title, minute, second }: RowProps) => (
    <tr>
        <Td>{title}</Td>
        <Td>{minute}분 {second}초</Td>
    </tr>
);

const Table = styled.table`
    width:100%;
    
    
`;
const Td = styled.td`
&:nth-child(1){
  text-align: left;
    }    
&:nth-child(2){
  text-align: right;
    }
    
`;
const Th = styled.th`
&:nth-child(1){
  text-align: left;
}    
&:nth-child(2){
  text-align: right;
}
`;





export default Curriculum;