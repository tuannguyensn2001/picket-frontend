import API from './API';
import { AxiosResponse } from 'axios';
import { AppResponse, IUser } from '@picket/shared-type';

export const getMe = async () => {
  const response: AxiosResponse<AppResponse<IUser>> = await API.get(
    '/api/v1/auth/me'
  );
  return response.data.data;
};
