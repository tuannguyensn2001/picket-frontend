import { useQuery } from 'react-query';
import { getMe } from '@picket/services';
import { AppResponse, IUser } from '@picket/shared-type';
import { AxiosError } from 'axios';

export default function useUser() {
  return useQuery<IUser, AxiosError<AppResponse>>('user', getMe, {
    retry: false,
  });
}
