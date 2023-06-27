import { IUser } from './IUser';

interface Payload {
  [key: string]: string;
}

export declare interface INotification {
  avatar_url: string;
  html_content: string;
  from: number;
  to: number;
  template: string;
  payload: Payload;
  type: string;
  read_at: number;
  created_at: number;
  updated_at: number;
  id: number;
  from_user: IUser;
  to_user: IUser;
}
