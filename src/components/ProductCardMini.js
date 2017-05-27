import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

export default class ProductCardMini extends Component {
  constructor(props) {
    super(props);
    this.state = { products: require('../data/products') };
  }
  onPress() {
    this.props.navigator.push({
      screen: 'expose.ProductPage',
      title: 'Product',
      animated: true,
      disabledBackGesture: false,
      // backButtonTitle: 'Back',
      // backButtonHidden: false,
      backgroundColor: '#0D0D0D',
      navigatorStyle: {
        disabledBackGesture: false,
        tabBarHidden: true,
        navBarHidden: true,
      }
    });
  }
  renderContent() {
    const { products } = this.state;
    const Content = products.map((data, i) => {
    const { headerContainer, titleStyle, priceStyle, imageProduct } = styles;
      return (
        <TouchableOpacity key={i} style={headerContainer} onPress={this.onPress.bind(this)} >
          <Image style={imageProduct} source={data.image} />
          <Text style={titleStyle} numberOfLines={1} >{data.name}</Text>
          <Text style={priceStyle} > ¥ {data.price} </Text>
        </TouchableOpacity>
      );
    });
    return Content;
  }
  render() {
    return (
      <ScrollView horizontal style={{ marginLeft: 5, marginRight: 5 }} showsHorizontalScrollIndicator={false} >
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#171717',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 5,
    width: 110,
    borderRadius: 3,
    marginTop: 3,
    marginRight: 7,
    borderColor: '#2d2d2d',
    borderWidth: 1,
  },
  titleStyle: {
    marginTop: 5,
    marginLeft: 4,
    marginRight: 5,
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-start'
  },
  priceStyle: {
    fontSize: 16,
    color: 'rgba(255,94,35,0.8)',
    marginLeft: 1,
    marginRight: 2,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  imageProduct: {
    width: 100,
    height: 95
  }
});

