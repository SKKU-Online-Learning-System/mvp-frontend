export const BASE_URL = 'http://52.78.92.40:3000'; // 추후 env로 빼야함. (임시)

// API 목록, 이곳의 파일은 숨겨야함. api가 해킹당하면 큰일남..

// 강의관련
export const GET_ALL_LECTURE_LISTS_API = `${BASE_URL}/api/lectures`;
export const GET_LECTURES_BY_PARENT_CATEGORY_API = `${BASE_URL}/api/findLectures/category/parent`;
export const GET_ALL_PARENT_CATEGORIES_API = `${BASE_URL}/api/category/parent`;

// 회원 계정 관련
export const SIGNUP_API = `${BASE_URL}/auth/join`;
