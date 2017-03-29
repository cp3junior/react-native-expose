import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/FontAwesome';
// screen related book keeping
import { registerScreens } from './screens';

registerScreens();

const createTabs = () => {
  this.state = { userIcon: ' ' };
  // debugger;
  // var ab = {};
  console.log(this.state.userIcon);
  // Icon.getImageSource('md-arrow-back', 30).then((source) => source);
  // Icon.getImageSource('user', 20, 'red').then((source) => ab = source);
  getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
  // setState({ userIcon: 'hhhds' });
  // ab = 'ddd';
  console.log(this.state.userIcon);

  const tabs = [
    {
      label: 'One',
      screen: 'expose.FirstPage',
      icon: this.state.userIcon,
      selectedIcon: this.state.userIcon,
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'expose.SecondPage',
      icon: this.state.userIcon,
      selectedIcon: this.state.userIcon,
      title: 'Screen Two',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];

  return tabs;
};
//this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  }
});
// Navigation.startSingleScreenApp({
//  screen: {
//    screen: 'example.FirstTabScreen',
//    title: 'Navigation',
//    navigatorStyle: {
//      navBarBackgroundColor: '#4dbce9',
//      navBarTextColor: '#ffff00',
//      navBarSubtitleTextColor: '#ff0000',
//      navBarButtonColor: '#ffffff',
//      statusBarTextColorScheme: 'light'
//    }
//  },
//  drawer: {
//    left: {
//      screen: 'example.SideMenu'
//    }
//  }
// });
