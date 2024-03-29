import { QUERY_KEYS } from './queryKeys';
import {
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from '@tanstack/react-query';
import courseAPI from 'apis/Courses/courseApi';
import qnaApi from 'apis/QnA/qnaApi';
import { ICourseDetail, IQna } from 'types/Course';
import { ILectureList } from 'types/Lecture';

const selectCourseQnaFetch = (data: IQna[]): IQna[] => {
	return data.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
};

export const useCourseDetailFetch = (
	courseId?: string,
): UseQueryResult<ICourseDetail> => {
	return useQuery<ICourseDetail>(
		[QUERY_KEYS.FETCH_COURSE_DETAIL],
		() => courseAPI.fetchCourseDetail(courseId),
		{
			enabled: !!courseId,
		},
	);
};

export const useCourseDetailLectureFetch = (
	courseId?: string,
	options?: UseQueryOptions<ILectureList[]>,
): UseQueryResult<ILectureList[]> => {
	return useQuery<ILectureList[]>(
		[QUERY_KEYS.FETCH_COURSE_DETAIL_LECTURES],
		() => courseAPI.fetchCourseDetailLectures(courseId),
		{
			enabled: !!courseId,
			...options,
		},
	);
};

export const useCourseQnaFetch = (
	courseId?: string,
): UseQueryResult<IQna[]> => {
	return useQuery<IQna[]>(
		[QUERY_KEYS.FETCH_COURSE_QNA],
		() => qnaApi.fetchCourseDetailQna(courseId),
		{
			enabled: !!courseId,
			select: selectCourseQnaFetch,
		},
	);
};
