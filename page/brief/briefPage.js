import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import pxSize from '../../assets/js/pxSize'
import MenuContent from './MenuContent'
import BriefContent from './BriefContent'
export default class BriefPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgPath: 'http://10.0.2.2:3000/img/bookimg/',
      isBrief: true
    }
  }
  render() {
    let { navigation } = this.props
    let book = navigation.state.params.book
    let imgUrl = this.state.imgPath + book.imgInfo.imgid + '.jpg'
    // console.log(imgUrl)
    return (
      <View style={styles.container}>
        <View style={{ width: pxSize(750), justifyContent: 'center', height: pxSize(100), borderColor: "#ccc", borderBottomWidth: 1, borderStyle: "solid" }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', paddingHorizontal: 10 }}
            onPress={() => { navigation.goBack() }}
          >
            <Text>&lt;返回</Text>
            <Text>&nbsp;{book.bookTitle}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: pxSize(400) }}>
          <Image
            blurRadius={8}
            style={{ opacity: 0.5, width: pxSize(750), height: pxSize(400), left: 0, top: 0, position: "absolute" }}
            resizeMode="cover"
            source={{ uri: imgUrl }}
          ></Image>
          <View style={{ height: pxSize(400), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Image
              style={{ width: pxSize(252), height: pxSize(336) }}
              resizeMode="cover"
              source={{ uri: imgUrl }}
            ></Image>
            <View style={{ width: pxSize(252), height: pxSize(336), marginLeft: 30 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 20 }}>{book.bookTitle}</Text>
              <Text style={{ marginVertical: 5 }}>漫画类型：{book.type}</Text>
              <Text>漫画作者：{book.author}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ width: pxSize(750), flexDirection: 'row' }}>
            <TouchableOpacity
              style={[styles.btn, styles.center]}
              onPress={() => { this.setState({ isBrief: true }) }}
            >
              <Text>详情</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.center]}
              onPress={() => { this.setState({ isBrief: false }) }}
            >
              <Text>目录</Text>
            </TouchableOpacity>
          </View>
          <View>
            {
              this.state.isBrief ? <BriefContent brief={book.brief}></BriefContent> : <MenuContent navigation={navigation} book={book}></MenuContent>
            }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  tabBarIcom: {
    width: 21,
    height: 21
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: pxSize(375),
    height: pxSize(80),
    borderBottomWidth: 1
  }
})