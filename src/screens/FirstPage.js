import React, { Component } from 'react';
// import { 
//   Container,
//   Button,
//   Header,
//   Left, 
//   Body, 
//   Title, 
//   Right, 
//   Icon, 
//   Content, 
//   Footer, 
//   FooterTab, 
//   Form, Item, Label, Input
//   } from 'native-base';
  // import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const navigatorStyle = {
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTranslucent: true,
  };
export default class FirstPage extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = { test: 'First Page' };
  }

  render() {
    return (
      <View style={styles.container} >
         <Text>page 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

