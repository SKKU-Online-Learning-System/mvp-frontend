import axiosInstance from "apis"

export const sendSignUpRequest = async (email: string, nickname: string) => {
    return axiosInstance.post('/auth/signup', { destination: email, nickname: nickname });
}

export const fetchSignUpCallback = async (token: string) => {
    return axiosInstance.get(`/auth/signup/callback?token=${token}`);
}

export const fetchEmailCheck = async (email: string) => {
    return axiosInstance.get(`/auth/email-check/${email}`);
}

export const fetchNicknameCheck = async (nickname: string) => {
    return axiosInstance.get(`/auth/nickname-check/${nickname}`);
}