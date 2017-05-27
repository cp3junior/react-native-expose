import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView } from 'react-native';

export default class DetailsMessage extends Component {
	static navigatorStyle = {
		...Platform.select({
		    ios: {
		      drawUnderNavBar: true,
		      drawUnderTabBar: true,
		      navBarTranslucent: true,
		      navBarButtonColor: '#ff5e23',
		    },
		    android: {
		      // navBarBackgroundColor: 'white',
		      navBarColor: 'black',
		      navBarBackgroundColor: '#181818',
		      navBarTextColor: '#fff', 
		      statusBarTextColorSchemeSingleScreen: 'light',
		      navBarButtonColor: '#ff5e23',
		    }
		  }),
			screenBackgroundColor: '#0D0D0D'
		};
	constructor(props) {
		super(props);
		this.state = { test: 'waaa' };
	}
	
	render() {
		// console.log(this.props);
		const { name, text } = this.props.data;
		return (
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}  >
				<Text style={{ color: 'white' }} >
					{name}
				</Text>
				<Text style={{ color: 'white' }} >{text}</Text>
			</ScrollView>
		);
	}
}
		
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingBottom: 54,
        paddingTop: 64,
        backgroundColor: '#0D0D0D'
      },
      android: {
        backgroundColor: '#0D0D0D'
        //paddingTop: 56
      }
    })
  },
});

