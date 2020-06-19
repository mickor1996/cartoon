import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ListView } from '@ant-design/react-native'
import pxSize from '../../assets/js/pxSize'

export default class ListViewCom extends React.Component {
  state = {
    layout: 'list',
    imgPath: 'http://10.0.2.2:3000/img/bookimg/'
  }
  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageLimit = 20
      let rowData = []
      let httpUrl = `http://10.0.2.2:3000/indexList?page=${page}`
      let res = await fetch(httpUrl)
      rowData = await res.json()
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch()
    }
  }

  renderItem = (item) => {
    let imgUrl = this.state.imgPath + item.imgInfo.imgid + '.jpg'
    // console.log(item)
    let { navigation } = this.props
    return (
      <TouchableOpacity style={[styles.flewRow, { marginTop: 10 }]} onPress={() => { navigation.navigate('Brief', { book: item }) }}>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ width: pxSize(300), height: pxSize(400) }} resizeMode="contain" source={{ uri: imgUrl }}></Image>
          <View style={{ width: '100%', padding: 10 }}>
            <Text style={styles.title}>{item.bookTitle}</Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.brief}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, index) => `${this.state.layout} - ${item} - ${index}`
        }
        renderItem={this.renderItem}
        numColumns={2}></ListView>
    )
  }
}

let styles = StyleSheet.create({
  flewRow: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3
  }
})

