import { ProductDetail } from "@/types/property.types";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
interface MyResponseData {
  item: ProductDetail;
}
const baseUrl = process.env.BACKEND_URL;

const axiosClient = axios.create({
  // withCredentials: true,
  baseURL: baseUrl
});
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-type': 'application/json',
    ...config.headers,
  };
  const access_token = localStorage.getItem('token');
  if (!!access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }
  return config;
});

axiosClient.interceptors.response.use((response: AxiosResponse<MyResponseData>) => {
  if (response.status === 200 && response.data) {
    return response.data;
  }
  return response;
}, error => {
  console.warn(`Lỗi kết nối đến cơ sở dữ liệu, ${error.message}`);
  return Promise.reject(error);
});

export default axiosClient;
