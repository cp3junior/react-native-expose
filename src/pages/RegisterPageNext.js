import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';

class RegisterPageNext extends Component {
	onClose() {
		this.props.navigator.pop();
	}
	onTerms() {
	    this.props.navigator.push({
	      screen: 'expose.TermsPage', 
	      title: 'Terms & Conditions',
	      backButtonTitle: 'Back', 
	      navigatorStyle: {
	        tabBarHidden: true,
	        screenBackgroundColor: '#0D0D0D',
	        navBarBackgroundColor: '#171717',
	        navBarTextColor: '#fff', 
	        statusBarTextColorSchemeSingleScreen: 'light',
	      }, 
	    });
	  }
	  onPrivacy() {
	    this.props.navigator.push({
	      screen: 'expose.PrivacyPage', 
	      title: 'Privacy Policy', 
	      backButtonTitle: 'Back',
	      navigatorStyle: {
	        tabBarHidden: true,
	        screenBackgroundColor: '#0D0D0D',
	        navBarBackgroundColor: '#171717',
	        navBarTextColor: '#fff', 
	        statusBarTextColorSchemeSingleScreen: 'light',
	      }, 
	    });
	  }
  render() {
  	const { container, condText, condBtn, condBtnCont, fieldTextStyle, inputStyle, formCont, fieldCont, confirmStyle, signUpTxt, signUpBtn, regCont, txtAcc, txtSign, reloadCont } = styles;
    return (
      <LinearGradient 
      colors={['#303030', '#0D0D0D']} 
       start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
      style={container} 
      >	    	
      	<ScrollView style={formCont}>
      		<View style={[fieldCont, { flexDirection: 'row' }]}>
      			<View style={{ flex: 1 }} >
		      		<Text style={fieldTextStyle}>TITLE</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='Gender'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
	      		</View>
	      		<View style={{ flex: 2 }} >
		      		<Text style={fieldTextStyle}>FULL NAME</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='Full Name'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
	      		</View>
		      	
      		</View>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>BIRTHDAY</Text>
	      		<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='1st May 1990'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			returnKeyType='next'
	      		/>
      		</View>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>ADDRESS</Text>
	      		<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='Address Street'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			returnKeyType='next'
	      		/>
      		</View>
      		<View style={[fieldCont, { flexDirection: 'row' }]}>
      			<View style={{ flex: 1 }} >
		      		<Text style={fieldTextStyle}>CITY</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='City'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      	</View>
		      	<View style={{ flex: 1 }} >
		      		<Text style={fieldTextStyle}>STATE/PROVINCE</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='State/Province'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      	</View>
      		</View>
      		<View style={[fieldCont, { flexDirection: 'row' }]}>
      			<View style={{ flex: 1 }} >
		      		<Text style={fieldTextStyle}>COUNTRY</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='Country'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      	</View>
		      	<View style={{ flex: 1 }} >
		      		<Text style={fieldTextStyle}>POST/ZIP CODE</Text>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={inputStyle}
		      			placeholder='Post/Zip Code'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      	</View>
      		</View>
      		<View>
      			<View style={{ flexDirection: 'row', marginBottom: 5 }} >
	      			<CheckBox
					  checked={false}
					  onClick={(checked) => console.log('I am checked', checked)}
					  checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 22, width: 22 }} />}
             		  unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 22, width: 22 }} />}
					  />
	      			<Text style={condText}>I have read and accepted the </Text>
	      			<TouchableOpacity style={condBtnCont} onPress={this.onTerms.bind(this)}>
	      				<Text style={condBtn}>Terms & Conditions</Text>
	      			</TouchableOpacity>
      			</View>
      			<View style={{ flexDirection: 'row', marginBottom: 5 }} >
	      			<CheckBox
					  checked={false}
					  onClick={(checked) => console.log('I am checked', checked)}
					  checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 22, width: 22 }} />}
             		  unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 22, width: 22 }} />}
					  />
	      			<Text style={condText}>I have read and understood the </Text>
	      			<TouchableOpacity style={condBtnCont} onPress={this.onPrivacy.bind(this)}>
	      				<Text style={condBtn}>Privacy Policies</Text>
	      			</TouchableOpacity>
      			</View>
      			<View style={{ flexDirection: 'row', marginBottom: 5 }} >
	      			<CheckBox
					  checked={false}
					  onClick={(checked) => console.log('I am checked', checked)}
					  checkedImage={<Image source={require('./../img/icons/check_true_full.png')} style={{ height: 22, width: 22 }} />}
             		  unCheckedImage={<Image source={require('./../img/icons/check_false.png')} style={{ height: 22, width: 22 }} />}
					  />
      				<Text style={condText}>I am at least 18 years old</Text>
      			</View>
      		</View>
      		
      		<View style={{ flexDirection: 'row' }} >
	      		<TouchableOpacity style={{ flex: 1 }} onPress={this.onClose.bind(this)} >
	      			<LinearGradient 
	      				colors={['#D31027', '#EA384D']} 
	       				start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}	
	       				style={signUpBtn}
	      			>
	      				<Text style={signUpTxt}>BACK</Text>
	      			</LinearGradient>
	      		</TouchableOpacity>
	      		<TouchableOpacity style={{ flex: 1 }} >
	      			<LinearGradient 
	      				colors={['#DCE35B', '#56ab2f']} 
	       				start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}	
	       				style={signUpBtn}
	      			>
	      				<Text style={signUpTxt}>SIGN UP</Text>
	      			</LinearGradient>
	      		</TouchableOpacity>
      		</View>
      	</ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		flex: 1
	},
	condText: {
		color: 'gray',
		fontSize: 14,
		alignSelf: 'center',
		marginLeft: 4
	},
	condBtn: {
		color: 'white',
		fontSize: 14,
		fontWeight: '600'
	},
	condBtnCont: {
		alignSelf: 'center',
	},
	contClose: {
		marginTop: 20,
	},
	closeBtn: {
		alignSelf: 'flex-end',
		opacity: 0.9,
		marginRight: 5
	},
	imageStyle: {
		height: 175,
		width: 175,
		alignSelf: 'center',
	},
	inputStyle: {
		height: 40,
		// backgroundColor: 'red',
		padding: 5,
		color: 'white'
	},
	fieldTextStyle: {
		fontSize: 20,
		fontWeight: '600',
		color: '#E44D26'
	},
	formCont: {
		padding: 30,
		marginTop: 20
	},
	fieldCont: {
		borderBottomWidth: 1,
		borderBottomColor: '#F16529',
		marginBottom: 15
	},
	confirmStyle: {
		fontSize: 17,
		color: 'white',
	},
	confirmCont: {
		alignSelf: 'center',
		borderRadius: 9,
		backgroundColor: '#2ecc71',
		padding: 6
	},
	reloadCont: {
		alignSelf: 'center',
		borderRadius: 9,
		backgroundColor: '#f1c40f',
		padding: 4
	},
	signUpTxt: {
		alignSelf: 'center',
		fontSize: 26,
		padding: 11,
		color: 'white'
	},
	signUpBtn: {
		borderRadius: 50,
		margin: 10,
		marginTop: 20,
	},
	regCont: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 30,
	},
	txtAcc: {
		color: 'gray',
		fontSize: 18
	},
	txtSign: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600'
	}
});


export default RegisterPageNext;
