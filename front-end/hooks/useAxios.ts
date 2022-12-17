import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
/*
setData(data.slice(0,3)) 처럼 할 때 불편
-> res.data 에서 가공하는것도 괜찮지만, 공통적으로 사용되는 케이스가 있으므로 data 그대로 반환
*/
export const useAxios = <T>(api: () => Promise<T>) => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<AxiosError | undefined>();

	const processApi = async () => {
		try {
			setIsLoading(true);
			const response = await api();
			setData(response);
		} catch (e: unknown | AxiosError) {
			if (axios.isAxiosError(e)) setError(e);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		processApi();
	}, []);

	return { data, isLoading, error };
};
