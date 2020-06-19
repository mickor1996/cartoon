import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import BottomNavigator from './page/root/rootPage'
import BriefPage from './page/brief/briefPage'
import ImgPage from './page/brief/ImgPage'
import ListPage from './page/cate/ListPage'

const AppStack = createStackNavigator(
  {
    BottomNavigator: {
      screen: BottomNavigator,
      navigationOptions: {
        headerShown: false
      }
    },
    Brief: { screen: BriefPage },
    ImgPage: { screen: ImgPage },
    ListPage: { screen: ListPage }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
// export default App;
export default createAppContainer(AppStack)