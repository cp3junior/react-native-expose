import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { products: require('../data/products'), data: { checked: true } };
  }
  
  onClick(data) {
      this.setState({ data: { checked: !data.checked } });
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
    const { headerContainer, titleStyle, priceStyle, imageProduct, styleCheckBox } = styles;
    const Content = products.map((data, i) => {
      return (
        <TouchableOpacity key={i} style={headerContainer} onPress={this.onPress.bind(this)} >
          <Image style={imageProduct} source={data.image} />
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }} >
            <View style={{ flex: 1 }} >
              <Text style={titleStyle} numberOfLines={1} >{data.name} </Text>
              <Text style={priceStyle} > ¥ {data.price} </Text>
            </View>
            <View>
              <CheckBox
               style={styleCheckBox}
               onClick={() => this.onClick(data)}
               isChecked={data.checked}
               checkedImage={<Image source={require('./../img/icons/heart_full.png')} style={{ height: 24, width: 24 }} />}
               unCheckedImage={<Image source={require('./../img/icons/heart_empty.png')} style={{ height: 24, width: 24 }} />}
              /> 
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
    alignItems: 'center',
    alignSelf: 'center', //life saver :p
    paddingTop: 2,
    paddingBottom: 5,
    width: '49%',
    borderRadius: 3,
    marginTop: 5,
    marginRight: 0,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    flexWrap: 'wrap',
    height: null,
    position: 'relative'
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
    width: '96%',
    height: 180,
  },
  styleCheckBox: {
    marginRight: 5
  },
  container: {
    marginLeft: 5, 
    marginRight: 5, 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  }
});

