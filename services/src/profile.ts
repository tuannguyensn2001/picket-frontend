import API from './API';

export const updateAvatar = async (avatar: string) => {
  const response = await API.put('/api/v1/profiles/avatar', { url: avatar });
  return response.data.data;
};
