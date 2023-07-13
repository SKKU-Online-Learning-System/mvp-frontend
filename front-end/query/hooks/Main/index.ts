import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from 'query/hooks/Main/queryKeys';
import { ILatestLecture } from 'types/MyPage';
import { MainCourse } from 'types//Main';
import mainPageAPI from 'apis/Main';
import myPageAPI from 'apis/MyPage';

export const useRecommendedCoursesFetch = (order: number) => {
	const results = useQueries({
		queries: [
			{
				queryKey: [QUERY_KEYS.FETCH_RECOMMENDED_COURSE],
				queryFn: () => mainPageAPI.fetchRecommendedCourse(order, 1),
			},
			{
				queryKey: [QUERY_KEYS.FETCH_RECOMMENDED_COURSE],
				queryFn: () => mainPageAPI.fetchRecommendedCourse(order, 2),
			},
			{
				queryKey: [QUERY_KEYS.FETCH_RECOMMENDED_COURSE],
				queryFn: () => mainPageAPI.fetchRecommendedCourse(order, 3),
			},
			{
				queryKey: [QUERY_KEYS.FETCH_RECOMMENDED_COURSE],
				queryFn: () => mainPageAPI.fetchRecommendedCourse(order, 4),
			},
			{
				queryKey: [QUERY_KEYS.FETCH_RECOMMENDED_COURSE],
				queryFn: () => mainPageAPI.fetchRecommendedCourse(order, 5),
			},
		],
	});
	return results;
};

export const useRecentLecturesFetch = (): UseQueryResult<ILatestLecture[]> => {
	return useQuery<ILatestLecture[]>(
		[QUERY_KEYS.FETCH_RECENT_LECTURES],
		myPageAPI.fetchRecentLectures,
	);
};
