import { useQuery, UseQueryResult } from '@tanstack/react-query';

import noticesAPI from '../../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';
import { QUERY_KEYS } from './queryKeys';

export const useAllNoticesFetch = (): UseQueryResult<Notification[]> => {
	return useQuery<Notification[]>(
		[QUERY_KEYS.FETCH_ALL_NOTICES],
		() => noticesAPI.fetchAllNotices(),
		{
			staleTime: 30 * 60 * 1000,
		},
	);
};

export const useNoticeFetch = (id: number): UseQueryResult<Notification> => {
	return useQuery<Notification>([QUERY_KEYS.FETCH_ALL_NOTICES, id], () =>
		noticesAPI.fetchNotice(id),
	);
};
