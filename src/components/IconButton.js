import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = { products: require('../data/products'), data: { checked: true } };
  }
  
  onClick(data) {
      this.setState({ data: { checked: !data.checked } });
  }

  renderBadge(badge) {
    if (badge > 0) {
      const { badgeContainerStyle, badgeStyle } = styles;
      return (
        <View style={badgeContainerStyle} >
          <Text style={badgeStyle} >{badge}</Text>
        </View>
      );
    }
  }

  render() {
    const { categoryContainer, linearGradient, imageCategory, textCategory } = styles;
    const { name, image, colorGrad, onPress, badge } = this.props;
    return (
      <TouchableOpacity style={categoryContainer} onPress={onPress} >
        <LinearGradient 
          colors={colorGrad} 
          style={linearGradient}
          start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        >
          <Image style={imageCategory} source={image} />
        </LinearGradient>
        <Text style={textCategory} >{name}</Text>
        {this.renderBadge(badge)}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  badgeContainerStyle: {
    position: 'absolute',
    top: 1,
    right: 1,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
    flex: 1,
  },
  badgeStyle: {
    color: 'white',
    padding: 3,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  textCategory: {
    color: 'white',
    fontSize: 11
  },
  imageCategory: {
    width: 30, 
    height: 30
  },
  categoryContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  linearGradient: {
    width: 45,
    height: 45, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5
  },
});

