import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  LayoutAnimation
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCardMini from '../components/ProductCardMini';
import ProductCard from '../components/ProductCard';
import IconButton from '../components/IconButton';

export default class HomePage extends Component {
  static navigatorStyle = {
    ...Platform.select({
      ios: {
        // drawUnderNavBar: true,
        // drawUnderTabBar: true,
        // navBarTranslucent: true,
        navBarBackgroundColor: '#171717',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light',
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
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../img/icons/search_evil.png'),
      id: 'search'
    },
    {
      icon: require('../img/icons/heart_evil.png'),
      id: 'whishlist'
    }]
  };
  constructor(props) {
    super(props);
    this.state = {
            position: 1,
            interval: null
        };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.setState({ interval: setInterval(() => {
        this.setState({ position: this.state.position === 2 ? 0 : this.state.position + 1 });
    }, 4000) });
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onNavigatorEvent(event) {
    if (event.id === 'whishlist') {
      this.props.navigator.push({
        screen: 'expose.WhishListPage',
        title: 'Whish List',
        backButtonHidden: true,
        navigatorStyle: {
          tabBarHidden: true
        }
      });
    } else if (event.id === 'search') {
      this.props.navigator.push({
        screen: 'expose.SearchPage',
        title: 'Search',
        backButtonHidden: true,
        navigatorStyle: {
          navBarHidden: true,
          tabBarHidden: true
        }
      });
    }
  }

  pushCategories() {
    this.props.navigator.push({
      screen: 'expose.CategoryPage',
      title: 'Categories',
      animated: true,
      backButtonTitle: 'Back',
      backButtonHidden: false,
      backgroundColor: 'black',
      navigatorStyle: {
        tabBarHidden: true
      }
    });
  }
  iconButtonPressed(title) {
    this.props.navigator.push({
      screen: 'expose.ProductsPage',
      title,
      animated: true,
      backButtonTitle: 'Back',
      backButtonHidden: false,
      backgroundColor: 'black',
      navigatorStyle: {
        tabBarHidden: true
      },
      passProps: {
        category: title
      }, 
    });
  }
  
  render() {
    const { container, 
      rowContainerCategory, 
      latestContainer,
      seeallLatest,
      textLatest,
      seeallLatestContainer,
      separatorStyle,
    } = styles;
    return (
      <View style={container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
          <StatusBar barStyle="light-content" />
          <ImageSlider 
            height={110}
            images={[
            require('../img/slides/slide3.jpg'),
            require('../img/slides/slide2.jpg'),
            require('../img/slides/slide1.jpg')
            ]}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />

          <View style={rowContainerCategory} >
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Books')}
              name="Books" 
              image={require('./../img/icons/books.png')}
              colorGrad={['#ff6a00', '#ee0979']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Furnitures')}
              name="Furnitures" 
              image={require('./../img/icons/furniture.png')}
              colorGrad={['#ff014b', '#fc00ff']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Accessories')}
              image={require('./../img/icons/accessories.png')}
              name="Accessories" 
              colorGrad={['#24FE41', '#FDFC47']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Fitness')}
              image={require('./../img/icons/fitness.png')}
              name="Fitness" 
              colorGrad={['#0072ff', '#00c6ff']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Food')}
              image={require('./../img/icons/food.png')}
              name="Food" 
              colorGrad={['#1CD8D2', '#93EDC7']} 
            />
          </View>
          <View style={rowContainerCategory} >
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Phones')}
              image={require('./../img/icons/phone.png')}
              name="Phones" 
              colorGrad={['#1FA2FF', '#12D8FA', '#A6FFCB']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Computers')}
              image={require('./../img/icons/computer.png')}
              name="Computers" 
              colorGrad={['#A770EF', '#CF8BF3', '#FDB99B']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Camera')}
              image={require('./../img/icons/camera.png')}
              name="Camera" 
              colorGrad={['#70e1f5', '#ffd194']} 
            />
            <IconButton 
              onPress={this.iconButtonPressed.bind(this, 'Music')}
              image={require('./../img/icons/music.png')}
              name="Music" 
              colorGrad={['#fffc00', '#fdc23f']} 
            />
            <IconButton 
              onPress={this.pushCategories.bind(this)}
              image={require('./../img/icons/grid_all.png')}
              name="All" 
              colorGrad={['#ff014b', '#fdc23f']} 
            />
          </View>
          <View style={separatorStyle} />
          <View style={latestContainer}>
            <Text style={textLatest} >Latest Products</Text>
            <TouchableOpacity style={seeallLatestContainer} >
              <Text style={seeallLatest} >See All </Text>
              <Icon name="chevron-right" size={21} color="gray" style={{ marginTop: 2 }} />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 1 }} >
            <ProductCardMini navigator={this.props.navigator} />
          </View>
          <View style={separatorStyle} />
          <View>
            <Text style={[textLatest, { textAlign: 'center', marginTop: 7 }]} >Recommended</Text>
          </View>
          <View style={{ marginBottom: 1, marginTop: 2, marginRight: 0, marginLeft: 3 }} >
            <ProductCard navigator={this.props.navigator} />
          </View>
          <View style={{ backgroundColor: '#121212', marginTop: 7, flex: 1, alignItems: 'center', padding: 3 }} >
            <Text style={{ color: 'white', opacity: 0.5 }} >Copyright &copy; 2017 Expose. All Rights Reserved.</Text>
            <Text style={{ color: 'white', opacity: 0.5 }} >Design by RAILALA Andriatsimarivo.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingBottom: 46,
        paddingTop: 64,
        backgroundColor: '#0D0D0D'
      },
      android: {
        backgroundColor: '#0D0D0D'
      }
    })
  },
  rowContainerCategory: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 15, 
    marginRight: 15, 
    marginTop: 5
  },
  latestContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15
  },
  textLatest: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5
  },
  seeallLatest: {
    color: 'white',
    textAlign: 'right',
    flex: 1,
  },
  seeallLatestContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  separatorStyle: {
    backgroundColor: 'gray',
    flex: 1,
    height: 1,
    marginTop: 9,
    opacity: 0.2,
    marginRight: 10,
    marginLeft: 10
  },
  rowPayStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8
  },
  imagePayStyle: {
    height: 59,
    width: '49%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2d2d2d'
  }
  
});

