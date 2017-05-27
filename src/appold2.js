import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/FontAwesome';
// screen related book keeping
import { registerScreens } from './screens';

registerScreens();

const createTabs = (state) => {
  // static navigatorStyle = {
  //   drawUnderNavBar: true,
  //   drawUnderTabBar: true,
  //   navBarTranslucent: true
  // };
  // state = { userIcon: ' ' };
  this.setState({ userIcon: 'dsd' });
  // debugger;
  // var ab = {};
  console.log(this.state.userIcon);
  getImageSource('md-arrow-back', 30).then((source) => this.setState({ userIcon: source }));
  // Icon.getImageSource('user', 20, 'red').then((source) => ab = source);
  // getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
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
//    screen: 'expose.FirstPage',
//    title: 'Navigation shja',
//    navigatorStyle: {
//      drawUnderNavBar: true,
//     drawUnderTabBar: true,
//     navBarTranslucent: true
//    }
//  },
//  drawer: {
//    left: {
//      screen: 'expose.SecondPage'
//    }
//  }
// });
