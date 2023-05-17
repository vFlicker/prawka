import { httpClient } from './httpClient';

// TODO: remove any
export const fetchData = async (): Promise<any[]> => {
  const { data } = await httpClient.get<any[]>('prawka/get');
  return data;
};

// TODO: remove any
export const postData = async (data: any): Promise<void> => {
  await httpClient.post<void>('prawka/post', data);
};
