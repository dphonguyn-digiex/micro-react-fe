import axios from 'axios';
import queryString from 'query-string';
import { STORAGE_KEYS } from '@constants/declaration.js';
import StorageHelper from '@utils/storageHelper.js';

export const getAuthInfo = async () => {
  return StorageHelper.getCookie(STORAGE_KEYS.TOKEN) || '';
};

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    serialize: params => queryString.stringify(params)
  }
});

axiosClient.interceptors.request.use(async config => {
  const token = await getAuthInfo();
  if (token) {
    config.headers['Auth-Token'] = `${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  async ({ response }) => {
    const { status, data } = response;
    const responseError = {
      ...data,
      status,
    };
    // Handle errors
    throw responseError;
  }
);

export default axiosClient;
