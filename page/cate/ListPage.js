import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ListViewCom from './ListViewCom'
import pxSize from '../../assets/js/pxSize'
export default class ListPage extends React.Component {



  render() {
    let { navigation } = this.props;
    let category = navigation.state.params.category;
    return (
      <View>
        <View style={{ width: pxSize(750), justifyContent: 'center', height: pxSize(100), borderColor: "#ccc", borderBottomWidth: 1, borderStyle: "solid" }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', paddingHorizontal: 10 }}
            onPress={() => { navigation.goBack() }}
          >
            <Text> &lt; 返回</Text>
            <Text> &nbsp; {category}</Text>
          </TouchableOpacity>
        </View>
        <ListViewCom navigation={navigation} category={category}></ListViewCom>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});