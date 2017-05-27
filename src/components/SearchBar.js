import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = { inputTextAlign: 'left', inputElevation: 2, textData: '' };
  }
  onSubmit() {
    const title = 'Search for: ' + this.state.textData;
    this.props.navigator.push({
      screen: 'expose.ProductsPage',
      title,
      animated: true,
      backButtonTitle: 'Back',
      backButtonHidden: false,
      backgroundColor: 'black',
      navigatorStyle: {
        tabBarHidden: true,
          navBarButtonColor: '#ff5e23',
      },
      passProps: {
        search: this.state.textData,
        category: 'All'
      }, 
    });
  }
  render() {
    const { 
        mainContailer, 
        textStyle, 
        inputStyle, 
        inputContainer, 
        textContainer 
        } = styles;//object destructuring in ES6
    const { onCloseSearch } = this.props;
    const { inputTextAlign, inputElevation } = this.state;
    TextInput.State.focusTextInput(TextInput.State.currentlyFocusedField());
    return (
      <View style={mainContailer} >
        <View style={inputContainer} keyboardShouldPersistTaps="always">
          <TextInput 
            style={[inputStyle, { textAlign: inputTextAlign, elevation: inputElevation }]} 
            placeholder={'Search'} 
            placeholderTextColor='gray' 
            clearButtonMode='while-editing' 
            onFocus={() => { this.setState({ inputTextAlign: 'left', inputElevation: 2 }); }}
            onBlur={() => { this.setState({ inputTextAlign: 'center', inputElevation: 0 }); }}
            underlineColorAndroid='transparent'
            onChangeText={textData => this.setState({ textData })}
            value={this.state.textData}
            // ref={(ref) => { this.myTextInput = ref; }} 
            autoFocus
            autoCorrect={false} 
            // autoCapitalize="none" 
            // keyboardType="email-address" 
            // returnKeyType="next" 
            onSubmitEditing={this.onSubmit.bind(this)}
          />
        </View>
        <View style={textContainer} >
          <TouchableOpacity onPress={onCloseSearch}>
            <Text style={textStyle} > {'Cancel'} </Text>
          </TouchableOpacity>
        </View>
          <KeyboardSpacer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContailer: {
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        paddingTop: 15,
      },
      android: {
        elevation: 2
      }
    })
  },
  textStyle: {
    fontSize: 20,
    color: '#ff5e23'
  },
  inputStyle: {
    height: 24,
    padding: 3,
    borderRadius: 4,
    paddingLeft: 9,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  inputContainer: {
    flex: 4,
    marginLeft: 10
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  }
});

