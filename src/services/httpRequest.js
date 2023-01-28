
import { toCamelCaseKey } from '@utils';
import axiosClient from './axiosClient';

const httpRequest = async ({
  url,
  method,
  params,
  data,
  ignoreErrorMessage = false,
  ...rest
}) => {
  let result;
  try {
    const response = await axiosClient.request({
      url,
      method,
      params,
      data,
      ...rest,
    });
    const { data: responseData, status, headers } = response;

    if (typeof responseData === 'object' && !(responseData instanceof Blob) && !(responseData instanceof ArrayBuffer) && !Array.isArray(responseData)) {
      result = toCamelCaseKey(responseData);
      return {
        status,
        ...result,
      };
    } else {
      result = { data: responseData, headers, status };
      return result;
    }
  } catch (error) {
    return error;
  }
};

export default httpRequest;
