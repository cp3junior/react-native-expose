import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

class LoginPage extends Component {
	onClose() {
		this.props.navigator.dismissAllModals();
	}
	onSignUp() {
		this.props.navigator.showModal({
	      screen: 'expose.RegisterPage', 
	      title: 'Register', 
	      passProps: {}, 
	      navigatorStyle: {
	        navBarHidden: true,
	        statusBarHidden: true,
	        tabBarHidden: true,
	        screenBackgroundColor: '#0D0D0D',
	      }, 
	      animationType: 'slide-up' 
	    });
	}
	onRecovery() {
		this.props.navigator.showModal({
	      screen: 'expose.PasswordRecoveryPage', 
	      title: 'Recovery', 
	      passProps: {}, 
	      navigatorStyle: {
	        navBarHidden: true,
	        statusBarHidden: true,
	        tabBarHidden: true,
	        screenBackgroundColor: '#0D0D0D',
	      }, 
	      animationType: 'slide-up' 
	    });
	}
  render() {
  	const { container, contClose, closeBtn, imageStyle, fieldTextStyle, inputStyle, formCont, fieldCont, forgotStyle, signUpTxt, signUpBtn, regCont, txtAcc, txtSign } = styles;
    return (
      <LinearGradient 
      colors={['#303030', '#0D0D0D']} 
       start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
      style={container} 
      >
      	<TouchableOpacity style={contClose}>
      		<Icon name="cross" size={35} color="white" style={closeBtn} onPress={this.onClose.bind(this)} />
      	</TouchableOpacity>
      	<View>
      		<Image style={imageStyle} source={require('./../img/logreg.png')} />
      	</View>
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
      			<Text style={fieldTextStyle}>PASSWORD</Text>
      			<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='***********'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			secureTextEntry={true}
	      		/>
      		</View>
      		<View>
      			<TouchableOpacity onPress={this.onRecovery.bind(this)}>
      				<Text style={forgotStyle}>Forgot Password?</Text>
      			</TouchableOpacity>
      		</View>
      		<TouchableOpacity >
      			<LinearGradient 
      				colors={['#C02425', '#ff6a00']} 
       				start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}	
       				style={signUpBtn}
      			>
      				<Text style={signUpTxt}>SIGN IN</Text>
      			</LinearGradient>
      		</TouchableOpacity>
      		<View style={regCont} >
      			<Text style={txtAcc} >Don't have an account yet? </Text>
      			<TouchableOpacity onPress={this.onSignUp.bind(this)}>
      				<Text style={txtSign}>Sign Up</Text>
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
		height: 200,
		width: 200,
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
	forgotStyle: {
		alignSelf: 'flex-end',
		fontSize: 17,
		color: 'white',
		fontWeight: '600'
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


export default LoginPage;
