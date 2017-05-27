import React, { Component } from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import DetailMessages from './DetailMessages';

export default class ListMessages extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: require('../data/users.js'), test: 'waaa' };
	}
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.state.messages);
	}
	renderRow(message) {
		return (
			<View>
				<DetailMessages data={message} navigator={this.props.navigator} />
			</View>
		);
	}
	renderSeparator(sectionID: number, rowID: number) {
		return (
			<View
				key={`${sectionID}-${rowID}`}
				style={{
					height: 1,
					backgroundColor: 'gray',
					opacity: 0.2,
					marginLeft: 5,
					marginRight: 5
				}}
			/>
		);
	}
	render() {
		return (
			<ListView  
				style={styles.container}
				dataSource={this.dataSource}
				renderRow={this.renderRow.bind(this)}
				renderSeparator={this.renderSeparator}
			/>
		);
	}
}
	
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    marginTop: 0
  },
});

