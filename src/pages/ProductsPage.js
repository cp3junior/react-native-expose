import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import ProductCard from '../components/ProductCard';

class ProductsPage extends Component {
	
  render() {
  	const { separatorStyle } = styles;
  	const { category } = this.props;
    return (
      <ScrollView>
      	<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }} >
      		<Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginRight: 10 }} >Categories :</Text>
      		<ModalDropdown 
      			options={['All',
      			 'Books',
      			 'Furnitures',
      			 'Accessories',
      			 'Fitness',
      			 'Food',
      			 'Phones',
      			 'Computers',
      			 'Camera',
      			 'Music',
      			 'Clothing',
      			 'Motorcycle',
      			 'Personal Care',
      			 'Health Care',
      			 'Others'
      			 ]} 
      			defaultValue={category}
      			textStyle={{ color: 'darkorange', fontSize: 21, fontWeight: '800' }}
      		/>
      	</View>
      	<View style={separatorStyle} />
      	<ProductCard navigator={this.props.navigator} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	separatorStyle: {
		backgroundColor: 'gray',
	    height: 1,
	    marginTop: 10,
	    marginBottom: 5,
	    opacity: 0.3,
	    marginRight: 15,
	    marginLeft: 15
	}
});


export default ProductsPage;

