import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  View,
  LayoutAnimation,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import CartProduct from './../components/CartProduct';

export default class CartPage extends Component {
  static navigatorStyle = {
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        navBarButtonColor: 'black'
      },
      android: {
        navBarColor: 'black',
        navBarBackgroundColor: '#181818',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light'
      }
    }),
    screenBackgroundColor: '#0D0D0D'
  };
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../img/icons/heart_evil.png'),
      id: 'whishlist'
    }]
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = { data: { checked: true } };
    this.props.navigator.setTabBadge({
      tabIndex: 2, 
      badge: 9
    });
  }
  // componentWillUpdate() {
  //   LayoutAnimation.easeInEaseOut();
  // }

  onClick(data) {
      this.setState({ data: { checked: !data.checked } });
  }

  onNavigatorEvent(event) {
    if (event.id === 'whishlist') {
      this.props.navigator.push({
        screen: 'expose.WhishListPage',
        title: 'Whish List',
        backButtonHidden: true,
        navigatorStyle: {
          tabBarHidden: true
        }
      });
    } 
  }
  onBuy() {
    this.props.navigator.push({
        screen: 'expose.CheckoutPage',
        title: 'Check Out',
        navigatorStyle: {
          tabBarHidden: true
        }
      });
  }

  render() {
    const { styleCheckbox, linearGradient, styleBuyText, styleTotalPrice, styleTotalText, footerContainer, buyContainer, scrollWiewContainer } = styles;
    const { data } = this.state;
    return (
      <View style={styles.container} >
        <ScrollView style={scrollWiewContainer} showsVerticalScrollIndicator={false} >
            <CartProduct navigator={this.props.navigator} />
        </ScrollView>
        <View style={footerContainer} >
          <CheckBox
             style={styleCheckbox}
             onClick={() => this.onClick(data)}
             isChecked={data.checked}
             checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 24, width: 24 }} />}
             unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 24, width: 24 }} />}
             rightText='Select All'
             rightTextStyle={{ color: 'white', fontSize: 14, marginLeft: 5 }}
          />
          <View style={{ flex: 3, flexDirection: 'row', alignSelf: 'flex-end', }} >
            
            <Text style={styleTotalText} >Total: </Text>
            <Text style={styleTotalPrice} numberOfLines={1} >¥ 0</Text>
            <TouchableOpacity style={buyContainer} onPress={this.onBuy.bind(this)} >
              <LinearGradient 
                colors={['#fe8c00', '#f83600']} 
                style={linearGradient}
                start={{ x: 0.1, y: 0.1 }} end={{ x: 1, y: 0.1 }}
              >
                  <Text style={styleBuyText} numberOfLines={1} >Buy (2)</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollWiewContainer: {
    backgroundColor: '#0D0D0D',
    ...Platform.select({
      ios: {
        paddingTop: 64,
        // marginBottom: 45,
        // paddingBottom: 400
      }
    })
  },
  container: {
    flex: 1,
    // paddingBottom: 5446,
    backgroundColor: '#0D0D0D',
    ...Platform.select({
      ios: {
        // marginTop: 64,
        paddingBottom: 46,
      }
    })
  },
  styleCheckbox: {
    flex: 1,
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center', 
    width: 94
  },
  styleBuyText: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'rgba(100,100,100,0)',
    fontSize: 25,
    fontWeight: '300'
  },
  styleTotalPrice: {
    color: '#f60',
    alignSelf: 'center',
    // justifyContent: 'flex-end',
    fontWeight: '700',
    fontSize: 23,
    // flex: 1
  },
  styleTotalText: {
    color: 'gray', 
    alignSelf: 'center',
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 19,
    // alignItems: 'flex-end',
    // flex: 1
  }, 
  footerContainer: {
    flexDirection: 'row',
    // paddingTop: 145,
    // flex: 1
  },
  buyContainer: {
    flex: 1,
    height: 45,
    marginLeft: 8,
    alignItems: 'flex-end',

  }
});

