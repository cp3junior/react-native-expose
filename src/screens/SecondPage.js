import React, { Component } from 'react';
import { 
  Container,
  Button,
  Text,
  Header,
  Left, 
  Body, 
  Title, 
  Right, 
  Icon, 
  Content, 
  Footer, 
  FooterTab, 
  Form, Item, Label, Input, ListItem
  } from 'native-base';

export default class SecondPage extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTranslucent: true,
  };
  constructor(props) {
    super(props);
  
    this.state = { test: 'Second Page' };
  }

  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent >
                      <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>{ this.state.test }</Title>
              </Body>
              <Right />
          </Header>

          <Content>
              <Text>Content Goes here!</Text>
              <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                        <ListItem>
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                    <ListItem itemHeader first>
                        <Text>COMEDY</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Hangover</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Horrible Bosses</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Conjuring</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>ACTION</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
          </Content>

          <Footer>
              <FooterTab>
                  <Button>
                      <Icon name="apps" />
                      <Text>Apps</Text>
                  </Button>
                  <Button>
                      <Icon name="camera" />
                      <Text>Camera</Text>
                  </Button>
                  <Button active> 
                      <Icon active name="navigate" />
                      <Text>Navigate</Text>
                  </Button>
                  <Button>
                      <Icon name="person" />
                      <Text>Contact</Text>
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
    );
  }
}

