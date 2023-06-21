import API from './API';
import { INotification } from 'shared-type/src/models/INotification';

export const getCountUnread = async () => {
  const response = await API.get('/api/v1/notifications/own/unread/count');
  return response.data.data as number;
};

export const getOwn = async () => {
  const response = await API.get('/api/v1/notifications/own');
  return response.data.data as INotification[];
};
