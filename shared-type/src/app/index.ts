import { AxiosError } from 'axios';

export type AppResponse<T = null> = {
  message: string;
  data: T;
};

export type AppError = AxiosError<AppResponse>;
