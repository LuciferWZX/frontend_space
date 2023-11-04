import { message } from '@space/utils';
import { extend, ResponseError } from 'umi-request';
import store from 'storejs';
interface ErrorData {
  statusCode: number;
  message: string;
}
export interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}
const errorHandler = (error: ResponseError) => {
  if (error.response) {
    // 请求已发送但服务端返回状态码非 2xx 的响应
    console.log(error.response.status);
    if (error.response.status === 401) {
      store.remove(__TOKEN__);
    }
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    if (error.data) {
      const data = error.data as ErrorData;
      message()!.error({ content: data.message, key: data.statusCode }).then();
    }
  } else {
    // 请求初始化时出错或者没有响应返回的异常
    console.log(error.message);
  }
  throw error; // 如果throw. 错误将继续抛出.
};
const request = extend({
  prefix: '/api',
  timeout: 1000,
  errorHandler: errorHandler,
  headers: {
    'Content-Type': 'application/json',
  },
});
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  const auth: string | undefined = store.get(__TOKEN__);
  if (auth) {
    options.headers = {
      ...options.headers,
      authorization: `Bearer ${auth}`,
    };
  }
  return {
    url: url,
    options: options,
  };
});

// 克隆响应对象做解析处理
request.interceptors.response.use(async (response) => {
  // const data = await response.clone().json();
  // if (data && data.NOT_LOGIN) {
  //     location.href = '登录url';
  // }
  return response;
});
export default request;
