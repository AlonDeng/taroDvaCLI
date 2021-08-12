/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 11:28:25
 * @LastEditTime: 2021-08-12 12:56:03
 * @LastEditors: alon
 */
import request from '../request/index';
// 验证码登录
export const verifiedCodeLogin = (data) =>
  request.post('/front/member/verifiedCodeLogin', data, {
    authorization: false,
  });

  //验证码发送
export const verifiedCodeSend = (data) =>
request.post({url: '/front/member/verifiedCodeSend', data, options: {
    authorization: false,
}});
