import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
	ICourseRetrieveInfo,
	INewCourseInfo,
	CourseInfo,
} from 'types/Admin/Index';
import { QUERY_KEYS } from 'query/hooks/Admin/queryKeys';
import adminAPI from 'apis/Admin/adminAPI';

export const usePopularCoursesFetch = (
	title: string,
): UseQueryResult<ICourseRetrieveInfo[]> => {
	return useQuery<ICourseRetrieveInfo[]>(
		[QUERY_KEYS.FETCH_POPULAR_COURSES, title],
		() => adminAPI.fetchPopularContentsInfo(title),
		{
			staleTime: 10 * 60 * 1000,
		},
	);
};

export const useNewCoursesFetch = (): UseQueryResult<INewCourseInfo[]> => {
	return useQuery<INewCourseInfo[]>(
		[QUERY_KEYS.FETCH_NEW_LECTURES],
		() => adminAPI.fetchNewContentsInfo(),
		{
			staleTime: 10 * 60 * 1000,
		},
	);
};

export const useAllCoursesFetch = (): UseQueryResult<CourseInfo[]> => {
	return useQuery<CourseInfo[]>(
		[QUERY_KEYS.FETCH_ALL_COURSES],
		() => adminAPI.fetchAllCourses(),
		{
			staleTime: 60 * 60 * 1000,
		},
	);
};
