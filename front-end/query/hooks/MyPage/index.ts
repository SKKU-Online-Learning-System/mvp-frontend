import { useQueries, UseQueryResult, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import myPageAPI from 'apis/MyPage';
import {
	ICourseInfo,
	IFinishedLectureCount,
	ILectureCount,
	IMyQuestion,
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

export const useCompletedCourseFetch = (): UseQueryResult<ICourseInfo[]> => {
	return useQuery<ICourseInfo[]>(
		[QUERY_KEYS.FETCH_COMPLETED_COURSES],
		myPageAPI.fetchCompletedCourses,
	);
};

export const useMyQnaFetch = (): UseQueryResult<IMyQuestion[]> => {
	return useQuery<IMyQuestion[]>(
		[QUERY_KEYS.FETCH_MY_QNA],
		myPageAPI.fetchQuestions,
	);
};
