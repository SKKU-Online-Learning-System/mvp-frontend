import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont,"Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212529;
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
input, button, textarea {
  font-family: inherit;
}
html, body, #root {
  height: 100%;
}
// 포인트 컬로 변수로 생성
// 사용예시
  /* 컬러 수정 해야함 */
  /* color: var(--color-blue-600); */


@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
:root {

  --color-Primary: #2b6653;
  --color-onPrimary: #f2f2f2;
  --color-onPrimary-100: #f4f4f4;

  --color-Surface: #f2f2f2;
  --color-onSurface: #1b1b1b;
  --color-onSurface-100: #b1b1b1;

  --color-Background: #FBFBFB;
  --color-onBackground: #1b1b1b;
  --color-onBackground-100: #9a9a9a;

  --color-green-100: rgb(237, 255, 241);
  --color-green-300: rgb(80,118,81);
  --color-green-500: rgb(43, 102, 83);
  --color-green-700: #35644f;
  --color-green-900: rgb(32,68,52);

  --color-white-0: rgb(254, 254, 254);
  --color-white-100: #FBFBFB;

  --color-grey-100: rgb(236, 236, 236);
  --color-grey-200: #D9D9D9;

  --color-grey-300: rgb(139, 139, 139);
  --color-grey-400: rgb(90, 91, 92);
  --color-grey-500: rgb(41, 41, 41); 

  --font-NotoSans: 'Noto Sans KR';
  /* fontWeight 100, 300, 400, 500, 700, 900 있음 */
}
`;

export default GlobalStyles;
