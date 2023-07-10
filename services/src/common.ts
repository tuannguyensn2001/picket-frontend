import API from './API';

export const uploadFile = async (form: FormData) => {
  const response = await API.post('/api/v1/files/upload', form);
  return response.data.data.url;
};
