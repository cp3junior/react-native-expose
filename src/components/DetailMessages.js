import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment/min/moment-with-locales.min';

export default class DetailMessages extends Component {
	constructor(props) {
		super(props);
		this.state = { data: require('../data/users.js') };
	}
	onPushMessage(data) {
		this.props.navigator.push({
			screen: 'expose.DetailsMessage',
			title: data.name,
			passProps: { data },
			animated: true,
			backButtonTitle: 'Messages',
			navigatorStyle: {
				tabBarHidden: true
			}
		});
	}
	render() {
		const { name, text, createdAt } = this.props.data;
		const { container, 
			styleAvatar, 
			styleList, 
			styleTextTop, 
			styleTextBottom, 
			styleName,
			styleDate,
			styleText
		} = styles;
		return (
			<TouchableOpacity onPress={this.onPushMessage.bind(this, this.props.data)} >
				<View style={container} >
					<View style={styleAvatar}>
						<UserAvatar size="50" name={name} />
					</View>
					<View style={styleList}>
						<View style={styleTextTop}>
							<Text style={styleName} >{name}</Text>
							<Text style={styleDate} >
								{moment(createdAt).format('HH:mm').toUpperCase()}
							</Text>					
						</View>
						<View style={styleTextBottom} >
							<Text style={styleText} numberOfLines={2} >{text}</Text>	
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    paddingTop: 5, 
    paddingBottom: 5, 
    paddingLeft: 15, 
    paddingRight: 15, 
    flexDirection: 'row'
  },
  styleList: {
	flex: 5
  },
  styleAvatar: {
	paddingRight: 5,
	flex: 1
  },
  styleTextTop: {
	flexDirection: 'row',
  },
  styleName: {
	color: 'white',
	fontWeight: 'bold',
	fontSize: 16
  },
  styleDate: {
	flex: 1,
	color: 'gray',
	textAlign: 'right',
	marginRight: 5,
	opacity: 0.8
  },
  styleText: {
	flex: 1,
	color: 'gray'
  }
});

