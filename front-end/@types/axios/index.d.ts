import { AxiosRequestConfig } from 'axios';
// axiosRequestConfig 안에 이런 속성이 없어서 직접 추가.
declare module 'axios' {
	interface AxiosRequestConfig {
		willUseCustomErrorHandler?: boolean;
	}
}
