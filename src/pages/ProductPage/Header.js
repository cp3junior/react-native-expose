import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Platform,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

let ICON = 'ios-arrow-back';

class Header extends Component {
	componentWillMount() {
		if (Platform.OS === 'ios') {
	      	ICON = 'ios-arrow-back';
	    } else {
	      	ICON = 'md-arrow-back';
	    }
	}
	onBack() {
		this.props.navigator.pop();
	}
  render() {
  	const { headContainer, imageStyle, styleNav, backStyle, container, navCont } = styles;
  	const { scrollY, scrollView, reviewItem, detailItem, moreItem } = this.props;
  	const OPACITY = scrollY.interpolate({
                  inputRange: [0, 250],
                  outputRange: [0, 1]
                });
  	// const COLOR = scrollY.interpolate({
   //                inputRange: [270, 450, 600],
   //                outputRange: [.6, 1, 1]
   //              });
  	// console.log(OPACITY);
    return (
    	<View style={container} ref='headerPart'>
	      <Animated.View style={[headContainer, { opacity: OPACITY }]} >
	            <Image 
	              style={imageStyle} 
	              source={require('../../img/products/product1.jpg')} 
	            />
		          <View style={navCont} >
		            <TouchableOpacity onPress={() => { scrollView._component.scrollTo({ y: (detailItem - 84) }); }}>
		              <Text style={styleNav} >Details</Text>
		            </TouchableOpacity>
		            <TouchableOpacity onPress={() => { scrollView._component.scrollTo({ y: (reviewItem - 84) }); }}>
		              <Animated.Text style={styleNav} >Reviews(3)</Animated.Text>
		            </TouchableOpacity>
		            <TouchableOpacity onPress={() => { scrollView._component.scrollTo({ y: (moreItem - 84) }); }}>
		              <Text style={styleNav} >More</Text>
		            </TouchableOpacity>
		          </View>
	        </Animated.View> 
            <TouchableOpacity onPress={this.onBack.bind(this)} style={backStyle} >
              <Ionicons name={ICON} size={35} color="#ff5e23" />
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		width: '100%'
	},
	headContainer: {
		backgroundColor: 'rgba(23,23,23,1)',
	    ...Platform.select({
	      ios: {
	        paddingTop: 24,
	      },
	      android: {
	        paddingTop: 5,
	      }
	    }),
	},
	navCont: {
		flexDirection: 'row', 
	    justifyContent: 'space-between', 
	    marginLeft: 10, 
	    marginRight: 10, 
	    marginBottom: 6, 
	},
	imageStyle: {
	    height: 28, 
	    width: 29,
	    alignSelf: 'center',
	    marginBottom: 8
  	},
  	styleNav: {
	    fontSize: 17,
	    color: '#ff5e23', 
	    fontWeight: '600'
	},
	backStyle: {
	    backgroundColor: 'transparent', 
	    position: 'absolute',
	    ...Platform.select({
	      ios: {
	        marginTop: 22,
	        marginLeft: 15
	      },
	      android: {
	        marginTop: 5,
	        marginLeft: 15
	      }
	    }),
  	},

});


export default Header;
