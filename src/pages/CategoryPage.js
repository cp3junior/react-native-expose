import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';
import CategoryList from '../components/CategoryList';

export default class CategoryPage extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#ff5e23',
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true
      },
      android: {
        navBarColor: 'black',
        navBarBackgroundColor: '#181818',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light'
      }
    }),
    screenBackgroundColor: '#0D0D0D'
  };
  constructor(props) {
    super(props);
    this.state = { categories: require('../data/categories') };
  }
  onPress(title) {
    this.props.navigator.push({
      screen: 'expose.ProductsPage',
      title,
      animated: true,
      backButtonTitle: 'Back',
      backButtonHidden: false,
      backgroundColor: 'black',
      navigatorStyle: {
        tabBarHidden: true,
          navBarButtonColor: '#ff5e23',
      },
      passProps: {
        category: title
      },
    });
  }
  renderList() {
    const { categories } = this.state;
    const lapsList = categories.map((data, i) => {
      return (
        <CategoryList key={i} name={data.name} number={data.number} onPress={this.onPress.bind(this, data.name)} />
      );
    });
    return lapsList;
  }
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        {this.renderList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    ...Platform.select({
      ios: {
        paddingBottom: 54,
        marginBottom: 50,
        paddingTop: 64
      },
      android: {
        backgroundColor: '#0D0D0D'
      }
    })
  },
});

