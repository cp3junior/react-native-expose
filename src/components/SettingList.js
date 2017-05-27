import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SettingList extends Component {
  render() {
    const { headerContainer, textStyle, iconStyle, textContainer } = styles;//object destructuring in ES6
    const { name, style, color, icon, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={headerContainer} >
          <Icon name={icon} size={28} color={color} style={{ alignSelf: 'center' }} />
          <View style={[textContainer, style]} >
            <Text style={textStyle} > {name} </Text>
            <Icon name="chevron-right" size={25} color="gray" style={iconStyle} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
      flexDirection: 'row', 
      flex: 1, 
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(128,128,128,0.1)',
      paddingTop: 7,
      paddingBottom: 4,
      marginLeft: 6
  },
  headerContainer: {
    backgroundColor: '#171717',
    paddingLeft: 15,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
    fontWeight: '300',
  },
  iconStyle: {
    textAlign: 'right',
    flex: 1,
    marginRight: 10
  }
});

