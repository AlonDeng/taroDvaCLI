/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 10:56:06
 * @LastEditTime: 2021-08-12 16:07:22
 * @LastEditors: alon
 */
import React from 'react'
import { View, Text, Button } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import './Login.scss'

const Login = (props) => {
  const loading = useSelector((state) => state.loading.effects['homeModel/login']);
  // const loading = this.props.loading.effects['todoList/addAsync']
  const dispatch = useDispatch();
  console.log("🚀 ~ file: index.jsx ~ line 34 ~ Login ~ props", props, !!loading)
  const loginByStatus = () => {
    dispatch({type: 'homeModel/login', payload: {
      countryCode: "86", phoneNum: "13113726203", type: "login"
    }});
  };
  return (
    <View className='index'>
        <Button onClick={loginByStatus}><Text>发送验证码</Text></Button>
        <Text>Login: {!!loading ? 'Y' : 'N'}</Text>
    </View>
  );
};

export default Login