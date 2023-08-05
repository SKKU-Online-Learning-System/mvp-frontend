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
