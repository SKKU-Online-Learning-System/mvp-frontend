import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from 'query/hooks/Main/queryKeys';
import mainPageAPI from 'apis/Main';
import myPageAPI from 'apis/MyPage';
import { ICourse } from 'types/Main';
import { ILatestLecture } from 'types/MyPage';

export const usePopularCoursesFetch = (): UseQueryResult<ICourse[]> => {
	return useQuery<ICourse[]>(
		[QUERY_KEYS.FETCH_POPULAR_COURSES],
		mainPageAPI.fetchPopularCourses,
	);
};

export const useRecentLecturesFetch = (): UseQueryResult<ILatestLecture[]> => {
	return useQuery<ILatestLecture[]>(
		[QUERY_KEYS.FETCH_RECENT_LECTURES],
		myPageAPI.fetchRecentLectures,
	);
};
