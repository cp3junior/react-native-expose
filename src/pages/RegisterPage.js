import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

class RegisterPage extends Component {
  onClose() {
		this.props.navigator.dismissAllModals();
	}
	onSignIn() {
		this.props.navigator.dismissModal();
	}
	onNext() {
		this.props.navigator.push({
	        screen: 'expose.RegisterPageNext',
	        title: 'Register',
	        backButtonTitle: 'Back',
	        navigatorStyle: {
	          tabBarHidden: true,
	          navBarHidden: true,
		        statusBarHidden: true,
		        screenBackgroundColor: '#0D0D0D',
		        disabledBackGesture: false,
	        }
	    });
	}
  render() {
  	const { container, contClose, closeBtn, confirmCont, fieldTextStyle, inputStyle, formCont, fieldCont, confirmStyle, signUpTxt, signUpBtn, regCont, txtAcc, txtSign, reloadCont } = styles;
    return (
      <LinearGradient 
      colors={['#303030', '#0D0D0D']} 
       start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
      style={container} 
      >
      	<TouchableOpacity style={contClose}>
      		<Icon name="cross" size={35} color="white" style={closeBtn} onPress={this.onClose.bind(this)} />
      	</TouchableOpacity>
      	
      	<ScrollView style={formCont}>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>USERNAME</Text>
	      		<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='Username'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			returnKeyType='next'
	      		/>
      		</View>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>E-MAIL ADDRESS</Text>
	      		<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='email@email.com'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			returnKeyType='next'
	      			keyboardType='email-address'
	      		/>
      		</View>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>MOBILE PHONE</Text>
	      		<View style={{ flexDirection: 'row' }} >
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={[inputStyle, { flex: 3 }]}
		      			placeholder='+86156******00'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      			keyboardType='phone-pad'
		      		/>
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={[inputStyle, { flex: 1 }]}
		      			placeholder='XXXX'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      		<TouchableOpacity style={confirmCont}>
		      			<Text style={confirmStyle} >Confirm</Text>
		      		</TouchableOpacity>
		      		<TouchableOpacity style={reloadCont}>
		      			<MaterialCommunityIcons name="reload" size={20} color="white" />
		      		</TouchableOpacity>
	      		</View>
      		</View>
      		<View style={fieldCont}>
      			<Text style={fieldTextStyle}>PASSWORD</Text>
      			<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='***********'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			secureTextEntry
	      			returnKeyType='next'
	      		/>
      		</View>
      		<View style={fieldCont}>
      			<Text style={fieldTextStyle}>CONFIRM PASSWORD</Text>
      			<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='***********'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			secureTextEntry
	      		/>
      		</View>
      		<TouchableOpacity onPress={this.onNext.bind(this)} >
      			<LinearGradient 
      				colors={['#ff6a00', '#C02425']} 
       				start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}	
       				style={signUpBtn}
      			>
      				<Text style={signUpTxt}>NEXT</Text>
      			</LinearGradient>
      		</TouchableOpacity>
      		<View style={regCont} >
      			<Text style={txtAcc} >Already a member? </Text>
      			<TouchableOpacity onPress={this.onSignIn.bind(this)}>
      				<Text style={txtSign}>Sign In</Text>
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
		padding: 30
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
		// fontWeight: '600',
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

export default RegisterPage;
