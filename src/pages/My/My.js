/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 17:12:22
 * @LastEditTime: 2021-08-11 17:13:13
 * @LastEditors: alon
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux';

import './My.scss'

const My = (props) => {
  const _state = useSelector((state) => state);
  console.log("🚀 ~ file: index.jsx ~ line 34 ~ My ~ props", props, _state)
  return (
    <View className='index'>
      <Text>My</Text>
    </View>
  );
};

export default My