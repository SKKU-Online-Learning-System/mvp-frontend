import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from 'query/hooks/Main/queryKeys';
import { ILatestLecture } from 'types/MyPage';
import { MainCourse } from 'types//Main';
import mainPageAPI from 'apis/Main';
import myPageAPI from 'apis/MyPage';

export const useRecommendedCoursesFetch = (order: number) => {
	return useQuery<MainCourse[]>([QUERY_KEYS.FETCH_RECOMMENDED_COURSE], () =>
		mainPageAPI.fetchRecommendedCourse(order),
	);
};

export const useRecentLecturesFetch = (): UseQueryResult<ILatestLecture[]> => {
	return useQuery<ILatestLecture[]>([QUERY_KEYS.FETCH_RECENT_LECTURES], () =>
		myPageAPI.fetchRecentLectures(),
	);
};
