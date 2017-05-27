import React, { Component } from 'react';
import { 
  Container,
  Button,
  Header,
  Left, 
  Body, 
  Title, 
  Right, 
  Icon, 
  Content, 
  Footer, 
  FooterTab, 
  Form, Item, Label, Input
  } from 'native-base';
  // import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

export default class SecondPage extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTranslucent: true,
  };
  constructor(props) {
    super(props);
  
    this.state = { test: 'First Page' };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={{width: undefined, height: 100}} source={require('./../img/colors.png')} />

        <View >
           <Text style={styles.welcome}>
             SecondPage
           </Text>
           <Text style={styles.instructions}>
             To get started, edit index.ios.js
           </Text>
           <Text style={styles.instructions}>
             Press Cmd+R to reload,{'\n'}
             Cmd+D or shake for dev menu
           </Text>
         </View>
         </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

