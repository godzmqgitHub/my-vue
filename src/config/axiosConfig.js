import { axios } from 'axios';
import { Qs } from 'qs';
import ApiConfig from './api';
import { Toast } from 'mint-ui';

// 响应时间
// axios.defaults.timeout = 5 * 1000

const defaultHost = ApiConfig.defaultHost;
const apis = ApiConfig.apis;
const ENV = process.env.ENV_CONFIG

// 如果请求的URL不是完整路径，会将baseURL和URL拼接作为完整路径
// axios.defaults.baseURL = process.env.API_ROOT;
const unit = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 30000 //请求时长
})
// 请求拦截
unit.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        return config;
    },
    err => {
        Toast('异常错误');
    }
)

// 返回拦截
unit.interceptors.response.use(
    (res) => {
        console.log(res);
        return res;
    },
    (error) => {
        Toast('异常错误');
    }
)

// 处理不同环境的Url
export function getUrl(apiName) {
  const api = apis[apiName]
  if (ENV === 'dev' && api.serve) {
    return api.serve
  }
  if (api.host && api.host[ENV]) {
    unit.defaults.baseURL = api.host[ENV]
    return api.path
  }
  unit.defaults.baseURL = defaultHost[ENV]
  return api.path
}

export function fetchPost(url) {
    const reqUrl = getUrl(url);
    return unit.post(reqUrl);
}

// import axios from 'axios'
// // import { Spin } from 'iview'
// class HttpRequest {
//   constructor(baseUrl = baseURL) {
//     this.baseUrl = baseUrl
//     this.queue = {}
//   }
//   getInsideConfig() {
//     const config = {
//       baseURL: this.baseUrl,
//       headers: {
//         //
//       }
//     }
//     return config
//   }
//   destroy(url) {
//     delete this.queue[url]
//     if (!Object.keys(this.queue).length) {
//       // Spin.hide()
//     }
//   }
//   interceptors(instance, url) {
//     // 请求拦截
//     instance.interceptors.request.use(config => {
//       // 添加全局的loading...
//       if (!Object.keys(this.queue).length) {
//         // Spin.show() // 不建议开启，因为界面不友好
//       }
//       this.queue[url] = true
//       return config
//     }, error => {
//       return Promise.reject(error)
//     })
//     // 响应拦截
//     instance.interceptors.response.use(res => {
//       this.destroy(url)
//       const {
//         data,
//         status
//       } = res
//       return {
//         data,
//         status
//       }
//     }, error => {
//       this.destroy(url)
//       return Promise.reject(error)
//     })
//   }
//   request(options) {
//     const instance = axios.create()
//     options = Object.assign(this.getInsideConfig(), options)
//     this.interceptors(instance, options.url)
//     return instance(options)
//   }
// }
// export default HttpRequest