import { instance } from './utils/apiInstance';

export const requestTimeStamps = async (videoId: string) => {
  const response = await instance.get(`${videoId}`);
  return response;
};
