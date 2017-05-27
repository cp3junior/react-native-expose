import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
import Spinner from 'rn-spinner';

export default class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { products: require('../data/productLess'), data: { checked: true }, nbr: 1 };
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
    const { headerContainer, titleStyle, priceStyle, imageProduct, spinnerStyle, styleCheckBox, detailStyle } = styles;

    const Content = products.map((data, i) => {

      // this.setState({ nbr: data.nbr });
      return (
        <TouchableOpacity key={i} style={headerContainer} onPress={this.onPress.bind(this)} >
          <CheckBox
             style={styleCheckBox}
             onClick={() => this.onClick(data)}
             isChecked={data.checked}
             checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 24, width: 24 }} />}
             unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 24, width: 24 }} />}
          />
          <Image style={imageProduct} source={data.image} />
          <View style={{ width: '61%' }} >
            <Text style={titleStyle} numberOfLines={1} >{data.name}</Text>
            <Text style={detailStyle} numberOfLines={1} >Black, 32GB</Text>
            <Text style={priceStyle} > ¥ {data.price} </Text>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-end' }} >
              <View style={spinnerStyle} >
                <Spinner 
                    max={500}
                    min={1}
                    default={data.nbr}
                    color="rgba(255,94,35,1)"
                    numColor="#f60"
                    showBorder={false}
                    btnFontSize={21}
                    fontSize={20}
                    height={27}
                    width={80}
                    onNumChange={(num) => { console.log(num); }}
                />
              </View>
              <TouchableOpacity style={{ alignItems: 'flex-end', flex: 1, marginBottom: 6 }} >
                  <EvilIcons name="trash" size={27} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return Content;
  }

  render() {
    const { container, mainCartContainer, styleSellerName, chatStyle, headerCartItem } = styles;
    const { data } = this.state;
    return (
      <View style={container} >
        <View style={mainCartContainer} >
          <View style={headerCartItem} >
            <CheckBox
               style={{ padding: 5 }}
               onClick={() => this.onClick(data)}
               isChecked={data.checked}
               checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 24, width: 24 }} />}
               unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 24, width: 24 }} />}
            />
            <Entypo name="shop" size={21} color="orange" style={{ paddingTop: 2 }} />
            <Text style={styleSellerName} numberOfLines={1} >Seller's Name </Text>
            <TouchableOpacity style={chatStyle} >
              <FontAwesome name="wechat" size={21} color="#2DC100" />
            </TouchableOpacity>
          </View>
          {this.renderContent()}
        </View>  
        <View style={mainCartContainer} >
          <View style={headerCartItem} >
            <CheckBox
               style={{ padding: 5 }}
               onClick={() => this.onClick(data)}
               isChecked={data.checked}
               checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 24, width: 24 }} />}
               unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 24, width: 24 }} />}
            />
            <Entypo name="shop" size={21} color="orange" style={{ paddingTop: 2 }} />
            <Text style={styleSellerName} numberOfLines={1} >Seller's Name </Text>
            <TouchableOpacity style={chatStyle} >
              <FontAwesome name="wechat" size={21} color="#2DC100" />
            </TouchableOpacity>
          </View>
          {this.renderContent()}
        </View>  
        <View style={mainCartContainer} >
          <View style={headerCartItem} >
            <CheckBox
               style={{ padding: 5 }}
               onClick={() => this.onClick(data)}
               isChecked={data.checked}
               checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 24, width: 24 }} />}
               unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 24, width: 24 }} />}
            />
            <Entypo name="shop" size={21} color="orange" style={{ paddingTop: 2 }} />
            <Text style={styleSellerName} numberOfLines={1} >Seller's Name </Text>
            <TouchableOpacity style={chatStyle} >
              <FontAwesome name="wechat" size={21} color="#2DC100" />
            </TouchableOpacity>
          </View>
          {this.renderContent()}
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#111111',
    alignSelf: 'center', //life saver :p
    paddingRight: 5,
    width: '98%',
    borderRadius: 3,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    flexDirection: 'row',
  },
  styleCheckBox: {
    alignSelf: 'center',
    paddingLeft: 8,
    paddingRight: 6

  },
  titleStyle: {
    marginTop: 3,
    marginLeft: 8,
    marginRight: 5,
    marginBottom: 2,
    fontSize: 19,
    color: '#ecf0f1',
    alignSelf: 'flex-start'
  },
  detailStyle: {
    color: 'gray',
    marginLeft: 8,
    fontSize: 15
  },
  priceStyle: {
    fontSize: 28,
    color: '#f60',
    marginLeft: 3,
    marginTop: 1,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  imageProduct: {
    width: '29%',
    height: 110,
  },
  container: {
    marginLeft: 5, 
    marginRight: 5, 
    // flexWrap: 'wrap', 
  },
  spinnerStyle: {
    marginLeft: 8,
    marginBottom: 5,
  },
  headerCartItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainCartContainer: {
    backgroundColor: '#171717',
    borderColor: '#2d2d2d',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 1,
    marginBottom: 3
  },
  styleSellerName: {
    color: 'white',
    fontSize: 22,
    marginLeft: 5,
    width: '55%'
  },
  chatStyle: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10
  }
});

