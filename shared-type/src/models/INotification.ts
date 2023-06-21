import { IUser } from './IUser';

interface Payload {
  [key: string]: string;
}

export declare interface INotification {
  avatar_url: string;
  html_content: string;
  from: IUser;
  to: IUser;
  template: string;
  payload: Payload;
  type: string;
  read_at: number;
  created_at: number;
  updated_at: number;
  id: number;
}
