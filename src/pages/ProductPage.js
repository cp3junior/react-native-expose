import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated 
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';
import Modal from 'react-native-modalbox';
import UserAvatar from 'react-native-user-avatar';
import ProductCard from '../components/ProductCard';
import Header from './ProductPage/Header';

let screen = Dimensions.get('window');

export default class ProductPage extends Component {
  static navigatorStyle = {
	navBarButtonColor: '#ff5e23',
  disabledBackGesture: false,
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        disabledBackGesture: false,
      },
      android: {
        navBarColor: 'black',
        navBarBackgroundColor: '#181818',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light'
      }
    }),
    screenBackgroundColor: '#0D0D0D',
  };
  constructor(props) {
    super(props);
  
    this.state = { 
      data: { checked: true }, 
      moreItem: 0,
      detailItem: 0,
      reviewItem: 0,
      showAllReviews: false,
      scrollY: new Animated.Value(0)
    };
    // this.state.scrollY.addListener(({ value }) => (this._value = value));
  }
  componentDidMount() {
      setTimeout(this.measureView.bind(this));     
    }
  onClick(data) {
      this.setState({ data: { checked: !data.checked } });
  }
  onBack() {
    this.props.navigator.pop();
  }
  onBuy() {
    // this.refs.scrollView.scrollTo({ y: this.state.reviewPosition });
    this.refs.modal6.open();
  }
  measureView() {
    this.refs.moreItem.measure((fx, fy, width, height, px, py) => {
        this.setState({
          moreItem: py
        });
    }); 
    this.refs.reviewItem.measure((fx, fy, width, height, px, py) => {
        this.setState({
          reviewItem: py
        });
    }); 
    this.refs.detailItem.measure((fx, fy, width, height, px, py) => {
        this.setState({
          detailItem: py
        });
    });    
  }
  renderList() {
    var list = [];

    for (var i=0;i<2;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
}

  render() {
    const { container, 
      footerContainer, 
      linearGradient, styleBuyText, 
      iconStyle, infoTopStyle, 
      infoTopTopText, infoTopBottomText, 
      separatorStyle, textLatest } = styles;
    const { data } = this.state;

    return (
      <View style={{ flex: 1 }} >
        <Animated.ScrollView 
          style={container} 
          ref='scrollView' 
          showsVerticalScrollIndicator={false} 
          scrollEventThrottle={16} 
          onScroll={
            Animated.event([{
              nativeEvent: { contentOffset: { y: this.state.scrollY } }
            }], {
              useNativeDriver: true
            })
          }
        >
          <ImageSlider 
              height={320}
              images={[
              require('../img/products/product1.jpg'),
              require('../img/products/product2.jpg'),
              require('../img/products/product3.jpg'),
              require('../img/products/product4.jpg'),
              require('../img/products/product5.jpg')
              ]}
          />
          <View style={{ marginLeft: 5, marginTop: 6, marginRight: 10 }} >
            <Text numberOfLines={2} style={{ color: 'white', fontSize: 22, marginBottom: 2 }} >iPhone 7</Text>
            <Text numberOfLines={1} style={{ color: 'rgba(255,94,35,0.8)', fontSize: 30, fontWeight: 'bold' }}>¥ 5000 </Text>
          </View>
          <View style={infoTopStyle}>
            <View ref='reviewSection'>
              <Text style={infoTopTopText} >10</Text>
              <Text style={infoTopBottomText}>Reviews</Text>
            </View>
            <View>
              <Text style={infoTopTopText} >2</Text>
              <Text style={infoTopBottomText}>Orders</Text>
            </View>
            <View>
              <Text style={infoTopTopText} >9</Text>
              <Text style={infoTopBottomText}>Whish List</Text>
            </View>
          </View>
          <View style={separatorStyle} />
          <View ref='detailItem'>
            <Text style={[textLatest, { textAlign: 'center', marginTop: 7 }]} >Item Details</Text>
            <View style={{ marginLeft: 15, marginRight: 15, marginTop: 5 }}>
              <View style={{ flexDirection: 'row', flex: 1, marginBottom: 3 }} >
                <Text style={{ color: 'gray', flex: 2, fontSize: 18 }} >Material </Text>
                <Text style={{ color: 'white', flex: 4, fontSize: 18, marginLeft: 5 }} >Steel</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1, marginBottom: 3 }} >
                <Text style={{ color: 'gray', flex: 2, fontSize: 18 }} >Year </Text>
                <Text style={{ color: 'white', flex: 4, fontSize: 18, marginLeft: 5 }} >2017</Text>
              </View>
            </View>
            <Text style={{ color: 'gray', textAlign: 'center', marginTop: 5, marginBottom: 3, opacity: 0.7 }} >
              Image details
            </Text>
            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}>
              <Image style={{ width: '100%' }} source={require('./../img/slides/pay2.jpg')} />
              <Image style={{ width: '100%' }} source={require('./../img/products/product1.jpg')} />
              <Image style={{ width: '100%' }} source={require('./../img/slides/pay1.jpg')} />
            </View>
          </View>
          <View style={separatorStyle} />
          <View ref='reviewItem'>
            <Text style={[textLatest, { textAlign: 'center', marginTop: 7 }]} >Reviews(3)</Text>
            <View>
              <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }} >
                <View style={{ paddingRight: 5, flex: 1 }} >
                  <UserAvatar size="50" name='John Doaa' />
                </View>
                <View style={{ flex: 5 }} >
                  <View style={{ flexDirection: 'row', }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} >J***a</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, opacity: 0.8, flexDirection: 'row' }} >
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                    </View>       
                  </View>
                  <View>
                    <Text numberOfLines={2} style={{ flex: 1, color: 'gray' }} >lore dsdjksjdks djks dksjdksj dks j hj hjkhjk hj hjhjkhj hjkhkjh jkh jkh</Text>  
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }} >
                <View style={{ paddingRight: 5, flex: 1 }} >
                  <UserAvatar size="50" name='John Doaa' />
                </View>
                <View style={{ flex: 5 }} >
                  <View style={{ flexDirection: 'row', }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} >J***a</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, opacity: 0.8, flexDirection: 'row' }} >
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                    </View>         
                  </View>
                  <View>
                    <Text numberOfLines={2} style={{ flex: 1, color: 'gray' }} >lore dsdjksjdks djks dksjdksj dks j hj hjkhjk hj hjhjkhj hjkhkjh jkh jkh</Text>  
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }} >
                <View style={{ paddingRight: 5, flex: 1 }} >
                  <UserAvatar size="50" name='John Doaa' />
                </View>
                <View style={{ flex: 5 }} >
                  <View style={{ flexDirection: 'row', }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} >J***a</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, opacity: 0.8, flexDirection: 'row' }} >
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                    </View>         
                  </View>
                  <View>
                    <Text numberOfLines={2} style={{ flex: 1, color: 'gray' }} >lore dsdjksjdks djks dksjdksj dks j hj hjkhjk hj hjhjkhj hjkhkjh jkh jkh</Text>  
                  </View>
                </View>
              </View>
              { this.state.showAllReviews && <View>
               <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }} >
                <View style={{ paddingRight: 5, flex: 1 }} >
                  <UserAvatar size="50" name='John Doaa' />
                </View>
                <View style={{ flex: 5 }} >
                  <View style={{ flexDirection: 'row', }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} >J***a</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, opacity: 0.8, flexDirection: 'row' }} >
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                    </View>         
                  </View>
                  <View>
                    <Text numberOfLines={2} style={{ flex: 1, color: 'gray' }} >lore dsdjksjdks djks dksjdksj dks j hj hjkhjk hj hjhjkhj hjkhkjh jkh jkh</Text>  
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, flexDirection: 'row' }} >
                <View style={{ paddingRight: 5, flex: 1 }} >
                  <UserAvatar size="50" name='John Doaa' />
                </View>
                <View style={{ flex: 5 }} >
                  <View style={{ flexDirection: 'row', }} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }} >J***a</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 5, opacity: 0.8, flexDirection: 'row' }} >
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star' color='yellow' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                      <Entypo name='star-outlined' color='gray' size={15} />
                    </View>         
                  </View>
                  <View>
                    <Text numberOfLines={2} style={{ flex: 1, color: 'gray' }} >lore dsdjksjdks djks dksjdksj dks j hj hjkhjk hj hjhjkhj hjkhkjh jkh jkh</Text>  
                  </View>
                </View>
              </View>
              </View>
            }
            </View>
            <TouchableOpacity onPress={() => { this.setState({ showAllReviews: !this.state.showAllReviews }); }} >
              <Text style={{ color: 'white', textAlign: 'center' }} >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={separatorStyle} />
          <View ref='moreItem'>
            <Text style={[textLatest, { textAlign: 'center', marginTop: 7 }]} >Recommended</Text>
          </View>
          <View style={{ marginBottom: 1, marginTop: 2, marginRight: 0, marginLeft: 3 }} >
            <ProductCard navigator={this.props.navigator} />
          </View>
        </Animated.ScrollView>
        <Header
          navigator={this.props.navigator}
          scrollY={this.state.scrollY}
          scrollView={this.refs.scrollView}
          moreItem={this.state.moreItem}
          reviewItem={this.state.reviewItem}
          detailItem={this.state.detailItem}
        />
         

        <View style={footerContainer} >
          <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-between', alignItems: 'center', marginLeft: 8, marginRight: 10 }} >
            <TouchableOpacity style={iconStyle} >
              <FontAwesome name="wechat" size={26} color="#2DC100" />
            </TouchableOpacity>
            <TouchableOpacity style={iconStyle}>
              <Entypo name="shop" size={28} color="orange" style={{ paddingTop: 2 }} />
            </TouchableOpacity>
              <CheckBox
               onClick={() => this.onClick(data)}
               isChecked={data.checked}
               checkedImage={<Image source={require('./../img/icons/heart_full.png')} style={{ height: 24, width: 24 }} />}
               unCheckedImage={<Image source={require('./../img/icons/heart_empty.png')} style={{ height: 24, width: 24 }} />}
              /> 
          </View>
          <View style={{ flexDirection: 'row', flex: 4, justifyContent: 'flex-end' }}>
          <TouchableOpacity >
            <LinearGradient 
              colors={['#FFD200', '#F7971E']} 
              style={[linearGradient, { width: 150 }]}
              start={{ x: 0.1, y: 0.1 }} end={{ x: 1, y: 0.1 }}
            >
                <Text style={styleBuyText} numberOfLines={1} >Add To Cart</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onBuy.bind(this)} >
            <LinearGradient 
            style={linearGradient}
              colors={['#F16529', '#E44D26']} 
              start={{ x: 0.1, y: 0.1 }} end={{ x: 1, y: 0.1 }}
            >
                <Text style={styleBuyText} numberOfLines={1} >Buy</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
        <Modal style={[styles.modal, styles.modal4]} position={'bottom'} ref={'modal6'} swipeArea={20}>
          <ScrollView>
            <View style={{ width: screen.width, paddingLeft: 10 }}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal4: {
    height: screen.height * 0.68
  },
  separatorStyle: {
    backgroundColor: 'gray',
    flex: 1,
    height: 1,
    marginTop: 15,
    opacity: 0.2,
    marginRight: 20,
    marginLeft: 20
  },
  infoTopTopText: {
    color: 'gray', 
    fontSize: 24, 
    textAlign: 'center'
  },
  infoTopBottomText: {
    color: 'gray', 
    fontSize: 16
  },
  infoTopStyle: {
    flexDirection: 'row', 
    marginTop: 5, 
    marginLeft: 20, 
    marginRight: 20, 
    justifyContent: 'space-between'
  },
  iconStyle: {
    marginTop: 5,
    marginBottom: 5
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center', 
    width: 83
  },
  styleBuyText: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'rgba(100,100,100,0)',
    fontSize: 25,
    fontWeight: '400'
  },
  footerContainer: {
    backgroundColor: '#171717',
    flexDirection: 'row',
  },  
	container: {
    backgroundColor: '#0D0D0D'
	},
  textLatest: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5
  },
  containerHead: {
    position: 'absolute',
    width: '100%'
  },

  
});

