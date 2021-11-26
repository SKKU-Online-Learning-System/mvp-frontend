import Link from 'next/link'
import Layout from '@components/Layout'

import Banner from '@components/Home/Banner'
import HomeSearch from '@components/Home/HomeSearch'
import ThumbnailList from '@components/Home/ThumbnailList'

const Index = () => (
  <>
    <Layout>
      <img style={{height: '300px', marginBottom: '60px'}} src='images/banner_img.png'/>
      <HomeSearch/>
      <ThumbnailList title={'강의 이어듣기'} subtitle={'내가  듣고 있던 강의를 이어서 들어보세요.'}/>
      <ThumbnailList title={'여기서 시작해보세요!'}/> 
      <ThumbnailList title={'따끈따끈, 신규 강의를 만나보세요!'}/>
    </Layout>
    <img style={{width: '100vw', marginTop: '200px'}} src='images/random_img.png'/>
  </>
);

export default Index;