import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

export const useAxios = <T>(api: () => Promise<T>) => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<AxiosError | undefined>();

	const processApi = async () => {
		try {
			setIsLoading(true);
			console.log(api);
			const response = await api();
			console.log(response);
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
