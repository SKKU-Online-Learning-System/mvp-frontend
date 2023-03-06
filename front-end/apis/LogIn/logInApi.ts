import axiosInstance from 'apis';
import { AxiosResponse } from 'axios';

export const sendLogInRequest = async (
	email: string,
): Promise<AxiosResponse> => {
	return axiosInstance.post('/auth/login', { destination: email });
};

export const fetchLogInCallback = async (
	token: string,
): Promise<AxiosResponse> => {
	return axiosInstance.get(`/auth/login/callback?token=${token}`);
};
