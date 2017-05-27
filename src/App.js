import { Component } from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerApp } from 'react-native-wechat';
import { registerPages } from './pages';
// import { iconsMap, iconsLoaded } from './getIcons';

registerPages();

const navigatorStyle = {
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        navBarButtonColor: '#ff5e23',
        navBarBackgroundColor: 'black',
        tabBarBackgroundColor: 'red',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light',

      },
      android: {
        navBarBackgroundColor: '#181818',
        navBarButtonColor: '#ff5e23',
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarTextColor: 'white'
      }
    }),
    screenBackgroundColor: '#0D0D0D',
  };

export default class App extends Component {

  constructor(props) {
    super(props);
      // iconsLoaded.then(() => {
      //   console.log(iconsMap['checkbox-blank-circle-outline']);
      // }); 
    this.startApp();
    registerApp('wxb24c445773822c79');
    console.disableYellowBox = true;
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'expose.HomePage',
          icon: require('./img/icons/home.png'),
          selectedIcon: require('./img/icons/home_selected.png'),
          title: 'Expose',
          navigatorStyle
        },
        {
          label: 'Messages',
          screen: 'expose.MessagePage',
          icon: require('./img/icons/message.png'),
          selectedIcon: require('./img/icons/message_selected.png'),
          title: 'Messages',
          navigatorStyle
        },
        {
          label: 'Cart',
          screen: 'expose.CartPage',
          icon: require('./img/icons/cart.png'),
          selectedIcon: require('./img/icons/cart_selected.png'),
          title: 'Cart',
          navigatorStyle
        },
        {
          label: 'User',
          screen: 'expose.UserPage',
          icon: require('./img/icons/user.png'),
          selectedIcon: require('./img/icons/user_selected.png'),
          title: 'User',
          navigatorStyle
        }
      ],
      appStyle: { //android
        forceTitlesDisplay: true,
        tabBarButtonColor: '#626262',
        tabBarSelectedButtonColor: '#ff5e23',
        tabBarBackgroundColor: 'black',
    },
      tabsStyle: { 
        tabBarButtonColor: '#626262',
        tabBarSelectedButtonColor: '#ff5e23',
        tabBarBackgroundColor: 'black',
        navBarBackgroundColor: 'black'
      },
      animationType: 'fade'

    });
  }
  startApp2() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'expose.UserPage',
        title: 'Navigation Bootstrap'
      }
    });
  }
}

