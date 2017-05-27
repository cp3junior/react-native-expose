import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Platform
} from 'react-native';

class PrivacyPage extends Component {
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
  render() {
  	const { container, textStyle } = styles;
    return (
      <ScrollView style={container}> 
      	<Text style={textStyle}>
      		"Expose" is committed to protecting your privacy, and takes its responsibilities regarding the security of customer information very seriously. This policy explains how we use customer information and how we protect your privacy.
      	</Text>
      	<Text style={textStyle}>
      		1. Use of Customer Information: We require certain information to allow us to process your purchases. "Expose" collects the details provided by you, together with information we learn about you from your use of our service and your visits to our app. We also collect information about the transactions you undertake.
      	</Text>
      	<Text style={textStyle}>
      		2.  Requesting personal data: You have a right to request a copy of information that "Expose" holds about you. This could include messages, purchase logs or information relating to purchases you have done with us.
      	</Text>
      	<Text style={textStyle}>
      		3. Security to protect your information and data retention: When you buy an item or enter personally identifying information, your details are transmitted across the internet securely using high-grade encryption (128 bit).
      	</Text>
      	<Text style={textStyle}>
      		4. Your consent In using the "Expose" app: You consent to the collection and use of this information by "Expose" in the ways described above.
      	</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    ...Platform.select({
	      ios: {
	        paddingTop: 67,
	      },
	      android: {
	      	paddingTop: 3,
	      }
	    }),
	    backgroundColor: '#0D0D0D',
	    paddingLeft: 10,
	    paddingRight: 10
	    
	},
	textStyle: {
		color: 'gray',
		fontSize: 18,
		marginBottom: 20
	}
});

export default PrivacyPage;

