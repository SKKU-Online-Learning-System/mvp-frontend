import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import myPageAPI from 'apis/MyPage';
import {
	ICourseInfo,
	IFinishedLectureCount,
	ILectureCount,
} from 'types/MyPage';

export const useCurrentLeaningCourseListFetch = (): [
	UseQueryResult<ICourseInfo[]>,
	UseQueryResult<ICourseInfo[]>,
	UseQueryResult<IFinishedLectureCount[]>,
	UseQueryResult<ILectureCount[]>,
] => {
	return useQueries({
		queries: [
			{
				queryKey: [QUERY_KEYS.FETCH_COMPLETED_COURSES],
				queryFn: myPageAPI.fetchCompletedCourses,
			},
			{
				queryKey: [QUERY_KEYS.FETCH_CURRENT_LEARNING_COURSE],
				queryFn: myPageAPI.fetchCurrentLearningCourses,
			},
			{
				queryKey: [QUERY_KEYS.FETCH_FINISHED_LECTURE_COUNTS],
				queryFn: myPageAPI.fetchFinishedLectureList,
			},
			{
				queryKey: [QUERY_KEYS.FETCH_LECTURE_COUNTS],
				queryFn: myPageAPI.fetchLectureCounts,
			},
		],
	});
};
