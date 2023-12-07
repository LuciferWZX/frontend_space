import { extend, ResponseError } from 'umi-request';
import store from 'storejs';
import { message } from '@/utils/antdStore';
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
    console.error('[请求出错]', error.data);
    // 请求已发送但服务端返回状态码非 2xx 的响应
    if (error.response.status === 401) {
      store.remove(__TOKEN__);
    }
    if (error.data) {
      const data = error.data as ErrorData;
      message.error({ content: data.message, key: data.statusCode }).then();
    }
    const errorMap: Record<number, string> = {
      500: '服务器未连接',
    };
    message.error({ content: errorMap[error.response.status], key: 'timeout' }).then();
  } else {
    console.error('[请求出错]', error);
    // 请求初始化时出错或者没有响应返回的异常
    if (error.type === 'Timeout') {
      message.error({ content: '请求超时', key: 'timeout' }).then();
    }
  }
  throw error; // 如果throw. 错误将继续抛出.
};
const request = extend({
  prefix: '/api',
  timeout: 6000,
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
