import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  LayoutAnimation,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ListMessages from '../components/ListMessages';

export default class MessagePage extends Component {
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

  constructor(props) {
    super(props);
    this.state = { 
      messages: require('../data/users.js'), 
      inputTextAlign: 'center', 
      inputElevation: 0, 
      textData: '',
      padtop: 64,
      showCancel: false 
    };

    this.props.navigator.setTabBadge({
      tabIndex: 1, 
      badge: 12
    });
  }
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onBlurInput() {
    if (this.state.textData === '') {
      this.hideSearch();
    }
  }
  onFocusInput() {
    this.setState({ inputTextAlign: 'left', inputElevation: 2, padtop: 25, showCancel: true });
    if (Platform.OS === 'ios') {
      this.props.navigator.toggleNavBar({
        to: 'hidden', 
        animated: true 
      });
    }
  }

  hideSearch() {
    this.setState({ inputTextAlign: 'center', inputElevation: 0, padtop: 64, showCancel: false, textData: '' });
      if (Platform.OS === 'ios') {
        this.props.navigator.toggleNavBar({
          to: 'show', 
          animated: true 
        });
      }
  }
  render() {
    const { inputTextAlign, inputElevation, padtop } = this.state;
    return (
      <ScrollView 
        style={[styles.container, { ...Platform.select({ ios: { paddingTop: padtop } }) }]}
        showsVerticalScrollIndicator={false} 
      >
        <View style={styles.searchContainer} >
          <TextInput 
            style={[styles.searchInputStyle, { textAlign: inputTextAlign, elevation: inputElevation }]} 
            placeholder={'Search'} 
            placeholderTextColor='gray' 
            clearButtonMode='while-editing' 
            onFocus={this.onFocusInput.bind(this)}
            onBlur={this.onBlurInput.bind(this)}
            // autoFocus={focus}
            underlineColorAndroid='transparent'
            onChangeText={textData => this.setState({ textData })}
            value={this.state.textData}
            // ref={(ref) => { this.myTextInput = ref; }} 
            autoCorrect={false} 
            ref='searchbar'
            // autoCapitalize="none" 
            // keyboardType="email-address" 
            // returnKeyType="next" 
          />
          { this.state.showCancel && <TouchableOpacity onPress={this.hideSearch.bind(this)} ><Text style={styles.cancelBtnStyle} >Cancel</Text></TouchableOpacity> }
        </View>
        <ListMessages navigator={this.props.navigator} />
        <KeyboardSpacer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    ...Platform.select({
      ios: {
        paddingBottom: 46,
      },
      android: {
        backgroundColor: '#0D0D0D'
      }
    })
  },
  searchInputStyle: {
    height: 26,
    padding: 4,
    borderRadius: 5,
    paddingLeft: 9,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    flex: 1
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#171717',
    padding: 5,
    marginBottom: 1
  },
  cancelBtnStyle: {
    color: '#ff5e23',
    marginLeft: 6,
    fontSize: 19,
    padding: 5
  }
  
});

