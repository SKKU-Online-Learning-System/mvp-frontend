import Card from './Card';

const CardList = () => (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Card title={'프로그래밍 시작하기 : 파이썬 입문'} author={'홍길동'}/>
    <Card title={'팀 개발을 위한 Git, Github 입문'} author={'홍길동'}/>
    <Card title={'비전공자를 위한 개발자 취업 올인원 가이드'} author={'홍길동'}/>
    <Card title={'리눅스 입문 : 개념부터 탄탄히!'} author={'홍길동'}/>
  </div>
);

export default CardList;