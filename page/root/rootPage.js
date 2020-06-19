import React from 'react';
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomePage from '../home/homePage';
import CatePage from '../cate/catePage';
import MinePage from '../mine/minePage';
// let MinePage = ()=>{
//     return (
//         <Text>hello</Text>
//     )
// }

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',

    }
  },
  Cate: {
    screen: CatePage,
    navigationOptions: {
      title: '分类',
      tabBarLabel: '分类',

    }
  },
  Me: {
    screen: MinePage,
    navigationOptions: {
      title: 'Me',
      tabBarLabel: 'Me',

    }
  }

});

export default BottomNavigator;