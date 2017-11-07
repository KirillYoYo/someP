import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider} from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';


class Page2 extends Component {

    _back () {
      Actions.pop()
    }

    render() {
        return (
          <Container>
            <Content>
                <Title>Title!</Title>
                <Text>Text</Text>
                <Button onPress={this._back}>
                  <Text>BACK</Text>
                </Button>
            </Content>
          </Container>
        );
    }
}

Page2.propTypes = {};
Page2.defaultProps = {};

export default Page2;
