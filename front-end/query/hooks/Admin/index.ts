import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from 'query/hooks/Admin/queryKeys';
import adminAPI from 'apis/Admin/adminAPI';
import { ICourseRetrieveInfo } from 'types/Admin/Index';

export const usePopularCoursesFetch = (): UseQueryResult<
	ICourseRetrieveInfo[]
> => {
	return useQuery<ICourseRetrieveInfo[]>(
		[QUERY_KEYS.FETCH_POPULAR_COURSES],
		adminAPI.fetchPopularContentsInfo,
		{
			staleTime: 60 * 1000,
			keepPreviousData: true,
		},
	);
};
