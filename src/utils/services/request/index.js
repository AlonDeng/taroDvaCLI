/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 10:14:46
 * @LastEditTime: 2021-08-12 12:52:19
 * @LastEditors: alon
*/
import Taro from '@tarojs/taro';
import _ from 'lodash';
import {BASE_URL} from '../config';
import interceptors from './interceptors';

interceptors.forEach(i => Taro.addInterceptor(i))

const baseOptions = (params, method = "GET") => {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    let option = {
      url: (params.BASE_URL || BASE_URL) + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
      }
    };
    if (_.get(params, 'authorization', true)) {
      console.log('add authorization ---------');
      option.header.Authorization = Taro.getStorageSync('Authorization');
    }
    return Taro.request(option);
  }


export default {
    get: function ({url, data = "", options}) {
        let option = { url, data , ...options};
        return baseOptions(option);
      },
    post: function({url, data, options}) {
        let params = { url, data, ...options};
        return baseOptions(params, "POST");
      }, 
    put: function ({url, data = "", options}) {
        let option = { url, data, ...options };
        return baseOptions(option, "PUT");
      },
    delete: function ({url, data = "", options}) {
        let option = { url, data, ...options };
        return baseOptions(option, "DELETE");
      }
}