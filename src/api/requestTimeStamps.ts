import { AxiosResponse } from 'axios';
import { instance } from './utils/apiInstance';
import { Timestamp } from 'reduxStore/videoReducer';

export const requestTimeStamps = async (videoId: string): Promise<AxiosResponse<Timestamp[]>> => {
  const response = await instance.get(`${videoId}`);
  return response;
};
