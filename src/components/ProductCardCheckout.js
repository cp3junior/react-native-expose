import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image
} from 'react-native';

class ProductCardCheckout extends Component {
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
          <View>
	          <Text style={titleStyle} numberOfLines={1} >{data.name}</Text>
	          <Text style={titleStyle} numberOfLines={1} >32GB, Black</Text>
	          <View style={{ flexDirection: 'row' }} >
	          	<Text style={titleStyle} > X 2 </Text>
	          	<Text style={priceStyle} > ¥ {data.price} </Text>
	          </View>
          </View>
        </TouchableOpacity>
      );
    });
    return Content;
  }
  render() {
    return (
      <View style={{ marginLeft: 10, marginRight: 10 }} >
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#171717',
    // alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 5,
    width: '100%',
    borderRadius: 3,
    marginTop: 3,
    marginRight: 7,
    marginBottom: 5,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    flexDirection: 'row'
  },
  titleStyle: {
    // marginTop: 5,
    marginLeft: 4,
    marginRight: 5,
    fontSize: 21,
    color: 'gray',
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  priceStyle: {
    fontSize: 22,
    color: 'rgba(255,94,35,0.8)',
    marginLeft: 1,
    marginRight: 2,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  imageProduct: {
    width: 100,
    height: 95,
    margin: 3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ProductCardCheckout;
