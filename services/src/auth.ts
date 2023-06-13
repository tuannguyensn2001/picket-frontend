import API from './API';
import { AxiosResponse } from 'axios';
import { AppResponse, IUser, LoginRequest } from '@picket/shared-type';

export const getMe = async () => {
  const response: AxiosResponse<AppResponse<IUser>> = await API.get(
    '/api/v1/auth/me'
  );
  return response.data.data;
};

export const fetchLogin = async (data: LoginRequest) => {
  const response = await API.post('/api/v1/auth/login', data);
  return response.data.data;
};

export const fetchLoginWithGoogle = async (code: string) => {
  const response = await API.post('/api/v1/auth/login/google', { code });
  return response.data.data;
};
