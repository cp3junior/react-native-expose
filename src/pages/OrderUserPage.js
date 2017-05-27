import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import WhishListProduct from './../components/WhishListProduct';
import ProductCardCheckout from './../components/ProductCardCheckout';


export default class OrderUserPage extends Component {
  static navigatorStyle = {
	navBarButtonColor: '#ff5e23',
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
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
  
    this.state = { direction: 'column', opened: false };
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { container, icon } = styles;
    const { pageInit } = this.props;
    return (
		<View style={container} >
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar style={{ backgroundColor: '#171717', borderBottomWidth: 0 }} />}
				initialPage={pageInit}
				tabBarActiveTextColor='#ff5e23'
				tabBarInactiveTextColor='white'
				tabBarTextStyle={{ fontSize: 17 }}
				tabBarUnderlineStyle={{ borderRadius: 30, backgroundColor: '#ff5e23', height: 2 }}
			>
				<ScrollView tabLabel='My Wish List'>
					<WhishListProduct navigator={this.props.navigator} />
          <WhishListProduct navigator={this.props.navigator} />
				</ScrollView>
				<ScrollView tabLabel='My Orders'>
          <ProductCardCheckout navigator={this.props.navigator} />
					<ProductCardCheckout navigator={this.props.navigator} />
				</ScrollView>
				<ScrollView tabLabel='Track Orders'>
					<Icon name='logo-android' color='#A4C639' size={300} style={icon} />
					<Icon name='logo-android' color='red' size={300} style={icon} />
					<Icon name='logo-android' color='brown' size={300} style={icon} />
				</ScrollView>
			</ScrollableTabView>
		</View>
    );
  }
  
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	...Platform.select({
      ios: {
        paddingTop: 64,
        backgroundColor: '#0D0D0D'
      },
      android: {
        backgroundColor: '#0D0D0D'
      }
    })
	},
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});

