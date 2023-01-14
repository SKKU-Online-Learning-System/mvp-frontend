import { QUERY_KEYS } from './queryKeys';
import {
	useMutation,
	UseMutationResult,
	useQuery,
	UseQueryOptions,
	UseQueryResult,
} from '@tanstack/react-query';
import lectureAPI from 'apis/Lectures/lectureApi';

export const useLectureVideoUrlFetch = (
	lectureId: string,
): UseQueryResult<string> => {
	return useQuery<string>(
		[QUERY_KEYS.FETCH_LECTURE_VIDEO_URL, lectureId],
		async () => {
			const result = await lectureAPI.fetchLectureVideoUrl(lectureId);
			return result[0].filename || '';
		},
		{
			enabled: !!lectureId,
		},
	);
};

export const useLectureHistoryFetch = (
	lectureId: string,
	options: UseQueryOptions<number>,
): UseQueryResult<number> => {
	return useQuery<number>(
		[QUERY_KEYS.FETCH_LECTURE_HISTORY, lectureId],
		async () => {
			const result = await lectureAPI.fetchLectureHistory(lectureId);
			return result.lastTime || 0;
		},
		{ enabled: !!lectureId, ...options },
	);
};

export const useLectureHistoryUpdate = (): UseMutationResult<
	void,
	unknown,
	{ lectureId: number; lastTime: number }
> => {
	return useMutation<void, unknown, { lectureId: number; lastTime: number }>(
		({ lectureId, lastTime }) =>
			lectureAPI.updateLectureHistory({ lectureId, lastTime }),
	);
};

export const useLectureCompleteUpdate = (): UseMutationResult<
	void,
	unknown,
	number
> => {
	return useMutation<void, unknown, number>((courseId) =>
		lectureAPI.updateLectureComplete(courseId),
	);
};
