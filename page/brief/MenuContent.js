import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ListView } from '@ant-design/react-native'

export default class MenuContent extends React.Component {
  state = {
    layout: 'list',
    imgPath: 'http://10.0.2.2:3000/img/bookimg',
    articleList: []
  }
  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageLimit = 20
      let rowData = []
      let httpUrl = `http://10.0.2.2:3000/articleList?bookTitle=${this.props.book.bookTitle}`
      let res = await fetch(httpUrl)
      rowData = await res.json()
      this.state.articleList = rowData
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch()
    }
  }

  renderItem = (item, index) => {
    let { navigation, book } = this.props

    return (
      <TouchableOpacity style={[styles.flexRow, { marginTop: 10 }]} onPress={() => { navigation.navigate('ImgPage', { book: book, article: item, index: index, articleList: this.state.articleList }) }}>
        <Text style={{ paddingHorizontal: 20, paddingVertical: 10, borderColor: '#000', borderWidth: 1, borderStyle: "solid" }}>
          {item.articleNum}

        </Text>
      </TouchableOpacity>
    )
  }


  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, index) => `${this.state.layout} - ${item} - ${index}`}
        renderItem={this.renderItem}
        numColumns={3}
      ></ListView>
    )
  }
}

let styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'column',
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3
  }
})