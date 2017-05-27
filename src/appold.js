'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class appold extends Component {
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({

});


export default appold;

// import React, { Component } from 'react';
// import { Navigation } from 'react-native-navigation';
// import { 
//   Container,
//   Button,
//   Text,
//   Header,
//   Left, 
//   Body, 
//   Title, 
//   Right, 
//   Icon, 
//   Content, 
//   Footer, 
//   FooterTab, 
//   Form, Item, Label, Input, ListItem
//   } from 'native-base';

// export default class App extends Component {
//   static navigatorStyle = {
//     drawUnderNavBar: true,
//     drawUnderTabBar: true,
//     navBarTranslucent: true,
//   };
//   constructor(props) {
//     super(props);
  
//     this.state = { test: 'Title' };
//   }

//   render() {
//     return (
//       <Container>
//           <Header>
//               <Left>
//                   <Button transparent >
//                       <Icon name='arrow-back' />
//                   </Button>
//               </Left>
//               <Body>
//                   <Title>{ this.state.test }</Title>
//               </Body>
//               <Right />
//           </Header>

//           <Content>
//               <Text>Content Goes here!</Text>
//               <Form>
//                             <Item floatingLabel>
//                                 <Label>Username</Label>
//                                 <Input />
//                             </Item>
//                             <Item floatingLabel last>
//                                 <Label>Password</Label>
//                                 <Input />
//                             </Item>
//                         </Form>
//                         <ListItem>
//                         <Text>Simon Mignolet</Text>
//                     </ListItem>
//                     <ListItem>
//                         <Text>Nathaniel Clyne</Text>
//                     </ListItem>
//                     <ListItem>
//                         <Text>Dejan Lovren</Text>
//                     </ListItem>
//                     <ListItem itemHeader first>
//                         <Text>COMEDY</Text>
//                     </ListItem>
//                     <ListItem >
//                         <Text>Hangover</Text>
//                     </ListItem>
//                     <ListItem>
//                         <Text>Horrible Bosses</Text>
//                     </ListItem>
//                     <ListItem last>
//                         <Text>Conjuring</Text>
//                     </ListItem>
//                     <ListItem itemHeader>
//                         <Text>ACTION</Text>
//                     </ListItem>
//                     <ListItem>
//                         <Text>Terminator Genesis</Text>
//                     </ListItem>
//           </Content>

//           <Footer>
//               <FooterTab>
//                   <Button>
//                       <Icon name="apps" />
//                       <Text>Apps</Text>
//                   </Button>
//                   <Button>
//                       <Icon name="camera" />
//                       <Text>Camera</Text>
//                   </Button>
//                   <Button active> 
//                       <Icon active name="navigate" />
//                       <Text>Navigate</Text>
//                   </Button>
//                   <Button>
//                       <Icon name="person" />
//                       <Text>Contact</Text>
//                   </Button>
//               </FooterTab>
//           </Footer>
//       </Container>
//     );
//   }
// }

import { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/FontAwesome';
// import { registerScreens } from './screens';
import { registerScreens } from './screens';


const navigatorStyle = {
  statusBarColor: '#831d19',
  navigationBarColor: '#339999',
  navBarBackgroundColor: '#339999',
  navBarTextColor: '#ffffff',
  navBarButtonColor: '#ffffff',
  statusBarTextColorScheme: 'light',
  navBarHidden: true,
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'red'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userIcon: '' };
    registerScreens();
    this.startApp();
  }
  componentWillMount() {
     // getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
     getImageSource('md-arrow-back', 30).then((source) => this.setState({ userIcon: source }));
     console.log(this.state.userIcon);
   }

  startApp() {
    // Navigation.startTabBasedApp({
    //   tabs: [
    //     {
    //       label: 'One',
    //       screen: 'expose.FirstPage',
    //       icon: this.state.userIcon,
    //       selectedIcon: this.state.userIcon,
    //       title: 'Hello World',
    //       navigatorStyle
    //     },
    //     {
    //       label: 'Two',
    //       screen: 'expose.SecondPage',
    //       icon: this.state.userIcon,
    //       selectedIcon: this.state.userIcon,
    //       title: 'Test Title 2',
    //       navigatorStyle
    //     }
    //   ]
    // });
    Navigation.registerComponent('Expose', () => App);

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'expose.FirstPage',
        title: 'Navigation Bootstrap'
      }
    });
  }
}

