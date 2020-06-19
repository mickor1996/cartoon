import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Carousel } from '@ant-design/react-native'//轮播图
import ListViewCom from '../com/ListViewCom'

export default class HomePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => {
      if (focused) {
        return (
          <Image style={styles.tabBarIcon} source={require('../../assets/img/index1.png')} />
        )
      }
      return (
        <Image style={styles.tabBarIcon} source={require('../../assets/img/index0.png')} />
      )
    }
  }
  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          selectedIndex={2}
          autoplay
          infinite
        >
          <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
            <Image style={{ width: '100%', height: 200 }} resizeMode="cover" source={require('../../assets/img/swiper1.jpg')} />
          </View>
          <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
            <Image style={{ width: '100%', height: 200 }} resizeMode="cover" source={require('../../assets/img/swiper2.jpg')} />
          </View>
          <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
            <Image style={{ width: '100%', height: 200 }} resizeMode="cover" source={require('../../assets/img/swiper3.jpg')} />
          </View>
        </Carousel>
        <ListViewCom navigation={this.props.navigation}></ListViewCom>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21
  },
  wrapper: {
    backgroundColor: '#fff'
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
})