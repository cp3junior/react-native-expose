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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

class PasswordRecoveryPage extends Component {
  onClose() {
		this.props.navigator.dismissModal();
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
  render() {
  	const { container, contClose, closeBtn, imageStyle, fieldTextStyle, inputStyle, formCont, fieldCont, confirmCont, signUpTxt, signUpBtn, confirmStyle, reloadCont, txtSign } = styles;
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
	      		<Text style={fieldTextStyle}>MOBILE PHONE</Text>
	      		<View style={{ flexDirection: 'row' }} >
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={[inputStyle, { flex: 1 }]}
		      			placeholder='+86156******00'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      			keyboardType='phone-pad'
		      		/>
		      		<TouchableOpacity style={confirmCont}>
		      			<Text style={confirmStyle} >Confirm</Text>
		      		</TouchableOpacity>
	      		</View>
      		</View>
      		<View style={fieldCont}>
	      		<Text style={fieldTextStyle}>CONFIRMATION CODE</Text>
	      		<View style={{ flexDirection: 'row' }} >
		      		<TextInput 
		      			underlineColorAndroid='transparent'
		      			style={[inputStyle, { flex: 1 }]}
		      			placeholder='XXXX'
		      			placeholderTextColor='rgba(255,255,255,0.37)'
		      			returnKeyType='next'
		      		/>
		      		<TouchableOpacity style={reloadCont}>
		      			<MaterialCommunityIcons name="reload" size={20} color="white" />
		      		</TouchableOpacity>
		      	</View>
      		</View>
      		<View style={fieldCont}>
      			<Text style={fieldTextStyle}>NEW PASSWORD</Text>
      			<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='***********'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			secureTextEntry
	      		/>
      		</View>
      		<View style={fieldCont}>
      			<Text style={fieldTextStyle}>CONFIRM NEW PASSWORD</Text>
      			<TextInput 
	      			underlineColorAndroid='transparent'
	      			style={inputStyle}
	      			placeholder='***********'
	      			placeholderTextColor='rgba(255,255,255,0.37)'
	      			secureTextEntry
	      		/>
      		</View>
      		<TouchableOpacity >
      			<LinearGradient 
      				colors={['#ffb347', '#FFD200']} 
       				start={{ x: 1.25, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}	
       				style={signUpBtn}
      			>
      				<Text style={signUpTxt}>RECOVER</Text>
      			</LinearGradient>
      		</TouchableOpacity>
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


});
export default PasswordRecoveryPage;
