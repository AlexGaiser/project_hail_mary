import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../../config.development';

export type RequestResponse<T = any> = AxiosResponse<T>;
export type RequestConfig<T = any> = AxiosRequestConfig<T>;

export const request = axios.create({
  baseURL: API_BASE_URL,
});
