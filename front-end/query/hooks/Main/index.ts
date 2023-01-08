import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from 'query/keys/Main';
import API from 'apis/Main';
import { ICourse } from 'types/Main';

export const usePopularCoursesFetch = (): UseQueryResult<ICourse[]> => {
	return useQuery<ICourse[]>(
		[QUERY_KEYS.FETCH_POPULAR_COURSES],
		API.fetchPopularCourses,
	);
};
