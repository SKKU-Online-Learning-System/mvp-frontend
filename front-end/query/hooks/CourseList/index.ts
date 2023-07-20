import { QUERY_KEYS } from './queryKeys';
import {
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from '@tanstack/react-query';
import API from 'apis/Courses/courseApi';
import {
	ICourseCategory,
	ICourseListParams,
	ICourseInfo,
	IPopularCourse,
} from 'types/Course';

const selectCourseCategories = (data: ICourseCategory[]) => [
	{ id: 0, name: '전체보기' },
	...data,
];

// 모든 강좌 카테고리를 가져옴
// useQuery 훅을 사용하여 API에서 데이터를 가져옴.
// 가져온 데이터에 전체보기 옵션을 추가하여,
// 사용자가 모든 강좌 카테고리를 볼 수 있도록 함

export const useCourseCategoriesFetch = (): UseQueryResult<
	ICourseCategory[]
> => {
	return useQuery<ICourseCategory[]>(
		[QUERY_KEYS.FETCH_COURSE_CATEGORIES],
		API.fetchAllCourseCategories,
		{
			select: selectCourseCategories,
		},
	);
};

// 모든 강좌 리스트를 가져옴
// useQuery 훅을 사용하여 API에서 데이터를 가져옴.
// 다양한 매개변수들을 사용하여 API요청을 만듦.
// 매개변수: category, 난이도, 키워드  포함
export const useCourseListFetch = (
	params: ICourseListParams,
	options?: UseQueryOptions<ICourseInfo[]>,
): UseQueryResult<ICourseInfo[]> => {
	return useQuery<ICourseInfo[]>(
		[
			QUERY_KEYS.FETCH_COURSE_LIST,
			params.category2sId,
			params.difficulty,
			params.keyword,
		],
		async () => {
			const { keyword, category2sId, difficulty } = params;

			if (keyword || difficulty) {
				const result = await API.fetchSearchedCourseList(keyword, difficulty);
				return result.courses;
			}

			const result = await API.fetchCourseList(category2sId);
			return result.courses;
		},
		options,
	);
};

// 모든 인기강좌 정보를 가져옴

export const usePopularCoursesFetch = (
	courseId: number,
): UseQueryResult<IPopularCourse> => {
	return useQuery<IPopularCourse>(
		[QUERY_KEYS.FETCH_POPULAR_COURSES, courseId],
		async () => {
			const popularCourse = await API.fetchPopularCourse(courseId);
			return popularCourse;
		},
	);
};
