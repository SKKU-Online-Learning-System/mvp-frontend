import axiosInstance from "apis"

export const sendLogInRequest = async (email: string) => {
    return axiosInstance.post('/auth/login', { destination: email });
}

export const fetchLogInCallback = async (token: string) => {
    return axiosInstance.get(`/auth/login/callback?token=${token}`);
}