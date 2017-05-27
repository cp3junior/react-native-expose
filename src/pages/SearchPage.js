import React, { Component } from 'react';
import { Platform, View, LayoutAnimation } from 'react-native';
import SearchBar from '../components/SearchBar';

export default class SearchPage extends Component {
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
    screenBackgroundColor: '#0D0D0D',
  };
  
  constructor(props) {
    super(props);
    this.state = { test: 'First Page', text: 'Useless Placeholder' };
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onClose() {
    this.props.navigator.pop();
  }

  render() {
    // const { headerContainer, textStyle, buttonStyle } = styles;
    // const ScreenHeight = Dimensions.get('window').height;
    return (
        <View >
          <SearchBar onCloseSearch={this.onClose.bind(this)} navigator={this.props.navigator} />
        </View>
      
    );
  }
}

