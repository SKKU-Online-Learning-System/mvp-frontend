import axios from 'axios';
const axiosInstance = axios.create({
	baseURL: process.env.API_SERVER,
});

export default axiosInstance;
/*
안에 들어가는 인수는 아래 링크에서 확인 가능
https://axios-http.com/kr/docs/req_config
*/
