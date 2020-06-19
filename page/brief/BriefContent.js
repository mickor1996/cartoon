import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'


export default class BriefContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.brief}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 50
  },
})