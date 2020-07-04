import axios from 'axios';
import { apiConfig } from './api.config';
import QS from 'qs';

axios.defaults.withCredentials = true;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
//http response 拦截器
axios.interceptors.response.use(
  response => {
    let requestConfig = response.config.requestConfig ? response.config.requestConfig : { intercept: true };
    if (requestConfig.intercept) {
      // console.log(response);
      const code = +response.data.error.returnCode;
      if (code === 10001) {
        Toast.showError(response.data.error.returnUserMessage);
        // 手动修改returnCode。表示接口已被拦截过。
        response.data.error.returnCode = -1;
        // router.push({ name: 'index', params: { status: 3 }});
      } else if (code === 10002) {
        
      }
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(api, params = {}) {
  let url;
  if (process.env.NODE_ENV === 'development') {
    // url = '/api/' + apiConfig['apis'][api][process.env.NODE_ENV];
  } else {
    url = apiConfig[api][process.env.NODE_ENV];
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(api, data, config) {
  let url, params;
  if (process.env.NODE_ENV === 'development') {
    // console.log(process.env.NODE_ENV);
    // console.log(apiConfig['apis'][api][process.env.NODE_ENV]);
    url = '/api/' + apiConfig['apis'][api][process.env.NODE_ENV];
    // console.log(url);
    return new Promise((resolve, reject) => {
      axios.get(url, { requestConfig: config })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
    })

  } else {
    url = apiConfig['apis'][api][process.env.NODE_ENV];
  }
  return new Promise((resolve, reject) => {
    if (data) {
      params = Object.assign({}, data);
    }
    axios.post(url, QS.stringify(params), { requestConfig: config })
      .then(response => {
        resolve(response.data);
      }, err => {
        // this.$throw(e)
        reject(err)
      })
  })

}