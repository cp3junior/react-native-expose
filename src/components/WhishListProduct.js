import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class WhishListProduct extends Component {
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
    const { headerContainer, titleStyle, priceStyle, imageProduct, moveCartText } = styles;
    const { onPress } = this.props;
    const Content = products.map((data, i) => {
      return (
        <TouchableOpacity key={i} style={headerContainer} onPress={this.onPress.bind(this)} >
          <Image style={imageProduct} source={data.image} />
          <View style={{ width: '71%' }} >
            <Text style={priceStyle} > ¥ {data.price} </Text>
            <Text style={titleStyle} numberOfLines={2} >{data.name}</Text>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-end' }} >
              <TouchableOpacity>
                <Text style={moveCartText} >Move To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'flex-end', flex: 1 }} >
                  <Icon name="trash" size={32} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return Content;
  }

  render() {
    const { container } = styles;
    return (
      <View style={container} >
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#171717',
    alignSelf: 'center', //life saver :p
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    width: '99%',
    borderRadius: 3,
    marginTop: 4,
    marginRight: 0,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    flexWrap: 'wrap',
    height: null,
    flexDirection: 'row',
  },
  titleStyle: {
    marginTop: 0,
    marginLeft: 8,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 19,
    color: '#ecf0f1',
    alignSelf: 'flex-start'
  },
  priceStyle: {
    fontSize: 24,
    color: 'rgba(255,94,35,0.8)',
    marginLeft: 3,
    marginTop: 1,
    fontWeight: 'bold',
  },
  imageProduct: {
    width: '29%',
    height: 110,
  },
  container: {
    marginLeft: 5, 
    marginRight: 5, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  },
  moveCartText: {
    color: '#2ecc71',
    fontWeight: 'bold',
    fontSize: 21,
    marginLeft: 5,
    marginBottom: 3,
  }
});

