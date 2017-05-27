import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
  ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import UserAvatar from 'react-native-user-avatar';
import Modal from 'react-native-modalbox';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import IconButton from '../components/IconButton';
import SettingList from '../components/SettingList';

let MINHEIGHT = 64;
let HEADOPACITY = 0.6;
let PADDINGBOTTOM = 46;
let screen = Dimensions.get('window');

export default class UserPage extends Component {
  static navigatorStyle = {
  ...Platform.select({
      ios: {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        navBarButtonColor: 'black'
      },
      android: {
        navBarColor: 'black',
        navBarBackgroundColor: '#181818',
        navBarTextColor: '#fff', 
        statusBarTextColorSchemeSingleScreen: 'light'
      }
    }),
    screenBackgroundColor: '#0D0D0D',
    navBarHidden: true
  };
  constructor(props) {
    super(props);
  
    this.state = { 
      direction: 'column', 
      opened: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
    if (Platform.OS === 'ios') {
      MINHEIGHT = 64;
      HEADOPACITY = 0.6;
      PADDINGBOTTOM = 46;
    } else {
      MINHEIGHT = 54;
      HEADOPACITY = 1;
      PADDINGBOTTOM = 0;
    }
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

    renderList() {
    var list = [];

    for (var i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
}

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }
  onLogout() {
    this.props.navigator.showModal({
      screen: 'expose.LoginPage', 
      title: 'Login', 
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

  iconButtonPressed(page) {
    this.props.navigator.push({
        screen: 'expose.OrderUserPage',
        title: 'Settings',
        backButtonTitle: 'Back',
        passProps: {
            pageInit: page
        },
        navigatorStyle: {
          tabBarHidden: true,
          navBarHidden: false
        }
    });
  }
  pressed() {
    this.props.navigator.showModal({
      screen: 'expose.ModalPage', // unique ID registered with Navigation.registerScreen
      title: 'Modal', // title of the screen as appears in the nav bar (optional)
      passProps: {}, // simple serializable object that will pass as props to the modal (optional)
      navigatorStyle: {
        navBarHidden: true,
        statusBarHidden: true,
        tabBarHidden: true,
      }, // override the navigator style for the screen, see 'Styling the navigator' below (optional)
      animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
  }
  onTerms() {
    this.props.navigator.push({
      screen: 'expose.TermsPage', 
      title: 'Terms & Conditions',
      backButtonTitle: 'Back', 
      navigatorStyle: {
        tabBarHidden: true,
      }, 
    });
  }
  onPrivacy() {
    this.props.navigator.push({
      screen: 'expose.PrivacyPage', 
      title: 'Privacy Policy', 
      backButtonTitle: 'Back',
      navigatorStyle: {
        tabBarHidden: true,
      }, 
    });
  }
  
  render() {
    const { 
      image, 
      titleContainer, 
      imageTitle, 
      navTitleViewStyle, 
      navTitle, 
      contentContainer, 
      rowContainerCategory,
      settingContainer,
      separatorStyle,
      separatorText } = styles;
    return (
      <View style={{ flex: 1 }} >
        <HeaderImageScrollView
          showsVerticalScrollIndicator={false}
          maxHeight={175}
          minHeight={MINHEIGHT}
          maxOverlayOpacity={HEADOPACITY}
          minOverlayOpacity={0}
          fadeOutForeground
          renderHeader={() => (
            <Image source={require('./../img/bgUser.jpg')} style={image} />
          )}
          renderForeground={() => (
            <View style={titleContainer}>
                <TouchableOpacity>
                    <UserAvatar size="90" name="Jon Doe" />
                    <Text style={imageTitle}> Jon Doe </Text>
                </TouchableOpacity>
            </View>
          )}
          renderFixedForeground={() => (
            <Animatable.View
              style={navTitleViewStyle}
              ref={(navTitleView) => { this.navTitleView = navTitleView; }}
            >
              <Text style={navTitle}>Jon Doe</Text>
            </Animatable.View>
          )}
        >

          <View style={contentContainer}>
            <TriggeringView 
            onBeginHidden={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(300)}
            > 
                <View style={{ backgroundColor: '#0D0D0D', paddingBottom: PADDINGBOTTOM }} >
                     <View style={rowContainerCategory} >
                        <IconButton 
                          onPress={this.iconButtonPressed.bind(this, 0)}
                          name="My Wish List" 
                          image={require('./../img/icons/heart_img.png')} 
                          colorGrad={['#ff014b', '#fc00ff']} 
                        />
                        <IconButton 
                          onPress={this.iconButtonPressed.bind(this, 1)}
                          image={require('./../img/icons/my_orders.png')}
                          name="My Orders" 
                          colorGrad={['#24FE41', '#FDFC47']} 
                        />
                        <IconButton 
                          onPress={this.iconButtonPressed.bind(this, 2)}
                          image={require('./../img/icons/truck.png')}
                          name="Track Orders" 
                          colorGrad={['#ff014b', '#fdc23f']} 
                        />
                    </View>
                    <View style={separatorStyle} />
                    
                    <View>
                        <Text style={separatorText} >Settigs</Text>
                    </View>
                    <View style={settingContainer}>
                        <SettingList name="Edit Information" color="blue" icon="pencil" />
                        <SettingList name="Shipping Address" icon="home-map-marker" color="#f1c40f" />
                        <SettingList name="Change Phone Number" icon="cellphone" color="#1abc9c" />
                        <SettingList name="Change Password" style={{ borderBottomWidth: 0 }} icon="lock" color="#ff2828" onPress={this.onRecovery.bind(this)} />
                    </View> 
                    <View>
                        <Text style={separatorText} >Confidentialities</Text>
                    </View>
                    <View style={settingContainer}>
                        <SettingList name="Terms & Conditions" icon="library-books" color="#9b59b6" onPress={this.onTerms.bind(this)} />
                        <SettingList name="Privacy Policy" icon="account-key" color="#95a5a6" onPress={this.onPrivacy.bind(this)} />
                        <SettingList name="Rating and Suggestions" icon="star" color="#f39c12" />
                        <SettingList name="Share this App" style={{ borderBottomWidth: 0 }} icon="share-variant" color="#1abc9c" />
                    </View>
                    <View style={settingContainer}>
                        <SettingList name="Logout" color="#ff2828" style={{ borderBottomWidth: 0 }} icon="power" onPress={this.onLogout.bind(this)} />
                    </View>
                    <View>
                        <Text style={[separatorText, { marginTop: 0 }]} >Version 0.0.1, Build 21</Text>
                    </View>

                </View>
            </TriggeringView>
          </View>
        </HeaderImageScrollView>
                <Modal style={[styles.modal, styles.modal4]} position={'bottom'} ref={'modal6'} swipeArea={20}>
                  <ScrollView>
                    <View style={{ width: screen.width, paddingLeft: 10 }}>
                      {this.renderList()}
                    </View>
                  </ScrollView>
                </Modal>
      </View>
     
    );
  }
  
}

const styles = StyleSheet.create({
    separatorText: {
        color: 'gray', 
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16,
    },
    settingContainer: {
        marginTop: 3,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128,128,128,0.2)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(128,128,128,0.2)',
        backgroundColor: '#171717',
    },
  contentContainer: {
    backgroundColor: '#0D0D0D',
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
  rowContainerCategory: {
    flexDirection: 'row', //TODO : funny animation ==> expand
    justifyContent: 'space-between', 
    marginLeft: 15, 
    marginRight: 15, 
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0D0D0D'
  },
  navTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 21,
        fontWeight: '600'
      },
      android: {
        fontSize: 20,
        fontWeight: '100',
        marginLeft: 16,
        marginBottom: 8
      }
    })
  },
  image: {
    height: 175,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  navTitleViewStyle: {
    height: MINHEIGHT,
    opacity: 0,
    ...Platform.select({
      ios: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingTop: 19
      },
      android: {
        backgroundColor: '#181818',
        justifyContent: 'center',
      }
    })
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

