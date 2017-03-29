import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Header extends Component {
  render() {
    const { headerContainer, textStyle } = styles;//object destructuring in ES6
    const { title } = this.props;

    return (
      <View style={headerContainer} >
        <Text style={textStyle} > {title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FEFEFE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { with: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
});

