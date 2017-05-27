import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  View,
  Dimensions
} from 'react-native';
import WhishListProduct from './../components/WhishListProduct';

export default class WhishListPage extends Component {
  static navigatorStyle = {
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        navBarButtonColor: '#ff5e23',
      },
      android: {
        navBarColor: 'black',
        navBarBackgroundColor: '#181818',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light',
        navBarButtonColor: '#ff5e23',
      }
    }),
    screenBackgroundColor: '#0D0D0D'
  };
  static navigatorButtons = {
    rightButtons: [{
      title: 'Done',
      id: 'closeWhishList'
    }]
  };
  constructor(props) {
    super(props);
    this.state = { test: 'First Page' };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
    if (event.id === 'closeWhishList') {
      this.props.navigator.pop();
    }
  }
  onProduct() {

  }
            // <Text style={styles.welcome}>Whish List</Text>
            // <Text 
            //   style={styles.instructions} 
            // >
            //   You don't currently have anything in your Wish List.
            // </Text>

  render() {
    const ScreenHeight = Dimensions.get('window').height;
    return (
        <ScrollView style={{ height: ScreenHeight, backgroundColor: '#0D0D0D' }} showsVerticalScrollIndicator={false}  >
          <View style={styles.container}>
            <WhishListProduct navigator={this.props.navigator}/>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0D0D0D',
    ...Platform.select({
      ios: {
        paddingTop: 64
      }
    })
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'gray',
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5,
    fontSize: 17,
    flex: 1
  }
});

