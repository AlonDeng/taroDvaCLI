/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 10:56:06
 * @LastEditTime: 2021-08-12 11:59:28
 * @LastEditors: alon
 */
import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux';

import './Login.scss'

const Login = (props) => {
  const _state = useSelector((state) => state);
  const dispatch = useDispatch();
  const status = '1111';
  console.log("🚀 ~ file: index.jsx ~ line 34 ~ Login ~ props", props, _state)
  const loginByStatus = () => {
    dispatch({type: 'homeModel/login', payload: {
      countryCode: "86", phoneNum: "13113726203", type: "login"
    }});
  };
  return (
    <View className='index'>
        <Button onClick={loginByStatus}><Text>发送验证码</Text></Button>
        <Text>Login: {status}</Text>
    </View>
  );
};

export default Login