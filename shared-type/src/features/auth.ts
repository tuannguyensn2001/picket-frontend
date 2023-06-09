import { IUser } from '../models/IUser';

export type LoginForm = Pick<IUser, 'email' | 'password'>;

export type LoginRequest = Pick<IUser, 'email' | 'password'>;

export type LoginResponse = {
  access_token: string;
};
