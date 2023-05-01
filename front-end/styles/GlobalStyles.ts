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
html {
  --color-green-100: rgb(43, 102, 83);
  --color-green-300: rgb(126, 126, 255);
  --color-green-600: rgb(74, 74, 255);
  --color-green-900: rgb(2, 0, 19);

  --color-green-0: rgb(242, 246, 255);

  --color-white-0: rgb(254, 254, 254);

  --color-grey-100: rgb(236, 236, 236);
  --color-grey-200: rgba(236, 236, 236, 0.819);
  --color-grey-400: rgb(139, 139, 139);
  --color-grey-600: rgb(58, 58, 58);
  --color-grey-900: rgb(41, 41, 41);
}
`;

export default GlobalStyles;
