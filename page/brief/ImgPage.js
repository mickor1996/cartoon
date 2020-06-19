import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import pxSize from '../../assets/js/pxSize'
export default class BriefPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgPath: 'http://10.0.2.2:3000/img/articleImg/',
      isBrief: true
    }
  }
  render() {
    let { navigation } = this.props
    let book = navigation.state.params.book
    let article = navigation.state.params.article
    let index = navigation.state.params.index
    let articleList = navigation.state.params.articleList
    let preArticle = null
    let nextArticle = null
    if (index > 0) {
      preArticle = navigation.state.params.articleList[index - 1]
    }
    if (index != (articleList.length - 1)) {
      nextArticle = navigation.state.params.articleList[index + 1]
    }
    return (
      <View style={styles.container}>
        <View style={{ width: pxSize(750), justifyContent: 'center', height: pxSize(100), borderColor: "#ccc", borderBottomWidth: 1, borderStyle: "solid" }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', paddingHorizontal: 10 }}
            onPress={() => { navigation.goBack() }}
          >
            <Text>&lt;返回</Text>
            <Text>&nbsp;{book.bookTitle}-{article.articleNum}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            article.imgListId.map((item, i) => {
              let imgUrl = this.state.imgPath + item + '.jpg'
              return (
                <Image key={i} resizeMethod="auto" style={{ width: pxSize(750), height: pxSize(750 / 800 * 1133) }} source={{ uri: imgUrl }}></Image>
              )
            })
          }
        </ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {
              preArticle ? (
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => { navigation.navigate('ImgPage', { book: book, article: preArticle, index: index - 1, articleList: articleList }) }}
                >
                  <Text
                    style={{ padding: 10 }}
                  >上一话</Text>
                </TouchableOpacity>) : <></>
            }
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => { navigation.navigate('BottomNavigator') }}
            >
              <Text style={{ padding: 10, }}>回到首页</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {
              nextArticle ? (
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => { navigation.navigate('ImgPage', { book: book, article: nextArticle, index: index + 1, articleList: articleList }) }}
                >
                  <Text style={{ padding: 10 }}>下一话</Text>
                </TouchableOpacity>) : <></>
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
    flexDirection: 'column',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: pxSize(375), height: pxSize(80), borderBottomWidth: 1
  }
});