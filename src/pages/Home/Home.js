/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 09:34:18
 * @LastEditTime: 2021-08-11 17:51:15
 * @LastEditors: alon
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux';

import './Home.scss'

const Home = (props) => {
  const _state = useSelector((state) => state);
  console.log("🚀 ~ file: index.jsx ~ line 34 ~ Home ~ props", props, _state)
  return (
    <View className='index'>
      <Text>Home1</Text>
    </View>
  );
};

export default Home

