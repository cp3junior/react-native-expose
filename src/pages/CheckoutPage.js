import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { isWXAppInstalled, shareToTimeline } from 'react-native-wechat';
import LinearGradient from 'react-native-linear-gradient';
import ProductCardCheckout from './../components/ProductCardCheckout';

class CheckoutPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	wechatPay: true,
	  	aliPay: false
	  };
	  console.disableYellowBox = true;
	}
	componentDidMount() {
		// registerApp('wxb24c445773822c79');
		isWXAppInstalled().then((res) => (console.log(res)));
	}
	onPay() {
		const payMethod = (this.state.wechatPay) ? 'alipay' : 'wechat';
		if (payMethod === 'alipay') {
			console.log('alipay');
		} else {
			console.log('wechat');
			try {
			  const result = shareToTimeline({
			    type: 'text', 
			    description: 'hello, wechat'
			  });
			  console.log('share text message to time line successful:', result);
			} catch (e) {
			  console.error('share text message to time line failed with:', e);
			}
		}
	}
  render() {
  	const { contChoice, separator, contItem, textItemStyle, textItemUnselected, sectionText, textInfoStyle } = styles;
    return (
    	<View style={{ flex: 1, paddingBottom: 83 }} >
	    	<ScrollView>
	    		<Text style={sectionText} >Informarions & Shipping Address</Text>
	    		<TouchableOpacity style={{ margin: 10, backgroundColor: '#171717', borderRadius: 9, padding: 6 }} >
	    			<View style={{ flexDirection: 'row', marginBottom: 5 }} >
	    				<Text style={[textInfoStyle, { flex: 1 }]}>Username</Text>
	    				<Text style={textInfoStyle}>15632343434</Text>
	    			</View>
	    			<Text style={textInfoStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos provident officia similique. Enim impedit aliquid officia a quo commodi, tenetur possimus, ea quam quasi tempore, vero explicabo. Nulla, nostrum.</Text>
	    		</TouchableOpacity>
	    		<Text style={sectionText} >Paypent Method</Text>
	    		<View style={contChoice} >
	    			<TouchableOpacity style={contItem} onPress={() => (this.setState({ wechatPay: true, aliPay: false }))}>
	    				<Text style={[textItemStyle, { color: '#00A1E9' }, this.state.aliPay && textItemUnselected]}>Alipay</Text>
	    				<MaterialCommunityIcons name='check' size={32} color="#00A1E9" style={this.state.aliPay && { opacity: 0 }} />
	    			</TouchableOpacity>
	    			<View style={separator} />
	    			<TouchableOpacity style={contItem} onPress={() => (this.setState({ wechatPay: false, aliPay: true }))}>
	    				<Text style={[textItemStyle, { color: '#00CF0D' }, this.state.wechatPay && textItemUnselected]}>Wechat</Text>
	    				<MaterialCommunityIcons name='check' size={32} color="#00CF0D" style={this.state.wechatPay && { opacity: 0 }} />
	    			</TouchableOpacity>
	    		</View>
	    		<Text style={sectionText}>Item Details</Text>
	    		<ProductCardCheckout 
	    			navigator={this.props.navigator}
	    		/>
	    	</ScrollView>
	    	<View style={{ position: 'absolute', bottom: 0, backgroundColor: 'transparent', width: '100%' }} >
	    		<View style={{ flexDirection: 'row', justifyContent: 'center', padding: 7, backgroundColor: '#202020', }} >
	    			<Text style={{ color: 'white', fontSize: 24 }} >TOTAL: </Text>
	    			<Text style={{ color: 'rgba(255,94,35,1)', fontSize: 24, fontWeight: '600' }} >¥ 4000 </Text>
	    		</View>
    			<TouchableOpacity onPress={this.onPay.bind(this)} >
	              <LinearGradient 
	                colors={['#fe8c00', '#f83600']} 
	                // style={linearGradient}
	                start={{ x: 0.1, y: 0.1 }} end={{ x: 1, y: 0.1 }}
	              >
	                  <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: '600', fontSize: 25 }} numberOfLines={1} >CHECKOUT</Text>
	              </LinearGradient>
	            </TouchableOpacity>
	    	</View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
	contChoice: {
		marginTop: 10, 
		borderBottomColor: 'rgba(255,255,255,0.2)', 
		borderWidth: 1, 
		borderTopColor: 'rgba(255,255,255,0.2)',
	},
	separator: {
		backgroundColor: 'rgba(255,255,255,0.2)', 
		height: 1, 
		marginLeft: 15, 
		marginRight: 15
	},
	contItem: {
		backgroundColor: 'transparent', 
		flexDirection: 'row', 
		marginLeft: 17, 
		marginRight: 15
	},
	textItemStyle: {
		flex: 1, 
		fontSize: 21, 
		fontWeight: '600', 
		alignSelf: 'center'
	},
	textItemUnselected: {
		color: 'gray',
	},
	sectionText: {
		color: 'white',
		fontSize: 17,
		fontWeight: '600',
		marginLeft: 10,
		marginTop: 8,
		// marginBottom: 4
	},
	textInfoStyle: {
		color: 'rgba(255,255,255,0.8)',
		fontSize: 17
	}
});

export default CheckoutPage;

