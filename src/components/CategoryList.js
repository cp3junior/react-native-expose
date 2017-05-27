import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CategoryList extends Component {
  render() {
    const { headerContainer, textStyle, iconStyle } = styles;//object destructuring in ES6
    const { name, number, onPress } = this.props;

    return (
        <TouchableOpacity onPress={onPress} >
          <View style={headerContainer} >
              <Text style={textStyle} > {name} ({number}) </Text>
              <Icon name="chevron-right" size={25} color="gray" style={iconStyle} />
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#171717',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128,128,128,0.1)',
    flexDirection: 'row',
    flex: 1
  },
  textStyle: {
    fontSize: 22,
    color: 'white',

  },
  iconStyle: {
    textAlign: 'right',
    flex: 1,
    marginRight: 10
  }
});

