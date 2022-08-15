import axios from 'axios';
// axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
	// withCredentials: true,
	baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

export default axiosInstance;
/*
안에 들어가는 인수는 아래 링크에서 확인 가능
https://axios-http.com/kr/docs/req_config
*/
