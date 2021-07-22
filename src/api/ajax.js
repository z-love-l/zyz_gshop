/* Ajax请求函数模块 */
/* 返回值是promise对象 */
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步Ajax请求
    // eslint-disable-next-line no-unused-vars
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      // eslint-disable-next-line no-unused-vars
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // eslint-disable-next-line no-undef,no-unreachable
    promise.then(function (response) {
      // 成功了调用resolve，失败调用reject
      resolve(response.data)
    }).catch(function (error) {
      // 失败调用reject
      reject(error)
    })
  })
}
