import Link from 'next/link';
import { useState } from 'react';

import LoginModal from '@components/modals/LoginModal'

const linkStyle = {
    marginRight: '1rem'
}
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Link href="/"><a style={linkStyle}>LOGO</a></Link>
      <Link href="/lectures"><a style={linkStyle}>강의</a></Link>
      <Link href="/community"><a style={linkStyle}>커뮤니티</a></Link>
      <button onClick={() => setShowModal(true)}>로그인</button>
      <Link href="/signup"><a style={linkStyle}>회원가입</a></Link>

      <LoginModal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        로그인 모달 children
      </LoginModal>
    </div>
  );
};

export default Header;